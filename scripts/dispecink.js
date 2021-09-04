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
			document.querySelector(".header-title-description").style.opacity = "0";
		} else {
			document.querySelector(".header").style.height = "150px";
			document.querySelector(".header-title-description").style.opacity = "1";
		}
	}
}

changeText = () => {
	if (window.innerWidth < 576) {
		let buttons = [
			".benefits-buttons-button--full",
			".options-buttons-button--full",
			".try-box-text-button"
		]
		buttons.forEach(b => {
			document.querySelector(b).innerHTML = "KONZULTACE ZDARMA"
		})
	}
}