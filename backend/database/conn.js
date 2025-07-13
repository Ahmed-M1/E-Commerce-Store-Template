import { MongoClient, ServerApiVersion } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
let conn;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server	(optional starting in v4.7)
  conn = await client.connect();
} catch (e) {
  console.error("Unable to connect to DB server!");
  console.error(e);
}

let db = conn.db("decorayte_e_commerce");
console.log("DB Connected");
export default db;
