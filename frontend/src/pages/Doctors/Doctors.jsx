import { useEffect, useState } from "react";
import DoctorCard from "../../components/Home/Doctors/DoctorCard";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Error from "../../components/Shared/Error";
import Loader from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

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
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or specification"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn mt-0 rounded-[0px] rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard doctor={doctor} key={doctor.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===Testimonial component=== */}
      <Testimonial />
    </>
  );
};

export default Doctors;
