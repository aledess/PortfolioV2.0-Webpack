const works = [
  {
    project: "1",
    title: "Hoolux.eu",
    desc: "html | css | sass | bootstrap | js | php"
  },
  {
    project: "2",
    title: "winetours template",
    desc: "html | css | sass"
  },
  {
    project: "3",
    title: "forkify web app",
    desc: "html | sass | js | webpack"
  },
  {
    project: "4",
    title: "restaurant template",
    desc: "html | css | sass"
  },
  {
    project: "5",
    title: "photox template",
    desc: "html | css | bootstrap"
  },
  {
    project: "6",
    title: "real estate template",
    desc: "html | sass"
  },
  {
    project: "7",
    title: "hotel template",
    desc: "html | sass"
  },
  {
    project: "8",
    title: "food delivery template",
    desc: "html | css"
  },
  {
    project: "9",
    title: "gestionale scuola calcio",
    desc: "html | css | php | mysql"
  }
];

export const renderWorks = () => {
  let markup = "";
  works.forEach(item => {
    markup =
      markup +
      `<figure class="project project--${item.project}" >
            <img src="img/project-${item.project}.png" alt="project">
            <figcaption>
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
              </figcaption>
        </figure>`;
  });
  markup = `<div id="works" class="animated slideInRight">
        ${markup} </div>`;
  return markup;
};

export const renderGallery = () => {
  $(".project--1").magnificPopup({
    items: [
      {
        src: "img/project1/1.png",
        title: '<a href="https://www.hoolux.eu/" target="_blank">www.hoolux.eu</a>'
      },
      {
        src: "img/project1/2.png",
        title: '<a href="https://www.hoolux.eu/" target="_blank">www.hoolux.eu</a>'
      },
      {
        src: "img/project1/3.png",
        title: '<a href="https://www.hoolux.eu/" target="_blank">www.hoolux.eu</a>'
      },
      {
        src: "img/project1/4.png",
        title: '<a href="https://www.hoolux.eu/" target="_blank">www.hoolux.eu</a>'
      },
      {
        src: "img/project1/5.png",
        title: '<a href="https://www.hoolux.eu/" target="_blank">www.hoolux.eu</a>'
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  setTimeout(function() {
    $(".project--2").magnificPopup({
      items: [
        {
          src: "img/project2/1.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/2.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/3.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/4.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/5.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/6.jpg",
          title: "HTML/SASS Template"
        },
        {
          src: "img/project2/7.jpg",
          title: "HTML/SASS Template"
        }
      ],
      gallery: {
        enabled: true
      },
      type: "image"
    });
  }, 2000);
  $(".project--3").magnificPopup({
    items: [
      {
        src: "img/project3/1.jpg",
        title: "Javascript/Webpack Web App"
      },
      {
        src: "img/project3/2.jpg",
        title: "Javascript/Webpack Web App"
      },
      {
        src: "img/project3/3.jpg",
        title: "Javascript/Webpack Web App"
      }
    ],
    gallery: {
      enabled: true
    },
    type: "image" // this is default type,
  });
  $(".project--4").magnificPopup({
    items: [
      {
        src: "img/project4/1.jpg",
        title: "HTML/CSS Template"
      },
      {
        src: "img/project4/2.jpg",
        title: "HTML/CSS Template"
      },
      {
        src: "img/project4/3.jpg",
        title: "HTML/CSS Template"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  $(".project--5").magnificPopup({
    items: [
      {
        src: "img/project5/1.jpg",
        title: "Bootstrap Template"
      },
      {
        src: "img/project5/2.jpg",
        title: "Bootstrap Template"
      },
      {
        src: "img/project5/3.jpg",
        title: "Bootstrap Template"
      },
      {
        src: "img/project5/4.jpg",
        title: "Bootstrap Template"
      },
      {
        src: "img/project5/5.jpg",
        title: "Bootstrap Template"
      },
      {
        title: "Bootstrap Template",
        src: "img/project5/6.jpg"
      },
      {
        src: "img/project5/7.jpg",
        title: "Bootstrap Template"
      },
      {
        src: "img/project5/8.jpg",
        title: "Bootstrap Template"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  $(".project--6").magnificPopup({
    items: [
      {
        src: "img/project6/1.jpg",
        title: "CSS Grid Template"
      },
      {
        src: "img/project6/2.jpg",
        title: "CSS Grid Template"
      },
      {
        src: "img/project6/3.jpg",
        title: "CSS Grid Template"
      },
      {
        src: "img/project6/4.jpg",
        title: "CSS Grid Template"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  $(".project--7").magnificPopup({
    items: [
      {
        src: "img/project7/1.jpg",
        title: "CSS Flexbox Template"
      },
      {
        src: "img/project7/2.jpg",
        title: "CSS Flexbox Template"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  $(".project--8").magnificPopup({
    items: [
      {
        src: "img/project8/1.jpg",
        title: "HTML/SASS Template"
      },
      {
        src: "img/project8/2.jpg",
        title: "HTML/SASS Template"
      },
      {
        src: "img/project8/3.jpg",
        title: "HTML/SASS Template"
      },
      {
        src: "img/project8/4.jpg",
        title: "HTML/SASS Template"
      },
      {
        src: "img/project8/5.jpg",
        title: "HTML/SASS Template"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
  $(".project--9").magnificPopup({
    items: [
      {
        src: "img/project9/1.jpg",
        title: "Gestionale PHP/MySql"
      },
      {
        src: "img/project9/2.jpg",
        title: "Gestionale PHP/MySql"
      },
      {
        src: "img/project9/3.jpg",
        title: "Gestionale PHP/MySql"
      },
      {
        src: "img/project9/4.jpg",
        title: "Gestionale PHP/MySql"
      },
      {
        src: "img/project9/5.jpg",
        title: "Gestionale PHP/MySql"
      }
    ],
    gallery: {
      enabled: true
    },

    type: "image" // this is default type
  });
};
