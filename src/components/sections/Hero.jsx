import { BsArrowRight, BsChevronDown, BsDownload, BsMouse } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Joseph Ndunche</span>
          </h1>

          <h2 className="hero-subtitle">
            Fullstack Web Engineer & Software Engineer
          </h2>

          <p className="hero-description">
            I build digital experiences that go beyond functionality—they inspire. As a Fullstack Web Engineer and Software Engineer, I specialize in designing and developing applications that merge intuitive, pixel-perfect interfaces with
            powerful, scalable backends. <br /><br /> From crafting seamless mobile apps on iOS and Android to building robust web
            platforms, I deliver solutions that are responsive, reliable, and performance-driven.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>

          <div className="hero-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/portfolio')}
              icon={<BsArrowRight />}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={handleDownloadResume}
              icon={<BsDownload />}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={require('../../assets/images/user.jpeg')}
              alt="Joseph Ndunche"
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <BsMouse className="mouse-icon" />
        <BsChevronDown className="arrow-icon" />
      </div>
    </section>
  );
}

