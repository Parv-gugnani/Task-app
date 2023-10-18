// Crud Operations
const { MongoClient } = require("mongodb-legacy");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

async function connectToDatabase() {
  const client = new MongoClient(connectionURL, { useNewUrlParser: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected!!!!!");

    const db = client.db(databaseName);

    // Insert a single document
    const insertResult = await db.collection("users").insertOne({
      name: "Parv",
      age: 18,
    });

    console.log("Inserted single document:", insertResult.insertedId);

    // Insert multiple documents
    const insertManyResult = await db.collection("users").insertMany([
      {
        name: "Jen",
        age: 19,
      },
      {
        name: "Parv",
        age: 18,
      },
    ]);

    console.log("Inserted multiple documents:", insertManyResult.insertedIds);

    //
    //
    //
    //
    db.collection("tasks").insertMany(
      [
        {
          description: "clean the house",
          complete: true,
        },
        {
          description: "renew the description",
          complete: false,
        },
        {
          description: "water the plants",
          complete: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert task!");
        }
        console.log(tasksInsertResult.insertedIds);
      }
    );

    //
    //
    //
    //
    // /
  } catch (error) {
    console.error("Unable to connect to database:", error);
  } finally {
    // Ensure the client is properly closed
    await client.close();
  }
}

// Call the function to connect to the database and perform CRUD operations
connectToDatabase();
