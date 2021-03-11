// Stores the active TCP connection object.
let connection;

function setupInput(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.on("data", handleUserInput);
    stdin.on("data", movementInput);
    stdin.on("data", sendMessage);
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

  function sendMessage(key) {
    if (key === "j") {
      connection.write("Say: SSSSUP");
    }
    if (key === "k") {
      connection.write("Say: NICEEE");
    }
    if (key === "l") {
      connection.write("Say: HISSSS");
    }
  }
  
  
  // setupInput();
  module.exports = { connection };
  module.exports = { setupInput };