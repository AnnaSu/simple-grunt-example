module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
            options: {
                '-W033': true,
                globals: {
                    exports: true
                }
            },
            pre: ['src/*.js'],
            after: ['build/*.js'],
        },

    watch: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
    });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint','watch']);

};