let card = document.getElementById('card-dynamic')
let button = document.getElementById('button')
let number = ''
let advice = ''

button.addEventListener('click', (e) => {
	fetch('https://api.adviceslip.com/advice')
		.then((res) => (data = res.json()))
		.then((data) => {
			number = data.slip.id
			advice = data.slip.advice
			card.innerHTML = `
        <p class="number">
        ADVICE #${number}
        </p>
        <p>"${advice}"
        </p>
        `
		})
})
