module.exports = function(grunt) {
    grunt.initConfig({
        wiredep: {

          task: {

            // Point to the files that should be updated when
            // you run `grunt wiredep`
            src: [
              '*.html',   // .html support...
            ],

            options: {
              // See wiredep's configuration documentation for the options
              // you may pass:

              // https://github.com/taptapship/wiredep#configuration
            }
          }
        }
    });

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Starting Grunt CLI').ok();
    });

    grunt.loadNpmTasks('grunt-wiredep');
};
