import hero from "../../assets/images/business.png";
import html_logo from "../../assets/images/html-logo.png";
import javascript_logo from "../../assets/images/javascript-logo.png";
import css_logo from "../../assets/images/css-logo.png";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen md:max-w-4xl lg:max-w-6xl max-w-3xl mx-auto flex md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center mt-20 md:mt-0 justify-center">
        <div className="relative">
        <img src={hero} alt="" className="md:w-[330px] w-4/5 mx-auto object-cover"/>
        <img src={html_logo} alt="" className="w-2/12 absolute top-10 md:right-0 right-6 object-cover"/>
        <img src={css_logo} alt="" className="w-2/12 absolute top-6 lg:-left-16 md:-left-8 -left-4 object-cover"/>
        <img src={javascript_logo} alt="" className="w-2/12 absolute bottom-6 object-cover"/>
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name's <span>Cristian Gonzalez</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer transition-colors duration-500 ease-in-out"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
