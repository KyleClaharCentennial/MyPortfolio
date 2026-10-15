// Education page: qualifications with institution, program, and dates.

function Education() {
  const education = [
    {
      school: 'Pierre Elliott Trudeau High School',
      credential: 'High School Diploma - French Certificate – OSSD',
      years: '2019-2022',
    },
    {
      school: 'Centennial College',
      credential: 'Software Engineering Technology - Artificial Intelligence Specialization Diploma',
      years: '2024-Present',
    }
  ];

  return (
    <section className="education">
      <h1>Education</h1>

      {education.map((item) => (
        <article key={item.school + item.years}>
          <h2>{item.credential}</h2>
          <p>{item.school}</p>
          <p>{item.years}</p>
        </article>
      ))}
    </section>
  );
}

export default Education;