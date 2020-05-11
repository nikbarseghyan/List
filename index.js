require("dotenv").config();
const compress = require("compression");
const express = require("express");
const port    = process.env.PORT || 3011;

const app = express();

app.use(compress());

app.listen(port , () => console.log("Server is runing "));
