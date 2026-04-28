const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
	res.send("Hello my name is Justin ABraham Ipe");
});

app.listen(PORT, () => {
	console.log("Server running");
});
