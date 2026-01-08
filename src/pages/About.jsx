import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent } from '../components/ui/Card';
import './About.css';

export default function About() {
  return (
    <PageLayout>
      <div className="about-page">
        <div className="about-container">
          <div className="page-header">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">
              Passionate about building digital experiences that inspire
            </p>
          </div>

          <div className="about-content">
            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Professional Summary</h2>
                <p className="content-text">
                  I build digital experiences that go beyond functionality—they inspire. As a Fullstack Web Engineer and Software Engineer, I specialize in designing and developing applications that merge intuitive, pixel-perfect interfaces with 
                  powerful, scalable backends.
                </p>
                <p className="content-text">
                  With expertise in modern frontend frameworks, backend systems, and cross-platform development, I create 
                  products that balance creativity with technical precision. Whether it's API integration, real-time interactions, or 
                  optimized state management, I ensure every project is engineered for impact and longevity.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Background</h2>
                <p className="content-text">
                  With a Bachelor of Science in Computer Science (Honors) from Federal University of Oye-Ekiti (2023) 
                  and currently pursuing an MSc in Computer Science at Lagos State University, I bring a strong 
                  academic foundation to software development.
                </p>
                <p className="content-text">
                  My computer science background has equipped me with solid programming fundamentals, 
                  system design principles, and a systematic approach to problem-solving—all essential 
                  qualities for building robust, scalable applications.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">What I Bring</h2>
                <ul className="content-list">
                  <li>Strong programming and software architecture skills</li>
                  <li>Expertise in fullstack development and mobile app creation</li>
                  <li>Experience with modern development frameworks and tools</li>
                  <li>Excellent team collaboration and leadership abilities</li>
                  <li>Ability to transform ideas into elegant, end-to-end solutions</li>
                  <li>Clear communication and problem-solving skills</li>
                  <li>Commitment to performance-driven and scalable solutions</li>
                  <li>Experience leading development teams and reducing deployment cycles by 30%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Languages</h2>
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Advanced (Professional Proficiency)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

