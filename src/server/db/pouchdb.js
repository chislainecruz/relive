const PouchDB = require("pouchdb");

const db = new PouchDB("relive", { auto_compaction: true });

module.exports = db;

// const deleteDb = async () => {
//   try {
//     db.destroy();
//     console.log("successfully deleted the db");
//   } catch (err) {
//     console.log("there was an error deleting db: ", err);
//   }
// };

// deleteDb();
