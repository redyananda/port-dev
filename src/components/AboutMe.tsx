import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about-header">
        <h2 className="about-header-title">// my <span style={{ color: "#c65040" }}>Story</span></h2>
      </div>
      <div className="about-bio">
        <div className="about-bio-container">
          <p className="about-bio-content">
            I'm a full-stack web developer who loves building things that are
            fast, reliable, and useful. It started with a simple joy, taking an
            idea and turning it into something people can open and use in a
            browser. That feeling has stayed with me ever since. Right now, I'm
            putting all of that energy into Navia, a learning platform. I'm
            building to help Indonesian students and young professionals prepare
            for their German and English exams. Building it on my own has let me
            work on every part of the project, from the database behind the
            scenes to the design people see on screen.
          </p>
        </div>
        <div className="about-bio-image">
          <img src="./about-me.webp" alt="about-me" />
        </div>
      </div>
      <div className="about-skills">
        <div className="about-skills-image">
          <img src="./about-skills.webp" alt="about-skills" />
        </div>
        <div className="about-skills-container">
          <p className="about-skills-content">
            I work across the full stack, mostly with JavaScript and TypeScript
            - React, Astro, and Tailwind on the frontend, and Node.js, Prisma,
            and PostgreSQL on the backend, plus Python, Git, and deploying on
            platforms like Railway and Cloudflare. Beyond the tools, I care
            about the small details, since that's usually what separates good
            software from average. I communicate clearly and honestly, keep the
            people I work with in the loop, always deliver what I promise on
            time, and make it a habit to keep learning as tech keeps moving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
