const mobileNav = document.querySelector(".header__navbar--small");
const vid = document.querySelector(".intro__video-video");
const vidButton = document.querySelector(".intro__video-button");
let carouselCounter = 0;
let isNavOpen = false;

Object.defineProperty(HTMLMediaElement.prototype, "playing", {
	get: function() {
		return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
	}
})

window.onload = () => {
	headerResize();
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

openNav = () => {
	mobileNav.style.transform = "translateX(0%)"
	isNavOpen = true;
}

closeNav = () => {
	mobileNav.style.transform = "translateX(100%)"
	isNavOpen = false;
}

toggleVid = () => {
	if (!(vid.playing)) {
		vid.play();
		isVidPlaying = true;
		vidButton.innerHTML = '<i class="fas fa-pause"></i>';
	}
	else if (vid.playing) {
		vid.pause();
		isVidPlaying = false;
		vidButton.innerHTML = '<i class="fas fa-play"></i>';

	}
}

document.querySelector(".reviews__box").addEventListener("slide.bs.carousel", (e) => {
	document.querySelector(".reviews").classList.add("transitioning");
	if (e.direction === "left") {
		carouselCounter--;
	}
	else if (e.direction === "right") {
		carouselCounter++;
	}
	if (window.innerWidth > 992)
		document.querySelector(".reviews").style.backgroundPosition = `${carouselCounter * document.body.clientWidth}px 0`;
	document.querySelector(".reviews").classList.remove(`i${e.from}`);
	document.querySelector(".reviews").classList.add(`i${e.to}`);
	setTimeout(() => {
		document.querySelector(".reviews").classList.remove("transitioning");
	}, 600)
})

const parallax = (e) => {
	document.querySelectorAll(".benefits__bubbles-bubble").forEach((element) => {
		let parallaxValue = element.getAttribute("data-parallax");
		let coordX = (e.clientX * parallaxValue) / 250;
		let coordY = (e.clientY * parallaxValue) / 250;

		element.style.transform = `translateX(${coordX}px) translateY(${coordY}px)`
	})
}

document.addEventListener("mousemove", parallax);