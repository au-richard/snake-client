let connection;

const handleUserInput = /*process.stdin.on("data",*/ (key) => {
  let w = "Move: up";
  let a = "Move: left";
  let s = "Move: down";
  let d = "Move: right";
  let z = "Say: Vroom Vroom Vroom!!!";
  //\u0003  = ctrl + c 
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(w);
  }
  if (key === 'a') {
    connection.write(a);
  }
  if (key === 's') {
    connection.write(s);
  }
  if (key === 'd') {
    connection.write(d);
  }
  if (key === z) {
    connection.write(z);
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};



module.exports = { setupInput };