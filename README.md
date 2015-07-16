# Relay: Sync

Node-based live chat application that interacts with [Relay: Async](http://github.com/AeroCross/relay-async).

**Not production ready.**

### Installation

1. Clone the repository.
2. Update the `app.js` file, line 50, with the correct route to your Relay: Async application.
2. Run `npm install` to install all needed packages.
2. Run `node app.js` to run the application.

The default port is 8080. Make sure it is open or configure it in the `app.js` file.

### Packages used

- Socket.io
- Express.io
- Gravatar

### Credits

Heavily-based on the Live Chat application based on Node by [Tutorialzine](http://tutorialzine.com/2014/03/nodejs-private-webchat/) — modified to fit my needs. All credit goes to them. [See license](http://tutorialzine.com/license/).
