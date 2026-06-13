import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> growth
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Foundations</h4>
                <h5>Learning & Exploration</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my development journey by learning programming
              fundamentals, problem-solving, and modern web technologies.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Development</h4>
                <h5>Building Real-World Applications</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed full-stack projects and gained hands-on experience
              creating responsive, scalable, and user-focused applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Continuous Growth</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focused on building modern web applications, exploring AI-powered
              solutions, and continuously expanding technical expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;