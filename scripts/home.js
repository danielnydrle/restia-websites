const dispecink = document.querySelector(".intro-image--dispecink");
const pikolik = document.querySelector(".intro-image--pikolik");
const agregator = document.querySelector(".intro-image--agregator");
let state = 1;

window.onload = () => {
	validateEmail();
	zIndexImages();
}

window.onresize = () => {
	dispecink.style.zIndex = "1";
	pikolik.style.zIndex = "5";
	agregator.style.zIndex = "8";
}

zIndexImages = () => {
	if (window.innerWidth > 1200) {

		setTimeout(() => {
			if (state === 0) {
				pikolik.style.zIndex = "8";
				pikolik.children[0].style.transform = "scale(1.1)";
				agregator.children[0].style.transform = "scale(1)";
				dispecink.style.zIndex = "5";
				agregator.style.zIndex = "1";
				state++;

			} else if (state === 1) {
				dispecink.style.zIndex = "8";
				dispecink.children[0].style.transform = "scale(1.1)";
				pikolik.children[0].style.transform = "scale(1)";
				agregator.style.zIndex = "5";
				pikolik.style.zIndex = "1";
				state++;

			} else if (state === 2) {
				agregator.style.zIndex = "8";
				agregator.children[0].style.transform = "scale(1.1)";
				dispecink.children[0].style.transform = "scale(1)";
				pikolik.style.zIndex = "5";
				dispecink.style.zIndex = "1";
				state = 0;
			}
			zIndexImages();
		}, 3000);
	}
}

//answers
const questions = document.querySelectorAll(".questions-item-question");
for (const question of questions) {
	question.addEventListener("click", (e) => {
		console.log(question);
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

validateEmail = () => {
	const rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const button = document.querySelector(".demo-form-submit");
	let email = document.querySelector(".demo-form-email").value;
	let valid = rgx.test(email);
	if (valid && !button.classList.contains("enabled")) {
		button.classList.replace("disabled", "enabled");
		button.disabled = false;
	} else if (!valid && button.classList.contains("enabled")) {
		button.classList.replace("enabled", "disabled");
		button.disabled = true;
	}
}