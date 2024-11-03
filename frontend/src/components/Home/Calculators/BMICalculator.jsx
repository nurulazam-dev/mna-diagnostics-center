import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
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
      {bmi && (
        <p className="text-center mt-4 text-lg font-semibold">
          Your BMI is: <span className="text-blue-600">{bmi}</span>
        </p>
      )}
    </div>
  );
};

export default BMICalculator;
