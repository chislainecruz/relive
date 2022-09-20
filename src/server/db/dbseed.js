const db = require("./pouchdb");
const moment = require("moment");
const { v1: uuidv1 } = require("uuid");

const docs = [
  {
    _id: uuidv1(),
    prompt: "What made you smile today?",
    text: "Research shows that people who are grateful tend to show higher levels of well-being and happiness (in other words, they feel better about themselves and their lives), and improved mental health. They may even sleep better!",
    hasImage: false,
    image: null,
    tags: ["happy", "great", "amazing"],
    date: moment().format("dddd, MMMM DD"),
  },
  {
    _id: uuidv1(),
    prompt: "What made you laugh today?",
    text: "Expressing gratitude to those who have given us something, whether that is out of the goodness of their hearts or in the line of duty, also helps them to feel good, and improves their self-esteem.",
    hasImage: false,
    image: null,
    tags: ["happy"],
    date: moment().format("dddd, MMMM DD"),
  },
  {
    _id: uuidv1(),
    prompt: "What made you be thankful?",
    text: "Someone who is grateful is the polar opposite of the person who feels that they are owed something by the world. They have the gift of enjoying and valuing what they have, which makes them rewarding friends and companions.",
    hasImage: false,
    image: null,
    tags: ["thankful", "love"],
    date: moment().format("dddd, MMMM DD"),
  },
];

const seed = async () => {
  try {
    await db.bulkDocs(docs);
    console.log("successfully seeded the db");
    const info = await db.info();
    console.log(info);
  } catch (err) {
    console.log("there was an error seeding the db: ", err);
  }
};

seed();
