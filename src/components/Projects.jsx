import { useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectsData = [
    {
      title: "MPM SCM (Supply Chain Management)",
      tech: ["React JS"],
      desc: "Bertanggung jawab sebagai <i>Front-End Developer</i> dalam pengembangan lebih dari 30 menu operasional, yang mencakup proses <i>layouting</i>, integrasi API, dan validasi data kompleks. Berperan penuh dalam menjaga kualitas sistem melalui <i>Unit Testing</i>, manajemen kode di GitLab, hingga penyelesaian <i>bug</i> secara komprehensif pada fase SIT dan UAT.",
      images: [
        { src: "/m-log.png", alt: "MPM SCM Login" },
        { src: "/m-p.png", alt: "MPM SCM Page 1" },
        { src: "/m-m.png", alt: "MPM SCM Page 2" }
      ]
    },
    {
      title: "Alcon Operational System",
      tech: ["Laravel", "Vue JS"],
      desc: "Berkontribusi penuh dalam pengembangan antarmuka dan fitur sistem operasional, mulai dari standardisasi kode, <i>layouting</i> UI, integrasi API secara <i>seamless</i>, hingga pembuatan <i>endpoint</i> backend untuk memastikan kelancaran alur kerja aplikasi.",
      images: [
        { src: "/alcon-log.png", alt: "Alcon Login" },
        { src: "/alcon-DS.png", alt: "Alcon Dashboard" },
        { src: "/alcon-PO.png", alt: "Alcon Purchase Order" }
      ]
    },
    {
      title: "Core Banking",
      tech: ["React JS", "Spring Boot"],
      desc: "Berperan aktif dalam pengembangan dan pemeliharaan aplikasi Core Banking dengan melakukan penambahan fitur baru, perbaikan (*fixing*), serta <i>layouting</i> antarmuka. Tanggung jawab mencakup integrasi API pada <i>front-end</i>, pembuatan <i>endpoint</i> <i>back-end</i>, hingga penerapan <i>Stored Procedure</i> untuk optimasi basis data.",
      images: [
        { src: "/cb-log.png", alt: "Core Banking Login" },
        { src: "/cb-savings.png", alt: "Core Banking Savings" },
        { src: "/cb-tf.png", alt: "Core Banking Transfer" }
      ]
    },

  ];

  return (
    <section id="projects" className="section-dark">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>{t}</span>
                ))}
              </div>
              <p className="project-desc-text" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
              <p className="project-confidential">
                * Tautan tidak disertakan karena proyek bersifat rahasia perusahaan.
              </p>
            </div>

            <div className="project-gallery">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="project-img"
                  onClick={() => setSelectedImage(img.src)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={selectedImage} alt="Enlarged view" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Projects;
