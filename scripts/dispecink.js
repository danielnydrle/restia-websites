const mobileNav = document.querySelector(".header__navbar--small");
let isNavOpen = false;

window.onload = () => {
	headerResize();
	changeText();
}

window.onscroll = () => {
	headerResize();
}

headerResize = () => {
	if (window.innerWidth > 992) {
		if (window.pageYOffset > 50) {
			document.querySelector(".header").style.height = "100px";
			document.querySelector(".header__title-description").style.opacity = "0";
		} else {
			document.querySelector(".header").style.height = "150px";
			document.querySelector(".header__title-description").style.opacity = "1";
		}
	}
}

changeText = () => {
	if (window.innerWidth < 576) {
		let buttons = [
			".benefits__buttons-button--full",
			".options__buttons-button--full",
			".try__box-text-button"
		]
		buttons.forEach(b => {
			document.querySelector(b).innerHTML = "KONZULTACE ZDARMA"
		})
	}
}

openNav = () => {
	mobileNav.style.transform = "translateX(0%)"
	isNavOpen = true;
}

closeNav = () => {
	mobileNav.style.transform = "translateX(100%)"
	isNavOpen = false;
}