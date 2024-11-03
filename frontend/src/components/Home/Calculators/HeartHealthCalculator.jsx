import { useState } from "react";

const HeartHealthCalculator = () => {
  const [age, setAge] = useState("");
  const [restingHeartRate, setRestingHeartRate] = useState("");
  const [targetHeartRate, setTargetHeartRate] = useState(null);

  const calculateHeartRateZones = () => {
    if (age && restingHeartRate) {
      const maxHeartRate = 220 - age;
      const heartRateReserve = maxHeartRate - restingHeartRate;

      // Example zones based on percentage of heart rate reserve
      const fatBurnZone = Math.round(restingHeartRate + heartRateReserve * 0.5);
      const cardioZone = Math.round(restingHeartRate + heartRateReserve * 0.7);
      const peakZone = Math.round(restingHeartRate + heartRateReserve * 0.85);

      setTargetHeartRate({
        fatBurn: fatBurnZone,
        cardio: cardioZone,
        peak: peakZone,
      });
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
        <label className="block font-medium mb-1">
          Resting Heart Rate (bpm):
        </label>
        <input
          type="number"
          value={restingHeartRate}
          onChange={(e) => setRestingHeartRate(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your resting heart rate"
        />
      </div>
      <button
        onClick={calculateHeartRateZones}
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
      >
        Calculate Heart Rate Zones
      </button>

      {targetHeartRate && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Target Heart Rate Zones:</p>
          <p>
            Fat Burn Zone:{" "}
            <span className="text-blue-600">{targetHeartRate.fatBurn} bpm</span>
          </p>
          <p>
            Cardio Zone:{" "}
            <span className="text-blue-600">{targetHeartRate.cardio} bpm</span>
          </p>
          <p>
            Peak Zone:{" "}
            <span className="text-blue-600">{targetHeartRate.peak} bpm</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HeartHealthCalculator;
