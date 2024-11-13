import { useEffect, useState } from "react";
import Error from "../../components/Shared/Error";
import Loader from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeOut);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <section className="container mb-10">
      <div className="mt-3">
        <div className="container text-center">
          <h2 className="heading">Search a Doctor</h2>

          <div className="max-w-[570px] mt-[10px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-textColor"
              placeholder="Doctor's name or specification"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="py-[15px] px-[35px] text-white font-[600] bg-violet-600 hover:bg-green-600 mt-0 rounded-[0px] rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="my-7">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor?._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
