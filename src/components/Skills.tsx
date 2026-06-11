import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="skills-title">my Skills</h2>
      <div className="skills-container">
        <div className="skills-badge">
          <img src="./html.png" alt="symbo-html" />
          <p>HTML</p>
        </div>
        <div className="skills-badge">
          <img src="./css.png" alt="symbol-css" />
          <p>CSS</p>
        </div>
        <div className="skills-badge">
          <img src="./js.png" alt="symbol-js" />
          <p>JavaScript</p>
        </div>
        <div className="skills-badge">
          <img src="./ts.png" alt="symbol-ts" />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-badge">
          <img src="./react.png" alt="symbo-react" />
          <p>React JS</p>
        </div>
        <div className="skills-badge">
          <img src="./nodeJs.png" alt="symbol-node-js" />
          <p>NODE JS</p>
        </div>
        <div className="skills-badge">
          <img src="./postgre.png" alt="symbol-postgre" />
          <p>PostgreSQL</p>
        </div>
        <div className="skills-badge">
          <img src="./tailwind.png" alt="symbol-tailwind" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
