function ProjectsPage() {
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
      tech: "#React #Tailwind #StyledComponents",
    },
    {
      title: "Project Garnet",
      tag: "Personal",
      description:
        "Project Garnet is a full-stack MERN application under construction. Stay tuned for an exciting surprise as I bring this project to life!",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716120883/Portfolio/Projects/onit_v4be64.jpg",
      url: "https://github.com/SirSimon162/project-garnet",
      tech: "#React #Node #MongoDB #Express",
    },
    {
      title: "WeaveChat",
      tag: "Hackathon",
      description:
        "WeaveChat offers decentralized chatrooms free from censorship. I developed this innovative platform with my team within 40 hours, winning the EthMumbai hackathon.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716119731/Portfolio/Projects/weavechat_hsg5vq.jpg",
      url: "https://weavechat.space/",
      tech: "#Next #Express #Arweave #0RBIT",
    },
    {
      title: "House of 30ml",
      tag: "Paid Work",
      description:
        "House of 30ml is a startup for bar hopping enthusiasts. I rapidly developed the website to ensure a successful launch, focusing on responsiveness and performance.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121605/Portfolio/Projects/houseof30ml_kdpdcc.jpg",
      url: "https://houseof30ml.com",
      tech: "#React #FramerMotion #Tailwind",
    },
    {
      title: "Portfolio",
      tag: "Paid Work",
      description:
        "This portfolio showcases the work of a talented designer. I brought their Figma design to life, ensuring pixel-perfect responsiveness and high performance.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121605/Portfolio/Projects/shreelekha_tc1oro.jpg",
      url: "https://shreelekha.design",
      tech: "#React #Tailwind",
    },
    {
      title: "Growna",
      tag: "Paid Work",
      description:
        "Growna is a platform for end-to-end learning and development, fostering a competitive workforce. I redesigned and developed the marketplace, dashboard, and course pages.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121603/Portfolio/Projects/growna_qg3jhl.jpg",
      url: "/",
      tech: "#Figma #React #SCSS",
    },
    {
      title: "Innovision",
      tag: "Community",
      description:
        "Innovision is one of Eastern India's largest tech fests. I along with my team developed the website for Innovision 2023, receiving over 400,000 hits.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716123715/Portfolio/Projects/inno_qlrbb0.jpg",
      url: "https://inno.nitrkl.in/",
      tech: "#React #Tailwind #StyledComponents",
    },
    {
      title: "GitFolio",
      tag: "Personal",
      description:
        "GitFolio uses the Github API to create professional portfolios effortlessly. I developed this project and it's featured on Product Hunt.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716121582/Portfolio/Projects/GitFolio-1_duvc2x.jpg",
      url: "https://portfolio-gitfolio.vercel.app/",
      tech: "#React #Tailwind #FramerMotion",
    },
    {
      title: "NES Website",
      tag: "Community",
      description:
        "National Entrepreneurship Summit 2023 showcased budding entrepreneurs. I along with my team developed the website for this event, attracting over 200 participants.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1701583479/Portfolio/Projects/NES_ee6smj_i1cmhx.jpg",
      url: "https://github.com/SirSimon162/project-strawberry",
      tech: "#Next #Tailwind",
    },
    {
      title: "HackNITR 4.0",
      tag: "Community",
      description:
        "HackNITR 4.0 is the largest student-run hackathon with over 5000 registrations. I worked with a team to develop the hackathon website, ensuring pixel-perfection, responsiveness, and high performance.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1701583436/Portfolio/Projects/HN_oxcq8d_fueljr.jpg",
      url: "https://github.com/dscnitrourkela/project-oregano/tree/4.0",
      tech: "#React #Tailwind #StyledComponents",
    },
    {
      title: "Tribe Tango",
      tag: "Hackathon",
      description:
        "Tribe Tango, a decentralized application, addresses the issue of isolation among gamers by creating a vibrant community and rewarding them with NFTs. Developed during Hack36, we secured a track prize and ranked 6th overall.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1701583522/Portfolio/Projects/TribeTango_q2wkwj_sk63fl.jpg",
      url: "https://github.com/SirSimon162/project-1ndex",
      tech: "#React #Tailwind #Firestore #Solidity",
    },
    {
      title: "Syntara",
      tag: "Hackathon",
      description:
        "Syntara bridges Web2 and Web3, revolutionizing online event tickets through NFTs on the Aurora blockchain atop NEAR Protocol. Our team showcased this innovation at the Web3 Hackfest.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716122848/Portfolio/Projects/syntara_rkavgb.png",
      url: "https://syntara.vercel.app/",
      tech: "#React #Tailwind #Firestore #Solidity",
    },
    {
      title: "Tubefetch",
      tag: "Personal",
      description:
        "TubeFetch is a distraction-free YouTube viewer. Utilizing the YouTube API, it presents videos without disturbances or irrelevant suggestions. It helps user to watch videos without any unnecessary recommendations.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1701583454/Portfolio/Projects/home_TubeFetch_aoeuk7_aphnmu.jpg",
      url: "https://tube-fetch.vercel.app/",
      tech: "#Next #Tailwind",
    },
    {
      title: "ICS Website",
      tag: "Community",
      description:
        "The Institute Counselling Services at NIT Rourkela prepares students for life challenges and personal growth. I led the team maintaining their website, ensuring it reflects their mission.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716122848/Portfolio/Projects/ics_ufbnrr.jpg",
      url: "https://www.ics-nitrkl.in/",
      tech: "#HTML #CSS #JS",
    },
    {
      title: "Paypol",
      tag: "Hackathon",
      description:
        "Paypol simplifies Web3 transactions with app-specific handles and ENS support. Developed during EthForAll, it offers seamless token requests and enhances user experience.",
      img: "https://res.cloudinary.com/darx97f61/image/upload/v1716123581/Portfolio/Projects/paypol_ghpzre.png",
      url: "https://project-1ndex.vercel.app/",
      tech: "#React #Tailwind #Firestore #Solidity",
    },
  ];
  return (
    <div className="py-10 px-2">
      <p className="font-bold text-4xl text-center mb-10">All Projects👨🏻‍💻</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {projectsData.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={project.img}
                alt="Project"
                className="h-[200px] md:h-[200px] object-fill"
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
    </div>
  );
}

export default ProjectsPage;
