// Projects page: list of highlighted projects, built from an array.

function Projects() {
  // Each object is one project. 
  const projects = [
    {
      title: 'York University Continuing Education Form',
      image: '/project1.png',
      role: 'Sole Developer',
      outcome: 'I built a website designed to be a continuing education form for post-secondary students who had completed their term. It was modeled after the colour scheme of York University. It was successful and ran smoothly.',
    },
    {
      title: 'GAN Rubiks Cube Advertisement',
      image: '/project2.png',
      role: 'Sole Developer',
      outcome: 'I built a website designed to be an article on ethics in the field of Artificial Intelligence. I had the options to chose whatever topic I wanted. I chose that one because it felt most relevant to my field of study.',
    },
    {
      title: 'Ethics in Artificial Intelligence',
      image: '/project3.png',
      role: 'Sole Developer',
      outcome: 'I built a website designed to be an article on ethics in the field of Artificial Intelligence. I had the options to chose whatever topic I wanted. I chose that one because it felt most relevant to my field of study.',
    },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>

      {/* .map() turns each project object into one block of JSX.
          "key" gives React a unique id for each item in the list. */}
      {projects.map((project) => (
        <article key={project.title}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} width="300" />
          <p><strong>My role:</strong> {project.role}</p>
          <p><strong>Outcome:</strong> {project.outcome}</p>
        </article>
      ))}
    </section>
  );
}

export default Projects;