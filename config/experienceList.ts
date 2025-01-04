export interface Experience {
  company: string;
  location: string;
  position: string;
  start_month: string;
  start_year: number;
  end_month?: string;
  end_year?: number;
  description: string[];
}

export const EXPERIENCE_LIST: Experience[] = [
  {
    company: "Amazon (Amazon Business)",
    location: "Madrid, Spain",
    position: "Software Development Engineer I (Hybrid)",
    start_month: "August",
    start_year: 2023,
    description: [
      "Currently working on offering the best registration experience for Amazon Business customers",
    ],
  },
  {
    company: "HP (HP R&D)",
    location: "Valencia, Spain",
    position: "Cloud Solutions Development Intern (Hybrid)",
    start_month: "March",
    start_year: 2023,
    end_month: "July",
    end_year: 2023,
    description: [
      "Optimized and developed calls for a centralized cloud system that simulated printers for QA purposes.",
      "Improved API calls’ speed by up to 2 times.",
    ],
  },
  {
    company: "Amazon (Amazon Business)",
    location: "Madrid, Spain",
    position: "Software Development Engineer Intern (Hybrid)",
    start_month: "June",
    start_year: 2022,
    end_month: "September",
    end_year: 2022,
    description: [
      "Significantly reduced the operational load of my team’s on call – achieved a 500% reduction in time spent on an operation which was done manually by implementing a new feature on an internal tool.",
      "Coordinated with multiple teams to provide the feature in their tools and led the implementation in their services.",
    ],
  },
  {
    company: "Cleverpy",
    location: "Valencia, Spain",
    position: "Fullstack Developer (Hybrid)",
    start_month: "April",
    start_year: 2021,
    end_month: "May",
    end_year: 2022,
    description: [
      "Developed a master data management tool for a major company as a replacement for an older system. It served +100.000 objects to 5 different countries.",
      "Led the development of the internal wiki for our team to make the ramp up for new engineers faster.",
    ],
  },
];
