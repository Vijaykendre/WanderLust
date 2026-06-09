// const mongoose = require("mongoose");
// const Listing = require("../models/listing.js");
// const Initdata = require("./data.js");

// const MongoURL = "mongodb://127.0.0.1:27017/Wanderlustdb";

// async function initdb() {
    
//     const inserted = await Listing.insertMany(Initdata.data);
//     console.log(`Data is initialized (${inserted.length} listings inserted)`);
// }

// async function main() {
//     await mongoose.connect(MongoURL);
//     console.log("Connected to the database");
//     await initdb();
// }

// main().catch(err => {
//     console.error("Database initialization failed:", err);
//     process.exit(1);
// });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();