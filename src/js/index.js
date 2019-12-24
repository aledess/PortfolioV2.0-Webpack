import "../sass/main.scss";
import { renderSkills } from "./views/skillsView";
import { renderHome } from "./views/homeView";
import { renderAbout } from "./views/aboutView";
import { renderLoader } from "./views/loaderView";
import { renderWorks, renderGallery } from "./views/worksView";
import { renderContacts } from "./views/contactsView";
import { toggleMenu, resetMenu } from "./views/menuView";

loadContent();

document.querySelector(".navbar__list").style.left = "-100vw";

function loadContent() {
  window.addEventListener("hashchange", loadContent);
  toggleMenu();

  const path = window.location.hash;

  

  const selectedItem = document.querySelector(`a[href="${path}"] i`);

  // LOAD LOADER
  document.querySelector(".content").innerHTML = renderLoader();

  // HIGHLIGHT SELECTED PAGE LINK
  const itemsArr = document.querySelectorAll(".navbar__item i");

  itemsArr.forEach(item => {
    item.classList.remove("active-link");
  });
  if (selectedItem) {
    selectedItem.classList.add("active-link");
  } else {
    document.querySelector('a[href="#home"] i').classList.add("active-link");
  }

  // LOAD CONTENT
  switch (path) {
    case "#home":
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderHome();
      }, 1700);
      break;
    case "#about":
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderAbout();
      }, 1700);
      break;
    case "#skills":
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderSkills();
      }, 1700);
      break;
    case "#works":
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderWorks();
          renderGallery();
      }, 1700);
      break;
    case "#contacts":
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderContacts();
      }, 1700);
      break;
    default:
      setTimeout(function() {
        document.querySelector(".content").innerHTML = renderHome();
      }, 1700);
  }
}
