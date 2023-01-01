import hero from "../../assets/images/hero_img1.svg";
import { motion } from "framer-motion";
import { btnVariant } from './../../animations/GlobalVariants';

const Hero = () => {

  const social_media = [
    {logo:"logo-instagram", href: "https://www.instagram.com/cristiangfrontend/"},
    {logo:"logo-facebook", href: "https://www.facebook.com/profile.php?id=100076453703945"},
    {logo:"logo-linkedin", href: "https://www.linkedin.com/in/cristiangfrontend/"},
    {logo:"logo-twitter", href: "https://twitter.com/CristianG0725"},
  ];

  return (

    <motion.section
    
      id="home"
      className="min-h-screen md:max-w-4xl lg:max-w-6xl max-w-3xl mx-auto flex md:flex-row flex-col items-center gap-8"
    >
      <div className="flex-1 flex items-center mt-20 mb-5 md:mt-0 justify-center">
        <motion.img
          initial={{x:-70, opacity:0}}
          whileInView={{x:0, opacity:1,}}
          transition={{type: "spring", stiffness: 20}}
         src={hero} alt="" className="w-full mx-auto object-cover"/>
      </div>
      <motion.div
        className="flex-1">
        <motion.div
          initial={{x:60, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{type: "spring", stiffness: 20}}
          className="md:text-left text-center">
          <h1 className="md:text-5xl lg:text-5xl text-2xl text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name's <br /> <span>Cristian Gonzalez</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <motion.a
            href="#contact"
            variants={btnVariant}
            whileHover="stateHover"
            whileTap="active"
            transition={{type: "spring", stiffness: 400, damping: 17}}
            className="btn-primary mt-6 w-fit">Contact Me</motion.a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer transition-colors duration-500 ease-in-out"
              >
                <a href={icon.href} target='_blank'>
                  <ion-icon name={icon.logo}/>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
