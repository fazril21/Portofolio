const Skills = () => {
  const skillsList = [
    "PHP",
    "Javascript",
    "React Js",
    "Laravel",
    "Vue Js",
    "MySQL",
    "Figma"
  ];

  return (
    <section id="skills" className="section-alternate">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
