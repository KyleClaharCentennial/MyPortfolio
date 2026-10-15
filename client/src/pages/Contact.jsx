// Contact page: contact info panel + a form that captures input and redirects Home.
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate(); // lets us redirect to another route in code

  // One state object holds every form field's current value.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  // Runs on every keystroke: copies the old data, then replaces the one field that changed.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Runs when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault();          // stop the browser from reloading the page
    console.log('Form submitted:', formData); // captured data (visible in the browser console)
    navigate('/');                   // redirect to the Home page
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>

      {/* Contact information panel */}
      <div className="contact-info">
        <p><strong>Email:</strong> kclahar@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> Available Upon Request</p>
        <p><strong>Location:</strong> Scarborough, Ontario</p>
      </div>

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>
          Last Name
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>
          Contact Number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          Email Address
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;