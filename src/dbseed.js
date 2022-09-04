const db = require("./pouchdb");

const docs = [
  {
    _id: new Date().toJSON(),
    text: "this is a very long text but i am glad today was good!",
    hasImage: false,
    image: null,
    tags: ["happy", "great"],
    date: Date.now(),
  },
  {
    _id: new Date().toJSON(),
    text: "Another note in here",
    hasImage: false,
    image: null,
    tags: ["happy"],
    date: Date.now(),
  },
];

const seed = async () => {
  try {
    await db.bulkDocs(docs);
    console.log("successfully seeded the db");
  } catch (err) {
    console.log("error is ", err);
  }
};

seed();
