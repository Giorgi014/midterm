const BURGER_MENU_BUTTON = document.getElementById("burger_menu");
const NAV_LIST = document.querySelector("ul");
const RESPONSIVE_SEARCH_BUTTON = document.getElementById("res_search");
const CLOSE_BUTTON = document.querySelector("i");
const SEARCH_CONTAINER = document.getElementsByClassName("search_container");
const CLOSE_SEARCH_BUTTON = document.getElementById("close_search_button");

const responsiveMenu = () => {
  const isActive = BURGER_MENU_BUTTON.classList.toggle("active");

  NAV_LIST.classList.toggle("active", isActive);

  CLOSE_BUTTON.classList.toggle("fa-xmark", isActive);
  CLOSE_BUTTON.classList.toggle("burger_menu", !isActive);
};

const responsiveSerch = () => {
  const activeSearch = RESPONSIVE_SEARCH_BUTTON.classList.toggle("active_search");

  SEARCH_CONTAINER[0].classList.toggle("active_search", activeSearch);

  CLOSE_SEARCH_BUTTON.classList.toggle("fa-xmark", activeSearch);
  CLOSE_SEARCH_BUTTON.classList.toggle("res_search", !activeSearch);
};

const closeMenu = () => {
  BURGER_MENU_BUTTON.classList.remove("active");
  NAV_LIST.classList.remove("active");
  CLOSE_SEARCH_BUTTON.classList.remove("fa-xmark");
  CLOSE_SEARCH_BUTTON.classList.remove("active_search");
  SEARCH_CONTAINER[0].classList.remove("active_search");
  CLOSE_BUTTON.classList.remove("fa-xmark");
};

BURGER_MENU_BUTTON.addEventListener("click", () => {
  responsiveMenu();
});
CLOSE_BUTTON.addEventListener("click", () => {
  closeMenu();
});

RESPONSIVE_SEARCH_BUTTON.addEventListener("click", () => {
  responsiveSerch();
});
