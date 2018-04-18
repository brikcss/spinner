const isProd = process.env.NODE_ENV === 'production';
const profiles = {
	css: {
		source: ['src/sass/_spinner.abstract.scss', 'src/sass/spinner.init.scss'],
		output: './dist/css/spinner.css',
		bundlers: [
			{ run: '@brikcss/sass', options: { sourceMap: false } },
			{
				run: '@brikcss/postcss',
				options: {
					map: false
				},
				plugins: [
					require('autoprefixer')({
						browsers: ['last 2 versions', 'ie 11']
					}),
					require('postcss-reporter')()
				]
			}
		]
	}
};

if (isProd) {
	// Add minified css bundle.
	profiles.css_min = JSON.parse(JSON.stringify(profiles.css));
	profiles.css_min.output = profiles.css_min.output.replace('.css', '.min.css');
	profiles.css_min.bundlers[1].plugins = [
		require('autoprefixer')({
			browsers: ['last 2 versions', 'ie 11']
		}),
		require('cssnano')(),
		require('postcss-reporter')()
	];

	// Add sass source bundle.
	profiles.sass = {
		source: 'src/sass/**/*',
		output: './dist/sass/',
		cwd: 'src/sass',
		bundlers: ['@brikcss/copy']
	};

	// Add AngularJS source so it can be imported as modules.
	profiles.angularjs = {
		source: 'src/angularjs/*.js',
		output: './dist/angularjs/src/',
		cwd: 'src/angularjs',
		bundlers: ['@brikcss/copy']
	};
}

module.exports = profiles;
