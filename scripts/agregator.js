const logos = document.querySelectorAll(".intro-clients-logos-logo");
const path = document.querySelector(".path");
const dots = document.getElementsByClassName("path-dot");
const icons = document.getElementsByClassName("process-list-item-icon");
let dotsList = [];
let iconsList = Array.from(icons);
let windowScrollDotCoords = {};
let dotBreakpoints = [];
let iconBreakpoints = [];
const funnel = document.querySelector(".intro-clients-funnel");
const questions = document.querySelectorAll(".questions-item-question");
for (const question of questions) {
	question.addEventListener("click", (e) => {
		let questionNumber = e.target.classList[1].slice(-1);
		toggleAnswer(questionNumber);
	})
}

toggleAnswer = (answerNumber) => {
	let answer = document.querySelector(`.questions-item-answer--${answerNumber}`);
	let item = answer.parentElement;
	if (answer.style.maxHeight) {
		item.classList.remove("is-open");
		item.classList.add("is-closed");
		answer.style.maxHeight = null;
	} else {
		item.classList.remove("is-closed");
		item.classList.add("is-open");
		answer.style.maxHeight = `${answer.scrollHeight}px`;
	}
}

const rellax = new Rellax(".rellax", {
	speed: -3,
	vertical: true,
	round: true
});

const hideLogos = () => {
	let edge;
	if (window.innerWidth > 1200)
		edge = 100;
	else if (window.innerWidth > 992)
		edge = 70
	else if (window.innerWidth > 768)
		edge = 80;
	else if (window.innerWidth > 576) {
		edge = 70;
	}
	logos.forEach(e => {
		if (e.getBoundingClientRect().bottom-edge > funnel.getBoundingClientRect().top) {
			e.style.opacity = "0";
		}
		else {
			e.style.opacity = "1"
		}
	})
}

const placeDots = () => {
	if (window.innerWidth >= 1400) { //1400px+
		windowScrollDotCoords = {min: 300, max: 1001};
		iconBreakpoints = [708, 760, 828, 881, 946, 997];
		for (var i = 0; i < 100; i++) {
			let dot = document.createElement("div");
			dot.classList.add("path-dot", "inactive");
			path.appendChild(dot);
		}
	}
	else if (window.innerWidth >= 1200) { //1200-1400
		windowScrollDotCoords = {min: 500, max: 1051};
		iconBreakpoints = [820, 865, 913, 957, 1001, 1049];
		for (var i = 0; i < 100; i++) {
			let dot = document.createElement("div");
			dot.classList.add("path-dot", "inactive");
			path.appendChild(dot);
		}
	}
	else if (window.innerWidth >= 992) { //992-1200
		windowScrollDotCoords = {min: 200, max: 1201};
		iconBreakpoints = [620, 741, 835, 997, 1097, 1197];
		for (var i = 0; i < 150; i++) {
			let dot = document.createElement("div");
			dot.classList.add("path-dot", "inactive");
			path.appendChild(dot);
		}
	}
	else if (window.innerWidth >= 768) { //768-992
		windowScrollDotCoords = {min: 567, max: 1505};
		iconBreakpoints = [922, 1018, 1115, 1309, 1405, 1500];
		for (var i = 0; i < 150; i++) {
			let dot = document.createElement("div");
			dot.classList.add("path-dot", "inactive");
			path.appendChild(dot);
		}
	}
	else if (window.innerWidth >= 576) { //576-768
		windowScrollDotCoords = {min: 594, max: 1775};
		iconBreakpoints = [955, 1095, 1295, 1430, 1640, 1770];
		for (var i = 0; i < 200; i++) {
			let dot = document.createElement("div");
			dot.classList.add("path-dot", "inactive");
			path.appendChild(dot);
		}
	}
	else { //576px-
		iconsList.forEach(e => {
			iconBreakpoints.push(e.getBoundingClientRect().top -document.body.getBoundingClientRect().top  - window.innerHeight/1.5)
		})
	}
	let dotsColourRange = windowScrollDotCoords.max - windowScrollDotCoords.min;
	dotsList = Array.from(dots);
	dotsList.forEach((e, index) => {
		e.style.offsetDistance = `${100 / dotsList.length * (index + 1)}%`
	})
	for (let i = windowScrollDotCoords.min; i < windowScrollDotCoords.max; i += dotsColourRange / dotsList.length) {
		dotBreakpoints.push(i)
	}
}

const colourDots = () => {
	let dotScrollBorder;
	dotScrollBorder = dotBreakpoints.reduce((a, b) => {
		return (Math.abs(b - window.scrollY) < Math.abs(a - window.scrollY) ? b : a);
	}, 0)
	if (window.scrollY > windowScrollDotCoords.min-100 && window.scrollY < windowScrollDotCoords.max+100) {
		dotsList.forEach((e, index) => {
			if (index < dotBreakpoints.indexOf(dotScrollBorder)) {
				if (e.classList.contains("inactive")) {
					e.classList.remove("inactive");
					e.classList.add("active");
				}
			}
			else {
				if (e.classList.contains("active")) {
					e.classList.remove("active");
					e.classList.add("inactive");
				}
			}
		});
	}
	iconsList.forEach((e, index) => {
		if (iconBreakpoints[index] <= window.scrollY) {
			if (e.classList.contains("inactive")) {
				e.classList.remove("inactive");
				e.classList.add("active");
			}
		}
		else {
			if (e.classList.contains("active")) {
				e.classList.remove("active");
				e.classList.add("inactive");
			}
		}
	})
}

window.onscroll = () => {
	hideLogos();
	colourDots();
}

window.onload = () => {
	placeDots();
	colourDots();
}

window.onresize = () => {
	dotsList.forEach(e => {
		e.remove();
	})
	windowScrollDotCoords = {};
	dotBreakpoints.splice(0, dotBreakpoints.length);
	iconBreakpoints.splice(0, iconBreakpoints.length);
	hideLogos();
	placeDots();
	colourDots();
}