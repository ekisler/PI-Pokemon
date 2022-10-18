const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pokemon = require("./routes/pokemon.js");
const type = require("./routes/type.js");
const cors = require("cors");
const errorHandler = require("./utils/middlewares/errorHandler.js")
const { CORS_URL } = process.env;
require("./db.js");

const server = express();

server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_URL); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})




server.use(errorHandler)
server.use("/", pokemon);
server.use("/", type);

module.exports = server;
