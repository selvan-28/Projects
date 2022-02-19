import "./Skills.css";
function Skills() {
  return (
    <div>
      <div className="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img
            class="code-img"
            src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47culo5zahn0qu6w474la8itob2phhp763damiw4cj&rid=giphy.gif&ct=g"
            alt="code-img"
          />

          <h3>Design & Development</h3>
          <p>
            I started learning to code when I was 22 years old because I wanted
            to make my own ideas into WebApps. Over time, I have gained a wealth
            of experience designing and developing web applications.
          </p>
        </div>
        <div class="skill-row">
          <img
            class="giphy-img"
            src="https://media0.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=ecf05e47aheqijksfwcltq4kugloklxuumc3dr4dtmr1bzwk&rid=giphy.gif&ct=g"
            alt="code-img"
          />

          <h3>Knowledge</h3>
          <p>
            Tools iam good with are, Html, Css, Bootsrap, JavaScript, DOM,
            Nodejs, React, GitHub.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Skills;
