const PouchDB = require("pouchdb");
const pkg = require("../package.json");

const db = new PouchDB(pkg.name, { auto_compaction: true });

module.exports = db;
