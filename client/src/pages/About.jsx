// About page: shows who I am, my photo, and a link to my resume.
// Photo and resume live in the "public" folder, so they are referenced with a leading "/".

function About() {
  // Keeping my details in variables makes them easy to change in one place.
  const fullName = 'Kyle Courtney II Clahar';
  const photoPath = '/me.jpg';          // file in public/ 
  const resumePath = '/resume.pdf';     // file in public/ 
  const bio =
    'My name is Kyle Clahar. My friends call me Kale. I am a Jamaican-Canadian Telecom Technician who lives in Scarborough. My interests span wide and far, and include listening to music, dancing, puzzles, sports, and laughing. I am currently enrolled at Centennial College in their Software Engineering program, with specialization in AI development.';

  return (
    <section className="about">
      <h1>About Me</h1>

      {/* Profile photo: alt text describes the image for accessibility */}
      <img
        src={photoPath}
        alt={`Portrait of ${fullName}`}
        width="200"
      />

      {/* Legal name */}
      <h2>{fullName}</h2>

      {/* Short bio paragraph */}
      <p>{bio}</p>

      {/* Link to the PDF resume; target="_blank" opens it in a new tab */}
      <a href={resumePath} target="_blank" rel="noreferrer">
        View my resume (PDF)
      </a>
    </section>
  );
}

export default About;