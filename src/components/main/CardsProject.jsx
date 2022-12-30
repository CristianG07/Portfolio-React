import {motion} from 'framer-motion'
const CardsPeject = ({ projects }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-8 lg:gap-x-8 lg:gap-y-8 sm:gap-6 px-10 py-8">
      {projects.map((project, i) => (
        <article key={i}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1.0, opacity: 1 }}
            whileHover={{scale: 1.05}}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
            className="grid px-4 py-7 max-w-xs bg-slate-800 duration-700 ease-in-out hover:bg-slate-700 rounded-xl">
            <img src={project.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-5">{project.name}</h3>
            <div className="flex gap-3">
              <a
                href={project.github_link}
                target="_blank"
                className="text-cyan-600 border-2 rounded-md duration-700 ease-in-out hover:bg-cyan-200 border-cyan-600 bg-transparent px-3 py-2 inline-block"
              >
                Github
              </a>
              <a
                href={project.live_link}
                target="_blank"
                className="text-slate-700 bg-cyan-600 hover:bg-cyan-200 duration-700 ease-in-out rounded-md px-3 py-2 inline-block"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        </article>
      ))}
    </section>
  );
};

export default CardsPeject;
