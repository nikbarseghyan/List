require("dotenv").config();
const compress = require("compression");
const express = require("express");
const port    = process.env.PORT || 3011;
const { stLogger, stHttpLoggerMiddleware, stMonitor  } = require("sematext-agent-express");

const app = express();

// app.use(compress());
// app.use(stHttpLoggerMiddleware);

stMonitor.start();

app.listen(port , () => console.log("Server is runing "));
