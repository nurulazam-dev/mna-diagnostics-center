import { useState } from "react";

const CalorieCounter = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (age && weight && height) {
      let bmr;
      // Calculate BMR based on gender
      if (gender === "male") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      // Calculate total calories by multiplying BMR by the activity level
      const totalCalories = Math.round(bmr * parseFloat(activityLevel));
      setCalories(totalCalories);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your age"
        />
      </div>
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
      <div>
        <label className="block font-medium mb-1">Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="1.2">Sedentary (little to no exercise)</option>
          <option value="1.375">
            Lightly active (light exercise/sports 1-3 days a week)
          </option>
          <option value="1.55">
            Moderately active (moderate exercise/sports 3-5 days a week)
          </option>
          <option value="1.725">
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option value="1.9">
            Super active (very hard exercise or a physical job)
          </option>
        </select>
      </div>
      <button
        onClick={calculateCalories}
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
      >
        Calculate Daily Calories
      </button>

      {calories && (
        <p className="text-center mt-4 text-lg font-semibold">
          Your daily calorie needs:{" "}
          <span className="text-blue-600">{calories} kcal</span>
        </p>
      )}
    </div>
  );
};

export default CalorieCounter;
