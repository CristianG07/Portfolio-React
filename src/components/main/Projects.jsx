import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import CardsPeject from "./CardsProject";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Movie App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
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
