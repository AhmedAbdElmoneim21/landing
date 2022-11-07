const navList = document.getElementById("navbar__list"); // assuming ul exists
const documentFragment = document.createDocumentFragment();
const allSection = document.querySelectorAll("section");
const navMenu = document.getElementsByClassName("navbar__menu");

allSection.forEach((section) => {
  const dataAtt = section.dataset.nav;
  const li = document.createElement("li");
  li.innerHTML = `<a class="menu__link" href="#${section.id}">${dataAtt}</a>`;
  documentFragment.appendChild(li);
});

navList.appendChild(documentFragment);
