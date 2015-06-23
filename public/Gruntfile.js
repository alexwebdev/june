'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
          path: 'D:/projects/june'
      },
      connect: {
        server: {
          options: {
            port: '9000',
            base: 'D:/projects/june'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default',['connect']);
}