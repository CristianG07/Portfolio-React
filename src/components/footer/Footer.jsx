import React from "react";

const Footer = () => {
  const menuLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <footer className="bg-gray-800 text-sm pb-8 text-center text-white flex flex-col gap-10">
      <div className="flex md:justify-center mb-8 lg:gap-16 gap-8 py-10 items-center flex-wrap justify-center">
        <div>
          <h4 className="sm:text-4xl text-3xl font-bold">
            Cristian <span className="text-cyan-600">G.</span>
          </h4>
          <p className="text-white/60">Frontend Developer</p>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-lg">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="hover:text-cyan-600 duration-700 ease-in-out">
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="text-3xl flex gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-cyan-600 cursor-pointer transition-colors duration-500 ease-in-out"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
        </div>
      </div>
      <p className="text-white/60">
        Copyright © 2022  CristianG. All Rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
