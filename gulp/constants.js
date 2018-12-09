export const CACHE_BUST_OPTIONS = { type: 'timestamp' };

export const DESTINATION = {
    CSS: 'main.css',
    DIRECTORY: 'dist/',
    JAVASCRIPT: 'main.js',
    SERVICE_CLIENT_JAVASCRIPT: 'service-client.js',
    VENDOR_CSS: 'vendor.css'
};

export const SOURCE = {
    CSS: 'client/**/*.css',
    HTML: 'client/*.html',
    JAVASCRIPT: 'client/js/index.js',
    SASS: 'client/scss/base.scss',
    SERVICE_CLIENT_JAVASCRIPT: 'client/js/service-client/index.js',
    STATIC: [
        'client/**/*.ico',
        'client/**/*.jpg',
        'client/**/*.png',
        'client/**/*.svg'
    ]
};

export const TARGET_BROWSERS = {
    browsers: [
        'last 2 major versions',
        'ie 11'
    ]
};

export const TASK_TYPES = {
    JAVASCRIPT: 'JAVASCRIPT',
    SERVICE_CLIENT_JAVASCRIPT: 'SERVICE_CLIENT_JAVASCRIPT'
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
    JAVASCRIPT: 'client/**/*.js',
    SASS: 'client/**/*.scss'
};
