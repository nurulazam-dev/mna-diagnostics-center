import { useState } from "react";
import BMICalculator from "./BMICalculator";
import CalorieCounter from "./CalorieCounter";
import HeartHealthCalculator from "./HeartHealthCalculator";

const HealthCalculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState("BMI");

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Health Calculators
      </h2>
      <div className="flex justify-around mb-4">
        {["BMI", "Heart Health", "Calorie Counter"].map((tool) => (
          <button
            key={tool}
            onClick={() => setSelectedCalculator(tool)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCalculator === tool
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {selectedCalculator === "BMI" && <BMICalculator />}
        {selectedCalculator === "Heart Health" && <HeartHealthCalculator />}
        {selectedCalculator === "Calorie Counter" && <CalorieCounter />}
      </div>
    </div>
  );
};

export default HealthCalculators;
