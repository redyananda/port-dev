import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2 className="experience-title">
        my <span style={{ color: "#c65040" }}>Experience</span>
      </h2>
      <div className="experience-container">
        <div className="experience-timeline">
          <div className="experience-date">December 2025 - present</div>
          <div className="experience-dot"></div>

          <div className="experience-content">
            <h2>Founder & Product Lead</h2>
            <h3>Navia</h3>
            <p>
              At Navia, we are building structured learning roadmaps that
              organize languages from beginner to near-native proficiency
              levels. Each concept is placed within a logical progression based
              on prerequisite relationships and learning dependencies.
            </p>
            <p>Key responsibilities:</p>
            <p>
              - Define product vision, strategy, and long-term roadmap
              <br /> - Design structured learning frameworks and language
              roadmaps
              <br /> - Lead product development and platform growth
            </p>
          </div>
        </div>
        <div className="experience-timeline">
          <div className="experience-date">November 2025</div>
          <div className="experience-dot"></div>
          <div className="experience-content">
            <h2>Frontend Developer</h2>
            <h3>Travilla</h3>
            <p>
              As a Frontend Developer at Travilla, I built the interface for a
              smart travel itinerary planner using Next.js, React, and
              TypeScript. I focused on creating a clean, responsive experience -
              including a step-by-step planning wizard and an interactive Mapbox
              map - while connecting everything to a type-safe backend powered
              by Prisma and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
