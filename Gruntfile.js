module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			},
			html: {
				files: 'wp-content/themes/roots/**/*.php',
				tasks: [],
				options: {
					livereload: 1337
				}
			},
			cssfiles: {
				files: 'wp-content/themes/roots/**/*.css',
				tasks: [],
				options: {
					livereload: 1337
				}
			},
			jsfiles: {
				files: 'wp-content/themes/roots/assets/js//**/*.js',
				tasks: [],
				options: {
					livereload: 1337
				}
			},
			js: {
				files: 'src/**/*.js',
				tasks: ['uglify']
			}
		},
		uglify: {
			dist: {
				files: {
					'wp-content/themes/roots/assets/js/scripts.js': [
						'src/js/plugins/bootstrap/transition.js',
						'src/js/plugins/bootstrap/alert.js',
						'src/js/plugins/bootstrap/button.js',
						'src/js/plugins/bootstrap/carousel.js',
						'src/js/plugins/bootstrap/collapse.js',
						'src/js/plugins/bootstrap/dropdown.js',
						'src/js/plugins/bootstrap/modal.js',
						'src/js/plugins/bootstrap/tooltip.js',
						'src/js/plugins/bootstrap/popover.js',
						'src/js/plugins/bootstrap/scrollspy.js',
						'src/js/plugins/bootstrap/tab.js',
						'src/js/plugins/bootstrap/affix.js',
						'src/js/plugins/*.js',
						'src/js/_*.js',
						'src/js/partials/*.js'
					]
				},
				options: {
					//JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
					sourceMap: 'wp-content/themes/roots/assets/js/scripts.js.map',
					sourceMappingURL: '/wp-content/themes/roots/assets/js/scripts.js.map'
				}
			}
		},
		sass: {
			compile: {
				options: {
					sourcemap: true
				},
				files: {
					'wp-content/themes/roots/assets/css/main.css': 'src/sass/main.scss'
				}

			}
		}
	});
	//load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', ['watch']);
};