import templateMenu from "./template/menu.hbs";
import menuObject from "./menu.json";
import './styles.css';
const refs = {
    menu: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),
    body:document.querySelector('body')
}
const markUp = menuObject.map((element) => templateMenu(element)).join('');
refs.menu.insertAdjacentHTML('beforeend', markUp);
 const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
function changeTheme() {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', refs.body.classList);
}

if (localStorage.getItem('theme') === null) {
    refs.body.classList.add(Theme.LIGHT);
}
    else {
    refs.body.classList.add(localStorage.getItem('theme'));
}
if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeSwitch.setAttribute("checked", "checked")
}
refs.themeSwitch.addEventListener('change', changeTheme);



