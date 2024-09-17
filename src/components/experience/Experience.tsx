import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      fromTime: "April 2023",
      toTime: "Present",
      title: "Software Engineer ",
      location: "Spiralogics, Inc",
      stack: '.Net Core | SQL Server | React | jQuery',
      description:
        "Developed Claim Negotiation Management software, enhanced ERP system, and optimized Asset Management application.",
    },
    {
      fromTime: "July 2022",
      toTime: "March 2023",
      title: "Junior .NET Developer",
      location: "DgHub",
      stack: '.Net Framework | .Net Core | SQL Server | jQuery',
      description:
        "Developed secure digital wallet APIs and assisted in migrating legacy codebases to .NET 6.",
    },
    {
      fromTime: "December 2021",
      toTime: "April 2022",
      title: ".NET Intern",
      location: "Janata Tech",
      stack: '.Net Core | SQL Server | jQuery',
      description:
        "Contributed to CMS and Ride Sharing projects, assisted in bug fixing.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-center">Experience</h1>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-5 md:p-10 h-full">
            <div
              className="hidden md:block border-2-2 absolute border-opacity-20 border-[#F6F7F8] h-[calc(100%-8rem)] border left-1 md:left-[50%]"
            ></div>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                fromTime={exp.fromTime}
                toTime={exp.toTime}
                title={exp.title}
                description={exp.description}
                location={exp.location}
                index={index}
                stack={exp.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
