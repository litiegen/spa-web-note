/* global module: true */
module.exports = function (grunt) {
	grunt.initConfig({
		htmlhint: {
			options: {
			  htmlhintrc: '.htmlhintrc'
			},
			src: '*.html'
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			src: '*.css'
		},
		eslint: {
			options: {
				configFile: '.eslintrc.json'
			},
			target: './js/*.js'
		},
		htmlmin: {
			options: {
				collapseWhitespace: true,
				preserveLineBreaks: false
			},
			files: {
				src: 'dist/index.html',
				dest: 'dist/index.html'
			}
		},
		imagemin: {
			files: {
				expand: true,
				src: ['./images/*.png'],
				dest: 'dist/'
			}
		},
		copy: {
			html: {
				src: './index.html',
				dest: './dist/index.html'
			}
		},
		concat: {
			js: {
				src: ['js/*.js'],
				dest: 'dist/index.js'
			},
			css: {
				src: ['css/*.css'],
				dest: 'dist/index.css'
			}
		},
		uglify: {
			'dist/bundle.min.js': 'dist/index.js'
		},
		cssmin: {
			'dist/bundle.min.css': 'dist/index.css'
		},
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist'
			}
		},
		usemin: {
			html: ['dist/index.html']
		},
		clean: {
			end: ['dist/index.css', 'dist/index.js', '.tmp']
		}
	});
	grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
	grunt.registerTask('default', ['copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin', 'imagemin', 'clean:end']);
};