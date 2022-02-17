
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = process.stdin.on("data", (key) => {
  //\u0003  = ctrl + c 
  if (key === '\u0003') {
    process.exit();
  }
  // if (key === )
});

module.exports = setupInput;