const express = require('express');
const body_parser = require("body-parser");
const exec = require('child_process').execSync;
const path = require('path');

const publicPath = path.join(__dirname, '../public');

let app = express();

app.use(express.static(publicPath));
app.use(body_parser.json());

app.post('/', (req, res) => {
	console.log("[REQUEST]: " + req.body.message.toString());
	try {
		console.log("\t[COMMAND]: " + req.body.command.toString());
		exec(req.body.command.toString());
		console.log("\tCommand executed!");
	} catch (e) {
		console.log(e);
	}
	res.writeHead(200, {"Content-type": "applicaiton/json"});
	res.write("{\"message\": \"Hello World!\"}");
	res.send();
});

app.listen(3000, '127.0.0.1');

console.log("Running! on localhost:3000");
