const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();

// database
mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.once('open', () => console.log('SUCCESS: CONNECTED TO DB'))
db.on('error', () => console.log("ERROR: Can't connect to DB"))

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));


/**
 * Cors allowed from every domain
 */
app.use(cors());
app.options("*", cors());


/**
 * Public directory for static files
 */
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Combining all routes fom `/routes` folder while adding
 * `/api/v1`
 * 
 * resulting into `BACKEND_BASE_URL/api/v1/MODULE/CONTROLLER_FUNCTION`
 */
app.use("/api/v1", require("../routes"));

module.exports = app;
