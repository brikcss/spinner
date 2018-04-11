/* global brikcss:false */
(function() {
	const timers = {};
	const spinners = {};
	let n = 1;

	// -----------------------------
	// Auto initialize each spinner.
	//
	document.querySelectorAll('.spinner').forEach((element) => {
		const options = element.dataset.spinner ? JSON.parse(element.dataset.spinner) : {};
		if (element.dataset.spinnerId) options.id = element.dataset.spinnerId;
		const spinner = brikcss.spinner.create(element, options);
		spinners[spinner.id] = spinner;
		if (element.dataset.progress) {
			if (element.dataset.progress == 0) createTimer(spinner);
		} else {
			n++;
			setTimeout(() => spinner.load(), n * 250);
		}
	});

	// ----------------------------------------
	// Attach event listener for toggle button.
	//
	document.addEventListener('click', (event) => {
		if (event.target && event.target.matches('[data-spinner-toggle]')) {
			if (event.target.dataset.spinnerToggle === 'inline') {
				brikcss.spinner.toggle('inline1');
				brikcss.spinner.toggle('inline2');
			} else {
				brikcss.spinner.toggle(event.target.dataset.spinnerToggle);
			}
		}
	});

	// -----------------------------------------------
	// Attach event listener for determinate progress.
	//
	const progressInput = document.querySelector('#set-progress__input');
	progressInput.addEventListener('change', () => {
		brikcss.spinner.all['determinate-static'].setProgress(progressInput.value);
	});

	// --------------------------------------------
	// Set up mock loader for determinate spinners.
	//
	function createTimer(spinner) {
		timers[spinner.id] = setInterval(function() {
			if (spinner.progress >= 100) {
				clearInterval(timers[spinner.id]);
				return setTimeout(function() {
					spinner.setProgress(0);
					setTimeout(function() {
						createTimer(spinner);
					}, 750);
				}, 3000);
			} else {
				spinner.setProgress(
					Math.min(
						spinner.progress + loadRandomValue(Math.floor(Math.random() * 10) + 1),
						100
					)
				);
			}
		}, 200);
	}

	function loadRandomValue(number) {
		const randomBoolean = Math.random() >= 0.5;
		if (randomBoolean) {
			// Return number between 1 and `number`.
			return Math.floor(Math.random() * number) + 1;
		}
		return 0;
	}
})();
