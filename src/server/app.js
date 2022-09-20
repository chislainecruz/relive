const express = require("express");
const db = require("./db/pouchdb");
const PouchDB = require("pouchdb");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: `192.168.50.163:${PORT}`, optionsSuccessStatus: 200 }));
app.use("/db", require("express-pouchdb")(PouchDB));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.listen(PORT);
