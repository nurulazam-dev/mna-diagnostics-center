import { useState } from "react";
import bgImg from "../../../assets/images/bgImg.png";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your weight"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your height"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
      >
        Calculate BMI
      </button>

      {/* ===result part=== */}
      {/* {bmi && (
        <p className="text-center mt-4 text-lg font-semibold">
          Your BMI is: <span className="text-blue-600">{bmi}</span>
        </p>
      )} */}

      {/* =======Modal===== */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="p-6 rounded shadow-lg text-center max-w-sm w-full"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            <h3 className="text-[24px] text-violet-700 font-bold mb-4 bg-white">
              Calculate BMI
            </h3>
            <p className="text-lg">Your BMI is: </p>
            <h3 className="text-red-600 text-2xl font-bold">{bmi}</h3>{" "}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-violet-600 text-white font-bold py-2 animate-bounce hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
