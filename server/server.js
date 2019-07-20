const express = require('express');
const body_parser = require("body-parser");
const path = require('path');

const publicPath = path.join(__dirname, '../public');

let app = express();

app.use(express.static(publicPath));
app.use(body_parser.json());

app.post('/', (req, res) => {
	console.log("[REQUEST]: " + req.body.messege.toString());
	res.writeHead(200, {"Content-type": "applicaiton/json"});
	res.write("{\"messege\": \"Hello World!\"}");
	res.send();
});

app.listen(3000, '127.0.0.1');

console.log("Running! on localhost:3000");
