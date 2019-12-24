export const toggleMenu = () => {
  let showmenu = false;
  document.querySelector(".menu-btn").addEventListener("click", toggle);

  function toggle() {
    if (showmenu === false) {
      document.querySelector(".navbar__list").style.left = "0";
      // if (document.querySelector("#works"))
      //   document.querySelector("#works").style.paddingTop = "100px";
      showmenu = true;
    } else if (showmenu === true) {
      document.querySelector(".navbar__list").style.left = "-100vw";
      // if (document.querySelector("#works"))
      //   document.querySelector("#works").style.paddingTop = "50px";
      showmenu = false;
    }
  }
  window.onresize = () => {
    if (window.innerWidth >= 768) {
      document.querySelector(".navbar__list").style.left = "0";
      // if (document.querySelector("#works"))
      //   document.querySelector("#works").style.paddingTop = "0";
      showmenu = true;
    } else {
      document.querySelector(".navbar__list").style.left = "-100vw";
      // if (document.querySelector("#works"))
        // document.querySelector("#works").style.paddingTop = "50px";
      showmenu = false;
    }
  };
};
