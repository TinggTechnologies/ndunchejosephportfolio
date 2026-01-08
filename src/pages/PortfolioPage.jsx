import { FaBolt, FaChartLine, FaSearch } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import './PortfolioPage.css';

export default function PortfolioPage() {
  const workExperience = [
    {
      company: "Liberty Assured",
      program: "Software Engineer",
      position: "Software Engineer",
      date: "2025",
      details: [
        "Developing financial technology solutions for nano-micro businesses to SME and personal finances",
        "Building systems for civil servant loans, agent cluster loans, and micro savings loan products",
        "Contributing to bringing financial liberty and freedom by filling voids within the business sector"
      ]
    },
    {
      company: "BestWishes",
      program: "Backend Engineer",
      position: "Backend Engineer",
      date: "2025",
      details: [
        "Designed and developed a robust backend system using Node.js and Express framework",
        "Implemented RESTful APIs and microservices architecture for scalable application development",
        "Integrated third-party services and payment gateways to enhance platform functionality",
        "Optimized database queries and implemented caching strategies, improving response times by 45%",
        "Collaborated with frontend developers to ensure seamless API integration and data flow"
      ]
    },
    {
      company: "Health Broadcasting Service",
      program: "Software Engineer",
      position: "Software Engineer",
      date: "2024 - 2025",
      details: [
        "Pioneered the design and development of the company's mobile application",
        "Collaborated with cross-functional teams to align app features with strategic business goals",
        "Implemented the user interface of the mobile application using React Native and Flutter",
        "Implemented a robust CI/CD pipeline, automating testing and deployment processes and reducing release cycles by 30%",
        "Pioneered the end-to-end design and development of the company's flagship mobile application from concept to launch on iOS and Android, achieving over 10,000 downloads in the first quarter"
      ]
    },
    {
      company: "Florieren Parklane International School",
      program: "Fullstack Website Developer and Coding Instructor",
      position: "Fullstack Website Developer and Coding Instructor",
      date: "2023 - 2024",
      details: [
        "Designed and developed a robust school portal",
        "The school portal is being used by over 10,000 people on a monthly basis with little or no glitches"
      ]
    },
    {
      company: "Smart Campus | Edutech",
      program: "Software Engineer",
      position: "Software Engineer",
      date: "2021 - 2023",
      details: [
        "Led a team of 7 developers in launching the Smart Campus App on the Android platform at Smart Campus, driving a 15% increase in downloads and reaching approximately 12,000 downloads within the first month",
        "Collaborated with a cross-functional team of 2 UI/UX designers and 4 backend developers to seamlessly integrate frontend and backend components, resulting in a 30% reduction in integration-related bug reports within the first two months post-launch",
        "Actively participated in bi-weekly code reviews, providing constructive feedback that contributed to a 25% reduction in critical code defects and improved overall app performance by 20% in subsequent releases"
      ]
    }
  ];

  const projects = [
    {
      title: "COVID-19 Detection using Deep Learning",
      type: "AI/ML Project",
      date: "2023",
      image: "/projects/covid19.jpg",
      details: [
        "Implemented COVID-19 detection system using deep learning techniques",
        "Utilized convolutional neural networks for medical image analysis",
        "Achieved high accuracy in detecting COVID-19 from chest X-rays",
        "Applied advanced machine learning algorithms for healthcare applications"
      ]
    },
    {
      title: "Smart Campus Mobile App",
      type: "Mobile Development",
      date: "2021 - 2023",
      image: "/projects/smartcampus.png",
      details: [
        "Led development of Android application for educational institution",
        "Achieved 12,000+ downloads within first month of launch",
        "Implemented cross-platform compatibility using React Native and Flutter",
        "Integrated real-time features and seamless user experience"
      ]
    },
    {
      title: "School Portal System",
      type: "Fullstack Web Development",
      date: "2023 - 2024",
      image: "/projects/sms.png",
      websites: [
        "https://florierenparklaneis.com.ng",
        "https://greatkingsacad.com.ng"
      ],
      details: [
        "Developed comprehensive school management portal",
        "Serves 10,000+ monthly active users with minimal downtime",
        "Built with modern web technologies and responsive design",
        "Implemented secure authentication and role-based access control",
        "Deployed across multiple school domains"
      ]
    }
  ];

  const certifications = [
    {
      name: "Bachelor's Degree Computer Science",
      file: "/certifications/bsc.pdf",
      issuer: "FUOYE",
      preview: "/certifications/bsc.pdf"
    },
  
  ];

  const openCertificate = (cert, event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(cert.file, '_blank');
  };

  const openWebsite = (url, event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank');
  };


  const technicalSkills = [
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "GoLang",
    "React",
    "React Native",
    "Flutter",
    "Laravel",
    "Django",
    "Vue",
    "TypeScript",
    "Node.js",
    "Express",
    "Next.js",
    "SQL",
    "NoSQL",
    "Firebase",
    "Docker",
    "Git",
    "CI/CD",
    "API Design",
    "Mobile Development",
    "Fullstack Development"
  ];

  return (
    <PageLayout>
      <div className="portfolio-page">
        <div className="portfolio-container">
          <div className="page-header">
            <h1 className="page-title">Portfolio</h1>
            <p className="page-subtitle">
              Professional experience, certifications, and technical expertise
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Work Experience</h2>
            <div className="experience-grid">
              {workExperience.map((exp, index) => (
                <Card key={index} className="experience-card">
                  <CardHeader>
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-position">{exp.position}</h3>
                        <p className="experience-company">{exp.company}</p>
                        <p className="experience-program">{exp.program}</p>
                      </div>
                      <span className="experience-date">{exp.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="experience-details">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Key Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className={`project-card ${(project.website || project.websites) ? 'clickable' : ''}`}
                  onClick={(e) => {
                    if (project.websites && project.websites.length > 0) {
                      openWebsite(project.websites[0], e);
                    } else if (project.website) {
                      openWebsite(project.website, e);
                    }
                  }}
                >
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <span className="project-type">{project.type}</span>
                      {(project.website || project.websites) && (
                        <span className="project-link-hint">Click to visit website</span>
                      )}
                    </div>
                  </div>
                  <CardContent>
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-date">{project.date}</span>
                    </div>
                    <ul className="project-details">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    {project.websites ? (
                      <div className="project-websites">
                        <span className="website-label">Visit: </span>
                        <div className="website-links">
                          {project.websites.map((url, idx) => (
                            <span 
                              key={idx}
                              className="website-url clickable-link"
                              onClick={(e) => {
                                e.stopPropagation();
                                openWebsite(url, e);
                              }}
                            >
                              {url.replace('https://', '')}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : project.website && (
                      <div className="project-website">
                        <span className="website-label">Visit: </span>
                        <span className="website-url">{project.website.replace('https://', '')}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Certifications</h2>
            <div className="certifications-grid-new">
              {certifications.map((cert, index) => (
                <Card key={index} className="certification-card">
                  <div className="cert-preview-container" onClick={(e) => openCertificate(cert, e)}>
                    <iframe
                      src={`${cert.preview}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                      className="cert-preview-iframe"
                      title={cert.name}
                    />
                    <div className="cert-overlay">
                      <span className="cert-view-text">Click to View Full PDF</span>
                    </div>
                  </div>
                  <CardContent>
                    <h3 className="cert-title">{cert.name}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>



          {/* Technical Skills Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Technical Skills & Competencies</h2>
            <Card className="skills-card">
              <CardContent>
                <div className="skills-tags">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Achievements Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Key Achievements</h2>
            <Card className="achievements-card">
              <CardContent>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <span className="achievement-icon"><FaBolt /></span>
                    <span className="achievement-text">Led development of mobile applications achieving 12,000+ downloads within first month of launch</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon"><FaChartLine /></span>
                    <span className="achievement-text">Implemented CI/CD pipelines reducing deployment cycles by 30% and improving system reliability</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon"><FaSearch /></span>
                    <span className="achievement-text">Developed school management systems serving 10,000+ monthly active users across multiple domains</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

