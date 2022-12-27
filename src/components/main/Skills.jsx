import logo_html from "../../assets/images/skills_img/html5.png";
import logo_css from "../../assets/images/skills_img/css3.png";
import logo_js from "../../assets/images/skills_img/js.png";
import logo_react from "../../assets/images/skills_img/reactjs.png";
import logo_tailwind from "../../assets/images/skills_img/tailwind.png";
import logo_mogodb from "../../assets/images/skills_img/mongodb.png";
import logo_git from "../../assets/images/skills_img/git.png";

const Skills = () => {
  const skills = [
    {
      src: logo_html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: logo_css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: logo_js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      src: logo_react,
      title: "ReactJS",
      style: "shadow-sky-500",
    },
    {
      src: logo_tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      src: logo_git,
      title: "Git",
      style: "shadow-orange-600",
    },
  ];
  
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid sm:w-4/5 w-full grid-cols-2 sm:grid-cols-3 mx-auto px-12 py-8 gap-9">
          {skills?.map((skill, i) => (
            <div key={i} className={`shadow-[0px_0px_12px_2px] hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}>
              <img src={skill.src} className='w-20 mx-auto'/>
              <p className="mt-4">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
