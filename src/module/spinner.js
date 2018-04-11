// ------
// Setup.
//
const cache = {
	id: 0,
	defaults: {
		base: 'spinner',
		mods: [], // 'active'|'determinate'|'small'|'large'|'inline'|'dressed'|'multicolor'|'absolute'|'slide'
		progress: 0,
		progressAttribute: 'progress',
		animation: 250 // Duration (ms) of animation from inactive to active.
	},
	mods: {
		active: '--is-spinning'
	},
	class: (mod, options = {}) => options.base + (cache.mods[mod] || '--' + mod)
};

// -----------------------
// Create Spinner service.
//
const Spinners = {
	all: {},
	create,
	toggle,
	load,
	unload,
	setProgress,
	destroy
};

// ----------------------
// Create spinner method.
//
function create(element, options = {}) {
	options = Object.assign({}, cache.defaults, options);

	// ----------------------
	// Create spinner object.
	//
	const spinner = {};
	spinner.id = options.id || cache.id++;
	spinner.element = element;
	spinner.base = options.base;
	options.mods.forEach((mod) => (spinner[mod] = true));
	spinner.active = options.mods.indexOf('active') > -1;

	// --------------------------------------------------
	// Override any settings based on certain conditions.
	//
	if (
		options.mods.indexOf('determinate') > -1 ||
		spinner.element.dataset[options.progressAttribute]
	) {
		spinner.determinate = true;
	}

	// -------------------------
	// Create the spinner's DOM.
	//
	// Hide by default if it's not determinate.
	if (!spinner.determinate) spinner.element.style.display = 'none';
	// Get outer element.
	spinner.element.classList.add(options.base);
	spinner.element.dataset.spinnerId = spinner.id;
	spinner.element.setAttribute('role', 'progressbar');
	// Create DOM for track.
	spinner.track = document.createElement('span');
	spinner.track.classList.add(options.base + '__track');
	spinner.track.innerHTML = `<span class="${options.base}__left"></span> <span class="${
		options.base
	}__right"></span>`;
	// Add classes for each mod.
	if (options.mods && options.mods.length) {
		options.mods.forEach((mod) => {
			if (mod === 'active') return;
			spinner.element.classList.add(cache.class(mod, options));
		});
	}

	// ---------------
	// Attach methods.
	//
	if (spinner.determinate) {
		spinner.progress =
			options.progress || spinner.element.dataset[options.progressAttribute] || 0;
		spinner.progressElement = spinner.element.querySelector('.' + options.base + '__progress');
		spinner.setProgress = (progress) => {
			spinner.progress = progress;
			if (spinner.progressElement) spinner.progressElement.textContent = progress + '%';
			return (spinner.element.dataset.progress = progress);
		};
		spinner.setProgress(spinner.progress);
	}
	spinner.toggle = () => {
		if (spinner.element.classList.contains(cache.class('active', options))) {
			return spinner.unload();
		} else {
			return spinner.load();
		}
	};
	spinner.load = () => {
		if (!spinner.determinate) spinner.element.style.display = '';
		setTimeout(() => spinner.element.classList.add(cache.class('active', options)), 10);
		return spinner;
	};
	spinner.unload = () => {
		spinner.element.classList.remove(cache.class('active', options));
		if (!spinner.determinate) {
			setTimeout(() => (spinner.element.style.display = 'none'), options.animation + 10);
		}
		return spinner;
	};
	spinner.destroy = () => {
		delete spinner.element.dataset.spinnerId;
		spinner.toggle = undefined;
		spinner.load = undefined;
		spinner.unload = undefined;
		spinner.element.removeChild(spinner.track);
		return true;
	};

	// ---------------
	// Create spinner.
	//
	Spinners.all[spinner.id] = spinner;
	spinner.element.appendChild(spinner.track);
	if (spinner.active) spinner.load();

	// ---------------
	// Return spinner.
	//
	return spinner;
}

// ------------------------
// Spinner service methods.
//
function toggle(id) {
	return Spinners.all[id].toggle();
}

function load(id) {
	return Spinners.all[id].load();
}

function unload(id) {
	return Spinners.all[id].unload();
}

function setProgress(id) {
	return Spinners.all[id].setProgress();
}

function destroy(id) {
	if (id === 'all') {
		return Object.keys(Spinners.all).forEach(destroy);
	}
	return Spinners.all[id].destroy();
}

// -----------------------
// Export Spinner service.
//
export default Spinners;
