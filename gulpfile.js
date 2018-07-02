var gulp         = require( 'gulp' ),
    sass         = require( 'gulp-ruby-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    cleanCSS     = require( 'gulp-clean-css' ),
    concatCSS    = require( 'gulp-concat-css' ),
    concat       = require( 'gulp-concat' ),
    uglify       = require( 'gulp-uglify' );

var themeName = 'artists-collective',
    jsPath    = themeName + '/assets/js';

gulp.task( 'styles', function() {
    return sass( [ 'assets/scss/**/*', 'assets/scss/*' ] )
        .pipe( cleanCSS() )
        .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'scripts', function() {
    return gulp.src( [ '/assets/js/*' ] )
        .pipe( uglify() )
        .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'watch', function() {
    gulp.watch( '/assets/scss/**/*', [ 'styles' ] );
} );
