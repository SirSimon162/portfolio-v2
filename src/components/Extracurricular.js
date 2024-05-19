import React from 'react';

const activities = [
  {
    title: "Core Team Member of Google DSC",
    description: "Core Team Member of the Google Developer Students Club NIT Rourkela. Contributed to various community projects as a web developer and organized sessions.",
    role: "Web Developer",
  },
  {
    title: "HackNITR Core Team Member",
    description: "Core Team Member of the largest student run hackathon of India. Served as Tech Team and PR Head, overseeing the technical aspects and organization of the hackathon.",
    role: "PR and Tech Team Head",
  },
  {
    title: "Design Head at Vriddhi",
    description: "Led a team to design banners and social media posters for the sports fest of NIT Rourkela.",
    role: "Team Lead",
  },
  {
    title: "Member of Ritvic",
    description: "Designed posters and thumbnails for the official cultural club of NIT Rourkela.",
    role: "Graphic Designer",
  },
  {
    title: "Member of CEST Club",
    description: "Created posters and banners for the Civil Engineering Students Technical Club.",
    role: "Graphic Designer",
  },
  {
    title: "Member of Entrepreneurship Cell",
    description: "Designed posters and banners for entrepreneurial events and workshops.",
    role: "Graphic Designer",
  },
];

function Extracurricular() {
  return (
    <div className="px-4 py-5">
      <p className="text-2xl md:text-3xl font-bold">My Extracurricular Adventures 🌻</p>
      <p className="text-sm md:text-lg font-light mb-4">Lowkey Dope Stuff I Do</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {activities.map((activity, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md border-gray-300 border-[1px]">
            <h3 className="text-xl card-title font-semibold mb-0">{activity.title}</h3>
            <p className="mb-2">{activity.role}</p>
            <p className="text-gray-500">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extracurricular;
