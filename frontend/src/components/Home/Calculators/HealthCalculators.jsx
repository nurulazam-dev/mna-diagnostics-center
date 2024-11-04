import { useState } from "react";
import bgImg from "../../../assets/images/bgImg.png";
import calculatorImg from "../../../assets/images/home/calculator.png";
import BMICalculator from "./BMICalculator";
import CalorieCounter from "./CalorieCounter";
import HeartHealthCalculator from "./HeartHealthCalculator";

const HealthCalculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState("BMI");

  return (
    <div className="w-full mx-auto px-6">
      <h2 className="heading text-center">Health Calculators</h2>

      <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1">
        <div className="">
          <img src={calculatorImg} alt="" />
        </div>
        <div className="col-span-2 lg:mt-0 mt-3">
          <div className="flex gap-2 lg:gap-6 mb-2">
            {["BMI", "Heart Health", "Calorie Counter"].map((tool) => (
              <button
                key={tool}
                onClick={() => setSelectedCalculator(tool)}
                className={`lg:px-4 px-[12px] lg:py-2 py-[6px] rounded font-bold ${
                  selectedCalculator === tool
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>

          <div
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
            className="p-6 pb-4 rounded-md shadow-lg"
          >
            {selectedCalculator === "BMI" && <BMICalculator />}
            {selectedCalculator === "Heart Health" && <HeartHealthCalculator />}
            {selectedCalculator === "Calorie Counter" && <CalorieCounter />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCalculators;
