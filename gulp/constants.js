export const DESTINATION = {
    CSS: 'main.css',
    DIRECTORY: 'dist/',
    JAVASCRIPT: 'main.js',
    SERVICE_CLIENT_JAVASCRIPT: 'service-client.js',
    VENDOR_CSS: 'vendor.css'
};

export const SOURCE = {
    CSS: 'src/**/*.css',
    HTML: 'src/*.html',
    JAVASCRIPT: 'src/js/index.js',
    SASS: 'src/scss/base.scss',
    SERVICE_CLIENT_JAVASCRIPT: 'src/js/service-client/index.js',
    STATIC: [
        'src/**/*.ico',
        'src/**/*.jpg',
        'src/**/*.png',
        'src/**/*.svg'
    ]
};

export const TARGET_BROWSERS = {
    browsers: [
        'last 2 major versions',
        'ie 11'
    ]
};

export const TASKS = {
    BUILD: 'build',
    CSS: 'css',
    DEFAULT: 'default',
    HTML: 'html',
    SASS: 'sass',
    SERVICE_CLIENT: 'service-client',
    STATIC: 'static',
    WATCH: 'watch',
    WEBPACK: 'webpack'
};

export const WATCH_FILES = {
    JAVASCRIPT: 'src/**/*.js',
    SASS: 'src/**/*.scss'
};