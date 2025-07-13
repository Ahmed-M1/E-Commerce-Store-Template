// Load environment variables
import "./loadEnvironment.js";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import database from "./database/conn.js";
import cors from "cors";

const PORT = 8000;
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET requests
app.get("/", (req, res) => {
  axios.get("https://fakestoreapi.com/products").then(function (products) {
    res.json(products.data);
  });
});

app.get("/:category", (req, res) => {
  const { category } = req.params;
  const existingCategories = {
    Men: "Men's Clothing",
    Women: "Women's Clothing",
    Jewelery: "Jewelery",
  };
  const cleaned_Category = existingCategories[category];
  if (!cleaned_Category) {
    return res.status(400).json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }

  axios.get("https://fakestoreapi.com/products").then(function (products) {
    res.json(
      products.data.filter(
        (product) =>
          product.category.toLowerCase() == cleaned_Category.toLowerCase()
      )
    );
  });
});

//POST
app.post("/user/signup", async (req, res) => {
  const users_collection = database.collection("users");
  const data = req.body;
  console.log(data);
  try {
    const result = await users_collection.insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.end("Successfully Added");
  } catch {
    res.end("An Error Occured!");
  }
});

// //POST
// app.post("/user/login", async (req, res) => {
//   const users_collection = database.collection("users");
//   const data = req.body;
//   const result = await users_collection.insertOne(data);
//   console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   res.end("Successfully Added");
// });

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});

app.listen(PORT, () => {
  console.log("Server running!");
});
