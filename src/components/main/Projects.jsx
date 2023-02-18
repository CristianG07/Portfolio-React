import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.png";
import CardsPeject from "./CardsProject";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Landing page Forty",
      github_link: "https://github.com/CristianG07/Forty-landing",
      live_link: "https://forty-landing.vercel.app/",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/CristianG07/jobsearchapp_landing",
      live_link: "https://jobsearchapp-landing.vercel.app/",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/CristianG07/highking_landing",
      live_link: "https://highking-landing.vercel.app",
    },
    {
      img: project4,
      name: "Descuenta$",
      github_link: "https://github.com/CristianG07/landing-descuentas.git",
      live_link: "http://dev.descuentas.com/",
    },
  ];

  return (
    <section id="projects" className="py-16 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My works</p>
      </div>
      <br />
      <div className="grid justify-center">
          <CardsPeject projects={projects}/>
      </div>
    </section>
  );
  
};

export default Projects;
