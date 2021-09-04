const header = document.querySelector(".header");
const headerDescription = document.querySelector(".header-title-description");

headerResize = () => {
	if (window.innerWidth > 992) {
		if (window.pageYOffset > 50) {
			header.style.height = "100px";
			if (headerDescription !== null)
				headerDescription.style.opacity = "0";
		} else {
			header.style.height = "150px";
			if (headerDescription !== null)
				headerDescription.style.opacity = "1";
		}
	} else {
		header.style.height = "100px";
	}
}

window.addEventListener("DOMContentLoaded", headerResize);
window.addEventListener("scroll", headerResize);
window.addEventListener("resize", headerResize);