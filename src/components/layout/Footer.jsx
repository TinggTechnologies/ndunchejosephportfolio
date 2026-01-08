import { BsEnvelope, BsLinkedin } from 'react-icons/bs';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <BsLinkedin />,
      url: 'https://linkedin.com/in/joseph-ndunche-ba15082247',
      label: 'LinkedIn'
    },
    {
      icon: <BsEnvelope />,
      url: 'mailto:ndunchej@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="professional-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Joseph Ndunche</h3>
            <p>Fullstack Developer | Building Digital Experiences</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Joseph Ndunche. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

