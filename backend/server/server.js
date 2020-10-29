const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");
const { json } = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../../frontend")));


//Server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});