import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="skills-title">my <span style={{ color: "#c65040" }}>Skills</span></h2>
      <div className="skills-container">
        <div className="skills-badge">
          <img src="./html.webp" alt="symbo-html" />
          <p>HTML</p>
        </div>
        <div className="skills-badge">
          <img src="./css.webp" alt="symbol-css" />
          <p>CSS</p>
        </div>
        <div className="skills-badge">
          <img src="./js.webp" alt="symbol-js" />
          <p>JavaScript</p>
        </div>
        <div className="skills-badge">
          <img src="./ts.webp" alt="symbol-ts" />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-badge">
          <img src="./react.webp" alt="symbo-react" />
          <p>React JS</p>
        </div>
        <div className="skills-badge">
          <img src="./nodeJs.webp" alt="symbol-node-js" />
          <p>NODE JS</p>
        </div>
        <div className="skills-badge">
          <img src="./postgre.webp" alt="symbol-postgre" />
          <p>PostgreSQL</p>
        </div>
        <div className="skills-badge">
          <img src="./tailwind.webp" alt="symbol-tailwind" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
