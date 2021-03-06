const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP, // IP address here, 
    port: PORT // PORT number here,

  });

  conn.on("connect", () => {
    console.log("Connection Successful");
    conn.write("Name: DIY");
    //Moving snake at set duration using setTimeOut
    // for (let i = 0; i < 100; i++) {
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, 500 * i);
    // }
  });
  conn.on("data", (data) => {
    console.log(data);
  });

  // conn.on("moveUp", () => {
  //   "Move: up";
  // });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};

module.exports = { connect };

