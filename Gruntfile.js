module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'css/*',
                            'js/*',
                            'images/*',
                            'fonts/*/*',
                            'footer.html',
                            'sidenav.html'
                        ],
                        dest: 'dist/'
                    },
                ],
            },
        },
        clean: {
            build: {
                src: [
                    'dist'
                ]
            }
        },
        htmlbuild: {
            dist: {
                src: [
                    'src/index.html',
                    'src/getting-started.html',
                    'src/sample/**/*.html'
                ],
                dest: 'dist/',
                options: {
                    basePath: 'src/',
                    beautify: true,
                    relative: true,
                    prefix: '/',
                    styles: {
                        bundle: [
                            'dist/css/*.css',
                            'https://fonts.googleapis.com/icon?family=Material+Icons'
                        ]

                    },
                    scripts: {
                        bundle: 'dist/js/*.js',
                        jquery: 'https://code.jquery.com/jquery-2.1.1.min.js',
                    }
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                keepalive: true,
                base: 'dist',
                hostname: 'localhost'
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['clean', 'copy', 'htmlbuild']);
    grunt.registerTask('test', ['clean', 'copy', 'htmlbuild', 'connect']);
}
