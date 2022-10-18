const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pokemon = require("./routes/pokemon.js");
const type = require("./routes/type.js");
const cors = require("cors");
const setHeaders = require("./utils/middlewares/setHeaders.js");
const errorHandler = require("./utils/middlewares/errorHandler.js")
require("./db.js");

const server = express();

server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);
server.use(errorHandler)
server.use("/", pokemon);
server.use("/", type);

module.exports = server;
