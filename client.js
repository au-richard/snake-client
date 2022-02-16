const net = require("net");

const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here, 
    port: 50541// PORT number here,

  });

  conn.on("connect", () => {
    console.log("Connection Successful");
    conn.write("Name: DIY");
  });
  conn.on("data", (data) => {
    console.log(data);
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};





module.exports = connect;

