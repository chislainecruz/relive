const express = require("express");
const db = require("./db/pouchdb");
const log = require("npmlog");

log.enableColor();
const router = express.Router();

router.get("/posts", async (req, res, next) => {
  try {
    const allDocs = await db.allDocs({ include_docs: true });
    log.info("Sending all posts, total: ", allDocs.total_rows);
    res.status(200).send(allDocs);
  } catch (err) {
    log.error("An error occurred when fetching all posts", err);
    next(err);
  }
});

router.get("/posts/:id", async (req, res, next) => {
  try {
    const doc = await db.get(req.params.id);
    log.info("Sending post", req.params.id);
    res.status(200).send(doc);
  } catch (err) {
    log.error(`An error occurred when fetching post ${req.params.id}`, err);
    res.status(404).send(`Post not found with id ${req.params.id}`);
  }
});

router.put("/posts/:id", async (req, res, next) => {
  try {
    const doc = await db.get(req.params.id);

    for (let key in req.body) {
      doc[key] = req.body[key];
    }
    await db.put(doc);
    log.info("Successfully updated post", req.params.id);
    const updatedDoc = await db.get(req.params.id);
    res.status(200).send(updatedDoc);
  } catch (err) {
    log.error(`An error occurred when updating post ${req.params.id}`, err);
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found");
  log.error("Not a valid api route");
  err.status = 404;
  next(err);
});

module.exports = router;
