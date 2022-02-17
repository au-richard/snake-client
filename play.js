const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
// connect();
// setupInput();

// let connReturn = connect();

setupInput(connect());

