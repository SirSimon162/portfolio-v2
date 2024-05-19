function Hero() {
  return (
    <div className="hero">
      <div className="hero-content flex-col-reverse md:flex-row-reverse">
        <img
          src="https://res.cloudinary.com/darx97f61/image/upload/v1716063256/photo_6087031551624857225_y_vcdqj4.jpg"
          className="max-w-screen md:max-w-[300px] rounded-lg shadow-2xl"
          alt="Anmol-Pattnayak"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Hey! I'm Anmol👋</h1>
          <p className="pt-2 md:pt-6 pb-2 md:pb-4 md:max-w-none">
            Welcome to my personal website! I'm Anmol Pattnayak, a web dev with
            a wild mix of engineering skills (
            <span className="bg-base-200 leading-0 px-[4px] py-0 mx-0 my-0 rounded-md">
              🎓 Civil at NIT Rourkela
            </span>
            , no cap) and artistic vibes. Scratch that "code monkey" stuff. I
            bleed tech, a full-on{" "}
            <span className="bg-base-200 leading-0 px-[4px] py-0 mx-0 my-0 rounded-md">
              freelancer
            </span>{" "}
            and involved in{" "}
            <span className="bg-base-200 leading-0 px-[4px] py-0 mx-0 my-0 rounded-md">
              hackathons
            </span>
            . When I'm not elbow-deep in freelance projects or glued to the
            screen, you might find me throwing tech ragers to connect and level
            up our skills. I'm also a{" "}
            <a
              className="bg-base-200 leading-0 px-1 py-0 mx-0 my-0 rounded-md"
              href="https://x.com/_SirSimon_"
              target="__blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            addict, so feel free to hit me up there too. Let's collab and make
            the web a more magnificent beast! Dive in and peep what I can do!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
