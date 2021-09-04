window.onload = () => {
	changeText();
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