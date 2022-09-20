const express = require("express");
const db = require("./db/pouchdb");

const router = express.Router();

router.get("/posts", async (req, res, next) => {
  try {
    const allDocs = await db.allDocs({ include_docs: true });
    res.send(allDocs);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found");
  err.status = 404;
  next(err);
});

module.exports = router;
