const IntroCard = () => {
  return (
    <>
      <div className="w-full p-3 md:w-[75%]">
        <div className="text-lg">Hello, I am</div>
        <h1 className="text-6xl font-bold">Aashutosh Dhungana</h1>
        <div className="text-xl mt-5">I develop software for the web.</div>
        <div className="flex gap-3 mt-2">
            <a href="https://www.linkedin.com/in/aashutosh-dhungana-4759511a1/" target="_blank" className=""><i className="fa-brands fa-linkedin text-xl"></i></a>
            <a href="mailto:dhunganaaashutosh@gmail.com" target="_blank"><i className="fa-solid fa-envelope text-xl"></i></a>
        </div>
        <p className="mt-3">
          I am a results-driven Software Engineer with over 2 years of
          experience in developing innovative and scalable applications using
          .NET Core, React, and SQL Server. My work has consistently led to
          significant performance improvements and successful outcomes. Skilled
          in agile environments, I am eager to apply my technical expertise to
          drive success at a forward-thinking technology company.
        </p>
        <div className="mt-8 text-[#212529]">
          <a
            className="p-2 bg-[#F6F7F8] font-bold rounded"
            href="./resume.pdf"
            download="Aashutosh_Dhungana_CV.pdf"
          >
            Download CV
          </a>
          {/* <Link
           className="p-2 bg-[#F6F7F8]  font-bold rounded ml-2"
           to={"/Contact"}
          >
            Contact Me
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default IntroCard;
