const net = require("net");

// Establishes connection with the game server
  
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.69",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.on("connect", () => {
    conn.write("Name: LC");
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };