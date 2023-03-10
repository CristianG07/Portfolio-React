import { motion } from "framer-motion";
import perfil1 from "../../assets/images/perfil2.png";
import { aboutVariant, btnVariant } from "./../../animations/GlobalVariants";

const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 mb-16 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <motion.div
          variants={aboutVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 40 }}
          className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-5xl mx-auto"
        >
          <div className="p-2">
            <div className="text-gray-300 my-3 grid gap-6 max-w-xl">
              <p className="text-justify">
                I am a web developer (Front-End) very dedicated and committed to
                what I do, Feel free to take a look at my latest projects on the
                projects page.
              </p>
              <div className="flex items-center max-w-xl lg:justify-between justify-evenly gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-3xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <div>
                <motion.a
                  variants={btnVariant}
                  whileHover="stateHover"
                  whileTap="active"
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  href="./src/assets/Code_a_program.pdf"
                  className="btn-primary w-fit"
                  download
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="md:w-80 h-full relative w-8/12 max-w-sm mb-6 aboutImg ">
              <img
                src={perfil1}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
