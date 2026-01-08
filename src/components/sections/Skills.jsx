import React from 'react';
import { FaPalette, FaCogs, FaTools } from 'react-icons/fa';
import Card from '../ui/Card';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: <FaPalette />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'Vue', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 95 },
        { name: 'Flutter', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaCogs />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Laravel', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Java', level: 85 },
        { name: 'GoLang', level: 78 },
        { name: 'SQL', level: 88 },
        { name: 'NoSQL', level: 85 },
        { name: 'Firebase', level: 90 }
      ]
    },
    {
      title: 'Development Tools & Skills',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'API Design', level: 90 },
        { name: 'Mobile Development', level: 92 },
        { name: 'Fullstack Development', level: 95 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            Comprehensive skill set in fullstack development, mobile applications, and modern technologies
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

