// Crud Operations
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    //
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected!!!!!");

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Parv",
    //     age: 18,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("users").insertMany(
      [
        {
          name: "Jen",
          age: 18,
        },
        {
          name: "Parv",
          age: 18,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert documents!");
        }

        console.log(result.ops);
      }
    );
  }
);

// view
