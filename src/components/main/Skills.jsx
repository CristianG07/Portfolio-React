import logo_html from "../../assets/images/skills_img/html5.png";
import logo_css from "../../assets/images/skills_img/css3.png";
import logo_js from "../../assets/images/skills_img/js.png";
import logo_react from "../../assets/images/skills_img/reactjs.png";
import logo_tailwind from "../../assets/images/skills_img/tailwind.png";
import logo_git from "../../assets/images/skills_img/git.png";
import {motion} from 'framer-motion';

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

  const cartSkillVariant = {
    hidden: {
      scaleY: 0
    },
    visible: {
      scaleY: 1.0,
      whileHover: {
        scale: 1.05
      },
      transition: { type: "tween", duration:0.1 }
    }
  }
  
  return (
    <section id="skills" className="py-16 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center lg:max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid sm:w-4/5 w-full grid-cols-2 sm:grid-cols-3 mx-auto px-12 py-10 gap-9">
          {skills?.map((skill, i) => (
            <motion.div
              variants={cartSkillVariant}
              initial='hidden'
              whileInView='visible'
              key={i} className={`shadow-[0px_0px_12px_2px] duration-500 py-2 rounded-lg ${skill.style}`}>
                <img src={skill.src} className='w-20 mx-auto'/>
                <p className="mt-4">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
