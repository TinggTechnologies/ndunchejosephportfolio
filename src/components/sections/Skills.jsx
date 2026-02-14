import { FaDatabase, FaDocker, FaGitAlt, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { SiDjango, SiFirebase, SiFlutter, SiLaravel, SiTypescript } from 'react-icons/si';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/Card';
import './Skills.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Skills() {
  const skills = [
    {
      name: 'React',
      icon: <FaReact />,
      description: 'Building interactive UIs with modern React features like Hooks and Context.'
    },
    {
      name: 'React Native',
      icon: <FaReact />,
      description: 'Developing cross-platform mobile applications for iOS and Android.'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      description: 'Writing type-safe code for better maintainability and developer experience.'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Creating scalable server-side applications and RESTful APIs.'
    },
    {
      name: 'Vue.js',
      icon: <FaVuejs />,
      description: 'Building progressive web applications with the Vue ecosystem.'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
      description: 'Crafting beautiful, natively compiled applications from a single codebase.'
    },
    {
      name: 'Laravel',
      icon: <SiLaravel />,
      description: 'Developing robust PHP web applications with elegant syntax.'
    },
    {
      name: 'Django',
      icon: <SiDjango />,
      description: 'Building secure and maintainable web applications with Python.'
    },
    {
      name: 'Docker',
      icon: <FaDocker />,
      description: 'Containerizing applications for consistent deployment environments.'
    },
    {
      name: 'Firebase',
      icon: <SiFirebase />,
      description: 'Implementing real-time databases, authentication, and cloud functions.'
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      description: 'Version control and collaboration for efficient team workflows.'
    },
    {
      name: 'SQL & NoSQL',
      icon: <FaDatabase />,
      description: 'Designing and managing relational and document-based databases.'
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            My technical toolkit for building digital solutions
          </p>
        </div>

        <div className="skills-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="skills-swiper"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <Card className="skill-card">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <h3 className="skill-title">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
