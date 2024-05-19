import React from "react";
import { FaAward, FaBriefcase, FaCertificate } from "react-icons/fa";

function About() {
  const achievements = [
    {
      title: "Organized HackNITR 4.0",
      icon: <FaCertificate />,
      date: "Jan 2023",
      description:
        "Organized HackNITR 4.0, the largest student run hackathon in India",
    },
    {
      title: "Won at Hack36",
      icon: <FaAward />,
      date: "Mar 2023",
      description:
        "Won a sponsored track prize and stood 6th in Hack36 hackathon organized by MNNIT Allahabad",
    },
    {
      title: "Organized HackNITR 5.0",
      icon: <FaCertificate />,
      date: "Jan 2024",
      description:
        "Organized HackNITR 5.0 as a core team member for the first time in completely offline mode",
    },
    {
      title: "Won at EthMumbai",
      icon: <FaAward />,
      date: "Mar 2024",
      description:
        "Won big at EthMumbai Hackathon and bagged the Arweave Bounty.",
    },
  ];

  const work = [
    {
      title: "Vartalabh",
      description:
        "Built a Mental Health Counseling Website from scratch for Vartalabh startup.",
    },
    {
      title: "Growna",
      description:
        "Designed and developed a marketplace website with a dashboard for Growna startup.",
    },
    {
      title: "House of 30ML",
      description:
        "Developed the Website for House of 30ML startup for their app launch.",
    },
  ];

  return (
    <div className="py-5 flex flex-col px-2">
      <p className="text-2xl md:text-3xl font-bold">
        My Journey: Highlights & Honors ✨
      </p>
      <p className="text-sm md:text-lg font-light mb-8">The "Wait a Minute, How Did I Do That?" Files</p>
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Timeline ⌛</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              className="bg-base-100 shadow-sm p-4 rounded-lg border-l-4 border-base-content"
              key={index}
            >
              <div className="flex items-center gap-2">
                <div className="text-xl">{achievement.icon}</div>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              <p className="mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Notable Works ⚒️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((project, index) => (
            <div className="bg-base-100 p-4 rounded-lg shadow-md" key={index}>
              <div className="flex items-center mb-2">
                <FaBriefcase className="mr-2" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-500">{project.tech}</p>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
