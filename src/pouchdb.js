const PouchDB = require("pouchdb");
const pkg = require("../package.json");

const dbName =
  process.env.NODE_ENV === "production" ? pkg.name : `${pkg.name}_test`;

const db = new PouchDB(dbName, { auto_compaction: true });

module.exports = db;
