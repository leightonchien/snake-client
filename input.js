// Stores the active TCP connection object.
let connection;

function setupInput(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.on("data", handleUserInput);
    stdin.on("data", movementInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  }
  
  function handleUserInput(key) {
    if (key === "\u0003") {
        
      process.exit();
    }
  }
  

  function movementInput(key) {
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
  }
  
  // setupInput();
  module.exports = { connection };
  module.exports = { setupInput };