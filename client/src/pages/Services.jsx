// Services page: short list of services I offer.

function Services() {
  const services = [
    { name: 'Web Development', description: 'I offer professional web development services that design and build custom websites and web applications.', image: '/service1.png' },
    { name: 'Graphic Design', description: 'I offer professional graphic design services that create custom visual content tailored to enhance your brand identity and communicate your message effectively to your target audience.', image: '/service2.png' },
    { name: 'Soccer Coaching & Training', description: 'I offer coaching and supervision for groups of children aged 5–13, delivering soccer instruction while maintaining a safe and engaging camp environment.', image: '/service3.png' },
  ];

  return (
    <section className="services">
      <h1>Services</h1>

      {services.map((service) => (
        <article key={service.name}>
          <img src={service.image} alt={service.name} width="150" />
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </article>
      ))}
    </section>
  );
}

export default Services;