
const CardsPeject = ({ projects }) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-8 lg:gap-x-8 lg:gap-y-8 sm:gap-6 px-10 py-8'>
      {projects.map((project, i) => (
              <article key={i} >
                <div className="grid px-4 py-7 max-w-xs bg-slate-800 hover:bg-slate-700 rounded-xl">
                  <img src={project.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-5">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="text-cyan-600 border-2 rounded-md hover:bg-cyan-200 border-cyan-600 bg-transparent px-3 py-2 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      className="text-slate-700 bg-cyan-600 hover:bg-cyan-200 rounded-md px-3 py-2 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
    </section>
  )
}

export default CardsPeject