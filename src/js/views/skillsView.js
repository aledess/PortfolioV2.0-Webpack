const skills = [
  {
    name: "html",
    icon: "dev-icon devicon-html5-plain-wordmark colored",
    perc: "100%"
  },
  {
    name: "css",
    icon: "dev-icon devicon-css3-plain-wordmark colored",
    perc: "90%"
  },
  {
    name: "sass",
    icon: "dev-icon devicon-sass-original colored",
    perc: "90%"
  },
  {
    name: "bootstrap",
    icon: "dev-icon devicon-bootstrap-plain colored ",
    perc: "90%"
  },
  {
    name: "javascript",
    icon: "dev-icon devicon-javascript-plain colored",
    perc: "80%"
  },
  {
    name: "jquery",
    icon: "dev-icon devicon-jquery-plain-wordmark colored ",
    perc: "60%"
  },
  {
    name: "typescript",
    icon: "dev-icon devicon-typescript-plain colored",
    perc: "70%"
  },
  {
    name: "angular",
    icon: "dev-icon devicon-angularjs-plain colored",
    perc: "70%"
  },
  {
    name: "ionic",
    icon: "dev-icon devicon-angularjs-plain",
    perc: "70%"
  },
  {
    name: "wordpress",
    icon: "dev-icon devicon-wordpress-plain colored",
    perc: "60%"
  },
  {
    name: "php",
    icon: "dev-icon devicon-php-plain colored",
    perc: "50%"
  },
  {
    name: "sql",
    icon: "dev-icon devicon-mysql-plain-wordmark colored",
    perc: "50%"
  },
  {
    name: "webpack",
    icon: "dev-icon devicon-webpack-plain colored",
    perc: "60%"
  },
  {
    name: "git",
    icon: "dev-icon devicon-git-plain colored",
    perc: "60%"
  }
];
export const renderSkills = () => {
  let markup = "";
  skills.forEach(item => {
    markup =
      markup +
      `
      <div class="skillBox">
        <div class="skill-text">
          <p> <i class="${item.icon}"></i> ${item.name}</p>
          <p class="animated zoomIn delay-1s">${item.perc}</p>
        </div>
        <div class="skill">
          <div class="skill-level skill-level--${item.name}">
          </div>
        </div>
      </div>`;
  });
  markup = `
        <div id="skills" class="animated zoomIn">
        <h2 class="heading">Skills</h2>

        <div class="skillboxes">
          ${markup}
        </div>  
        </div>
        `;
  return markup;
};
