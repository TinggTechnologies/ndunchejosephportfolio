import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import './EducationPage.css';

export default function EducationPage() {
  const education = [
    {
      degree: "Bachelor of Science - Computer Science (Honors)",
      field: "Computer Science",
      institution: "Federal University of Oye-Ekiti, Ekiti State, Nigeria",
      grade: "CGPA: 4.31/5.0",
      year: "Sept 2018 - Aug 2023",
      description: "Comprehensive computer science education with focus on software engineering, algorithms, data structures, and system design. Achieved honors with exceptional academic performance."
    },
    {
      degree: "MSc - Computer Science (In Progress)",
      field: "Computer Science",
      institution: "Lagos State University, Lagos State, Nigeria",
      grade: "In Progress",
      year: "Aug 2025 - Present",
      description: "Advanced studies in computer science with focus on software engineering, artificial intelligence, and advanced system architecture."
    }
  ];

  return (
    <PageLayout>
      <div className="education-page">
        <div className="education-container">
          <div className="page-header">
            <h1 className="page-title">Education</h1>
            <p className="page-subtitle">
              Academic background and qualifications
            </p>
          </div>

          <div className="education-timeline">
            {education.map((edu, index) => (
              <Card key={index} className="education-card">
                <CardHeader>
                  <div className="education-header">
                    <div className="education-main">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <p className="education-field">{edu.field}</p>
                      <p className="education-institution">{edu.institution}</p>
                    </div>
                    <div className="education-meta">
                      <span className="education-year">{edu.year}</span>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="education-description">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="additional-info-card">
            <CardContent>
              <h2 className="info-heading">How My Education Supports Software Development</h2>
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">💻</div>
                  <h3>Programming Fundamentals</h3>
                  <p>Computer science education provided strong foundation in programming languages, algorithms, and software design patterns.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">🏗️</div>
                  <h3>System Architecture</h3>
                  <p>Deep understanding of system design, database management, and software architecture principles for scalable applications.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">🔧</div>
                  <h3>Problem Solving</h3>
                  <p>Analytical thinking and systematic approach to complex problem-solving essential for software engineering challenges.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">🚀</div>
                  <h3>Modern Technologies</h3>
                  <p>Continuous learning mindset and academic foundation enable quick adaptation to emerging technologies and frameworks.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}

