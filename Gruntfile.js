module.exports = function (grunt) {
    grunt.initConfig({
        scsslint: {
            allFiles: [
                'scss/*.scss',
            ],
            options: {
                bundleExec: true,
                config: '.scss-lint.yml',
                reporterOutput: 'scss-lint-report.xml',
                colorizeOutput: true
            },
        }
    });

    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.registerTask('default', ['scsslint']);
};