import { useState } from "react";
import bgImg from "../../../assets/images/bgImg.png";

const HeartHealthCalculator = () => {
  const [age, setAge] = useState("");
  const [restingHeartRate, setRestingHeartRate] = useState("");
  const [targetHeartRate, setTargetHeartRate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const inputClass = `w-full p-2 border border-[#0066ff61] focus:outline-none focus:border-violet-700 text-[16px] text-headingColor placeholder:text-gray-400`;

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={inputClass}
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
          className={inputClass}
          placeholder="Enter your resting heart rate"
        />
      </div>
      <button
        onClick={calculateHeartRateZones}
        className="customBtn animate-bounce"
      >
        Calculate Heart Rate Zones
      </button>

      {/* ===result part=== */}
      {/* {targetHeartRate && (
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
              Target Heart Rate Zones
            </h3>

            <p className="text-lg">
              Fat Burn Zone:{" "}
              <strong className="text-red-600 text-2xl font-bold">
                {targetHeartRate.fatBurn} bpm
              </strong>{" "}
            </p>

            <p className="text-lg">
              Cardio Zone:{" "}
              <strong className="text-red-600 text-2xl font-bold">
                {targetHeartRate.cardio} bpm
              </strong>{" "}
            </p>

            <p className="text-lg">
              Peak Zone:{" "}
              <strong className="text-red-600 text-2xl font-bold">
                {targetHeartRate.peak} bpm
              </strong>{" "}
            </p>

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

export default HeartHealthCalculator;
