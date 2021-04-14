const http = require("http");
const app = require("./index");

//process.env.PORT = validation, if the port not exist assign a port, in this case 3000
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log("listening port " + port);
