import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <PulseLoader className="text-black h-6" />
    </div>
  );
};

export default Loading;
