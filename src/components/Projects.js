import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "Vartalabh",
      tag: "Paid Work",
      description:
        "Vartalabh is a mental health counseling startup. I designed and developed their website from scratch, including a chatbot feature, making it their flagship product.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121606/Portfolio/Projects/vartalabh_qsknrd.jpg",
      url: "https://vartalabh.in",
      tech: "#Vite #React #Tailwind",
    },
    {
      title: "HackNITR 5.0",
      tag: "Community",
      description:
        "HackNITR 5.0 is one of India's largest student-run hackathons. I led the development team, focusing on responsiveness, pixel perfection, and code quality.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716122482/Portfolio/Projects/hacknitr-5_dkqznq.jpg",
      url: "https://hacknitr.com/",
      tech: "#React #Tailwind #StyledComponents"
    },
    {
      title: "Project Garnet",
      tag: "Personal",
      description:
        "Project Garnet is a full-stack MERN application under construction. Stay tuned for an exciting surprise as I bring this project to life!",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716120883/Portfolio/Projects/onit_v4be64.jpg",
      url: "https://github.com/SirSimon162/project-garnet",
      tech: "#React #Node #MongoDB #Express"
    },
    {
      title: "WeaveChat",
      tag: "Hackathon",
      description: "WeaveChat offers decentralized chatrooms free from censorship. I developed this innovative platform with my team within 40 hours, winning the EthMumbai hackathon.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716119731/Portfolio/Projects/weavechat_hsg5vq.jpg",
      url: "https://weavechat.space/",
      tech: "#Next #Express #Arweave #0RBIT"
    },
    {
      title: "House of 30ml",
      tag: "Paid Work",
      description:
        "House of 30ml is a startup for bar hopping enthusiasts. I rapidly developed the website to ensure a successful launch, focusing on responsiveness and performance.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121605/Portfolio/Projects/houseof30ml_kdpdcc.jpg",
      url: "https://houseof30ml.com",
      tech: "#React #FramerMotion #Tailwind"
    },
    {
      title: "Portfolio",
      tag: "Paid Work",
      description:
        "This portfolio showcases the work of a talented designer. I brought their Figma design to life, ensuring pixel-perfect responsiveness and high performance.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121605/Portfolio/Projects/shreelekha_tc1oro.jpg",
      url: "https://shreelekha.design",
      tech: "#React #Tailwind"
    },
    {
      title: "Growna",
      tag: "Paid Work",
      description:
        "Growna is a platform for end-to-end learning and development, fostering a competitive workforce. I redesigned and developed the marketplace, dashboard, and course pages.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121603/Portfolio/Projects/growna_qg3jhl.jpg",
      url: "/",
      tech: "#Figma #React #SCSS"
    },
    {
      title: "Innovision",
      tag: "Community",
      description:
        "Innovision is one of Eastern India's largest tech fests. I along with my team developed the website for Innovision 2023, receiving over 400,000 hits.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716123715/Portfolio/Projects/inno_qlrbb0.jpg",
      url: "https://inno.nitrkl.in/",
      tech: "#React #Tailwind #StyledComponents"
    },
    {
      title: "GitFolio",
      tag: "Personal",
      description:
        "GitFolio uses the Github API to create professional portfolios effortlessly. I developed this project and it's featured on Product Hunt.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121582/Portfolio/Projects/GitFolio-1_duvc2x.jpg",
      url: "https://portfolio-gitfolio.vercel.app/",
      tech: "#React #Tailwind #FramerMotion"
    },
    {
      title: "NES Website",
      tag: "Community",
      description:
        "National Entrepreneurship Summit 2023 showcased budding entrepreneurs. I along with my team developed the website for this event, attracting over 200 participants.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1701583479/Portfolio/Projects/NES_ee6smj_i1cmhx.jpg",
      url: "https://github.com/SirSimon162/project-strawberry",
      tech: "#Next #Tailwind"
    },
  ];
  

  const FeaturedProjects = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
      {projectsData.map((project, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={project.img}
              alt="Project"
              className="h-[200px] object-fill"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {project.title}
              <div className="badge badge-secondary text-white font-normal">
                {project.tag}
              </div>
            </h2>
            <p>{project.description}</p>
            <p className="font-semibold">{project.tech}</p>
            <a
              className="text-start font-semibold btn btn-info text-white text-md"
              href={project.url}
              target="__blank"
              rel="noreferrer"
            >
              Visit
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pb-5 flex flex-col px-2">
      <p className="text-2xl md:text-3xl font-bold text-start">
        Featured Projects 💫
      </p>
      <p className="text-sm md:text-lg font-light">
        Proof I Didn't Sleep All Night
      </p>
      <FeaturedProjects />
      <a className="btn btn-primary mx-auto mt-4 text-white" href="/projects">
        View More
      </a>
    </div>
  );
}

export default Projects;
