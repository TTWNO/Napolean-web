const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

let app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
	console.log("[REQUEST]: " + req);
});

app.listen(3000, '127.0.0.1');

console.log("Running! on localhost:3000");
