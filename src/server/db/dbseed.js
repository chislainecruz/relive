const db = require("./pouchdb");
const moment = require("moment");
const { v1: uuidv1 } = require("uuid");

const docs = [
  {
    _id: uuidv1(),
    image: {
      hasImage: true,
      uri: "file:///var/mobile/Containers/Data/Application/C9050AD1-66AA-4631-B36D-C45DDA1F4BA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Frelive-39e75fa1-129b-4505-ba6b-9c22468945ef/ImagePicker/1F242F78-4490-465E-8B1E-2C662408A046.jpg",
    },
    prompt: "What made you smile today?",
    text: "Research shows that people who are grateful tend to show higher levels of well-being and happiness (in other words, they feel better about themselves and their lives), and improved mental health. They may even sleep better!",
    tags: ["happy", "great", "amazing"],
    date: moment().format("dddd, MMMM DD"),
    time: moment().format("LT"),
  },
  {
    _id: uuidv1(),
    image: {
      hasImage: false,
      uri: null,
    },
    prompt: "What made you laugh today?",
    text: "Expressing gratitude to those who have given us something, whether that is out of the goodness of their hearts or in the line of duty, also helps them to feel good, and improves their self-esteem.",
    tags: ["happy"],
    date: moment().format("dddd, MMMM DD"),
    time: moment().format("LT"),
  },
  {
    _id: uuidv1(),
    image: {
      hasImage: true,
      uri: "file:///Users/chislaine/Library/Developer/CoreSimulator/Devices/D9999F11-5528-45F3-837F-085E80A854C9/data/Containers/Data/Application/18DB6164-564E-4D1A-8B65-A7BB6FE52C73/Library/Caches/ExponentExperienceData/%2540anonymous%252Frelive-39e75fa1-129b-4505-ba6b-9c22468945ef/ImagePicker/CE4918F4-D1BF-4C67-AF7B-69217D71C1E4.jpg",
    },
    prompt: "What made you be thankful?",
    text: "Someone who is grateful is the polar opposite of the person who feels that they are owed something by the world. They have the gift of enjoying and valuing what they have, which makes them rewarding friends and companions.",
    tags: ["thankful", "love"],
    date: moment().format("dddd, MMMM DD"),
    time: moment().format("LT"),
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
