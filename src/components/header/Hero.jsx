import hero from "../../assets/images/hero_img.png";

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
      className="min-h-screen md:max-w-4xl lg:max-w-6xl max-w-3xl mx-auto flex md:flex-row flex-col items-center gap-8"
    >
      <div className="flex-1 flex items-center mt-20 mb-5 md:mt-0 justify-center">
        <img src={hero} alt="" className="md:w-4/5 w-3/5 mx-auto object-cover"/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-4xl lg:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
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
