# Activity Spinner Icon

[![Greenkeeper badge](https://badges.greenkeeper.io/brikcss/spinner.svg)](https://greenkeeper.io/)

> Loading activity spinner icon. Patterned after Material Design's [circular activity indicator](https://material.io/guidelines/components/progress-activity.html#progress-activity-types-of-indicators).

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/spinner">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/spinner.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/spinner">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/spinner.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/spinner/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/spinner">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/031ed8c53a7b401080dbf1a64a69f614/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/spinner?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/spinner/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Environment / tooling support

| Node/CommonJS | CLI | UMD | ESModule | VanillaJS | AngularJS | CSS | SASS |
|:-------------:|:---:|:---:|:--------:|:---------:|:---------:|:---:|:----:|
| ✔             | x   | ✔   | ✔       | ✔         | ✔        | ✔   | ✔   |

## Install

1. Install package:

	```sh
	npm install @brikcss/spinner
	```

2. Include CSS or SASS files from one of:

	```
	/dist
		/css
		/sass
	```

3. Include JS files from one of:

	```
	/dist
		/angularjs
		/commonjs
		/esmodule
		/umd
		/vanillajs
	```

## JS Usage

### Spinner API

- **`all`**: All spinner instances, by ID.
- **`Spinner.create(element, options = {})`**: Create and return a spinner instance.
- **`Spinner.toggle(id)`**: Toggle a spinner instance.
- **`Spinner.load(id)`** Load / activate a spinner instance.
- **`Spinner.unload(id)`** Unload / deactivate a spinner instance.
- **`Spinner.destroy(id)`** Destroy a spinner instance.

_Note: Each method returns the spinner instance, except the `destroy` method returns a Boolean._

### Spinner instance

You can call most of the same methods from the spinner instance without knowing the spinner's ID.

- **`instance.toggle()`**: Toggle a spinner instance.
- **`instance.load()`** Load / activate a spinner instance.
- **`instance.unload()`** Unload / deactivate a spinner instance.
- **`instance.destroy()`** Destroy a spinner instance.

### AngularJS

The AngularJS `SpinnerService` is simply a thin wrapper around the vanilla core Spinner service, with the following directives added for convenience in interacting with Spinner:

- **`<spinner options="{...}">`** Create a spinner element in the DOM.
- **`[spinner-toggle="{{id}}"]`** Toggle the spinner that matches `id`.

To toggle a spinner with a controller variable, use the `ng-class` directive to toggle the active class:

```html
<spinner options="{...}" ng-class="{'spinner--is-spinning': myVariableIsTrue}"></spinner>
```

## CSS Usage

### Classes

- `spinner`: Spinner base class. _Note: This won't show anything in the UI until the spinner has the active class modifier._
- `spinner--is-spinning`: Activate the spinner and show in the UI.
- `spinner--small`: Small spinner.
- `spinner--large`: Large spinner.
- `spinner--inline`: Inline spinner. For display with inline elements such as text or buttons.
- `spinner--multicolor`: Multicolor spinner track.
- `spinner--dressed`: "Dresses" spinner with a background and padding.
- `spinner--clean`: Cleans up background and padding from a dressed spinner.
- `spinner--absolute`: Absolutely positioned spinner.
- `spinner--slide`: Spinner which slides from the top of an element.
