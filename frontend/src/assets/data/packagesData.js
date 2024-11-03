import BSCPackImg from "../images/home/packages/1.png";
import SHPackImg from "../images/home/packages/2.png";
import PBCPackImg from "../images/home/packages/3.png";

export const packages = [
  {
    name: "Basic Health Check",
    description:
      "Comprehensive screening covering essen-tial tests for overall health.",
    price: "$70",
    facilities: [
      "Blood pressure check",
      "Cholesterol and glucose tests",
      "BMI analysis",
      "Basic vision screening",
      "General physician consultation",
    ],
    image: BSCPackImg,
  },
  {
    name: "Senior Health Package",
    description:
      "Designed for individuals over 60, covering key health checks for aging.",
    price: "$120",
    facilities: [
      "Heart function test (ECG)",
      "Bone density scan",
      "Kidney function test",
      "Eye and hearing assessment",
      "General health consultation",
    ],
    image: SHPackImg,
  },
  {
    name: "Full Body Checkup",
    description:
      "Complete examination covering all major systems for a thorough health.",
    price: "$150",
    facilities: [
      "Complete blood profile",
      "Liver and kidney function tests",
      "Heart health assessment (ECG)",
      "Comprehensive vision & hearing check",
      "Consultation with specialist doctors",
    ],
    image: PBCPackImg,
  },
];
