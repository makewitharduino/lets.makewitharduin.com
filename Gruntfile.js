module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        pkg:{
            path:{
                src: 'src',
                dest: 'dist'
            }
        },
        csslint:{
            options: {
                csslintrc: '.csslintrc'
              },
            strict:{
                options:{
                    import: 2
                },
                src: ['<%= pkg.path.src %>/css/style.css']
            },
            lax:{
                options:{
                    import: false
                },
                src: ['<%= pkg.path.src %>/css/style.css']
            }
        },
        jshint: {
            files: ['<%= pkg.path.src %>/js/init.js'],
            options: {
              jshintrc: '.jshintrc',
              force: true
            }
          },
        cssmin : {
            dist : {
              src : ['<%= pkg.path.src %>/css/materialize.css','<%= pkg.path.src %>/css/style.css'],
              dest : '<%= pkg.path.dest %>/css/all.min.css'
            }
        },
        uglify : {
            build : {
              src : ['<%= pkg.path.src %>/js/materialize.js','<%= pkg.path.src %>/js/init.js'],
              dest : '<%= pkg.path.dest %>/js/all.min.js'
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= pkg.path.src %>',
                        src: [
                            'images/*',
                            'fonts/*/*',
                            'footer.html',
                            'sidenav.html'
                        ],
                        dest: '<%= pkg.path.dest %>/'
                    }
                ],
            },
        },
        clean: {
            build: {
                src: [
                    '<%= pkg.path.dest %>/'
                ]
            }
        },
        htmlbuild: {
            dist: {
                src: [
                    '<%= pkg.path.src %>/index.html',
                    '<%= pkg.path.src %>/getting-started.html',
                    '<%= pkg.path.src %>/sample/**/*.html'
                ],
                dest: '<%= pkg.path.dest %>/',
                options: {
                    basePath: '<%= pkg.path.src %>/',
                    beautify: true,
                    relative: true,
                    prefix: '/',
                    styles: {
                        bundle: [
                            '<%= pkg.path.dest %>/css/*.css',
                            'https://fonts.googleapis.com/icon?family=Material+Icons'
                        ]

                    },
                    scripts: {
                        bundle: [
                            '<%= pkg.path.dest %>/js/*.js',
                        ],
                        jquery: [
                            'https://code.jquery.com/jquery-2.1.1.min.js',
                            'https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'
                        ]
                    }
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                keepalive: true,
                base: '<%= pkg.path.dest %>',
                hostname: 'localhost'
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('build', ['clean', 'cssmin', 'uglify', 'copy', 'htmlbuild']);
    grunt.registerTask('test', ['clean', 'cssmin', 'uglify', 'copy', 'htmlbuild', 'connect']);
}
