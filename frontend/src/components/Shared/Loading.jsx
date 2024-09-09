// import HashLoader from "react-spinners/HashLoader";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* <HashLoader color="#0067FF" /> */}
      <PulseLoader color="#0067FF" />
    </div>
  );
};

export default Loading;
