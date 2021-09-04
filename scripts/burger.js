const mobileNav = document.querySelector(".header-navbar--small");
let isNavOpen = false;

openNav = () => {
    mobileNav.classList.remove("is-closed");
    mobileNav.classList.add("is-opened");
	isNavOpen = true;
}

closeNav = () => {
    mobileNav.classList.remove("is-opened");
    mobileNav.classList.add("is-closed");
	isNavOpen = false;
}