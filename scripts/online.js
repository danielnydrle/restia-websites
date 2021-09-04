const vid = document.querySelector(".intro-video-video");
const vidButton = document.querySelector(".intro-video-button");
const introLine = document.querySelector(".intro-info-list-line");
let carouselCounter = 0;

Object.defineProperty(HTMLMediaElement.prototype, "playing", {
	get: function() {
		return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
	}
})

window.onload = () => {
	calculateIntroLine();
}

window.onscroll = () => {
	calculateIntroLine();
}

window.onresize = () => {
	calculateIntroLine();

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

calculateIntroLine = () => {
	let introHeadings = document.querySelectorAll(".intro-info-list-item-heading");
	let firstHeadingHeight = introHeadings[0].getBoundingClientRect().top;
	let lastHeadingHeight = introHeadings[introHeadings.length - 1].getBoundingClientRect().top;
	let lineHeight = lastHeadingHeight - firstHeadingHeight;
	introLine.style.height = `${lineHeight}px`;

}

document.querySelector(".reviews-box").addEventListener("slide.bs.carousel", (e) => {
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
	document.querySelectorAll(".benefits-bubbles-bubble").forEach((element) => {
		let parallaxValue = element.getAttribute("data-parallax");
		let coordX = (e.clientX * parallaxValue) / 250;
		let coordY = (e.clientY * parallaxValue) / 250;

		element.style.transform = `translateX(${coordX}px) translateY(${coordY}px)`
	})
}

document.addEventListener("mousemove", parallax);