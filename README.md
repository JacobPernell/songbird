# MIDIwebapp
Web-based MIDI piano roll editor for quick music sketches

### Basic setup
Start the server by doing the following:

1.  Install [node](https://nodejs.org/en/download/)
2.  Install [mongodb](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
    * If you have issues installing mongo, try the steps found [here](https://github.com/Homebrew/brew/issues/3228#issuecomment-332679274)
3.  `npm install`
4.  Create a `db` directory
5.  `npm run mongo`
    * This always needs to happen before the server is run
6.  `npm run gulp`
    * This builds the front end
7.  `npm run server`

If you'd like to use a specific port, use the `PORT` environmental variable.

`PORT=5000 npm run server` or if you're using fish `env PORT=5000 npm run server`

### Build
If you want to run gulp, use `npm run gulp`.

### Linting code
To lint, use the command `npm run lint`.  This will lint the JavaScript in your .js and .html files.  It should also lint your .scss.

### Testing
To create tests, make `*.test.js` files.  For example, `modal.test.js`.  `Jest` will automatically test files with the `.test.js` extension when run.

To run unit tests, use the `npm run test` command.  Pass/fails should be visible on the command line.

### Working on serverside code
`nodemon` is installed and will refresh on updates to back end code.  To use `nodemon`, run `npm run nodemon`.