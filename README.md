📌 Mongoose Model and Schema Example

🎯 Project Overview

Hey there! 👋 This project is all about using Mongoose to work with MongoDB in a simple and structured way. If you're looking to learn how to set up a schema, create a model, and interact with a database, you're in the right place! 🚀

🛠️ Prerequisites

Before you dive in, make sure you have:

Node.js installed (v14+ recommended)

MongoDB (either running locally or using a cloud service like MongoDB Atlas)

Mongoose installed (we’ll cover this below)

📥 Installation

Clone this repo and install the required dependencies:

npm install mongoose

🏗️ Setting Up the Student Model

Here’s how you define a Student model using Mongoose:

import { model, Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = model("student", studentSchema);

export { Student };

🧐 What’s Happening Here?

We import Mongoose and grab Schema and model.

We define a schema (studentSchema) with name, email, and phone fields, all required.

We enable timestamps so MongoDB automatically adds createdAt and updatedAt fields.

We create the Student model using model("student", studentSchema).

Finally, we export the model so it can be used elsewhere in our project.

🚀 Using the Model

Now, let’s see how we can actually use this Student model to interact with MongoDB.

🔌 Connecting to MongoDB

import mongoose from "mongoose";
import { Student } from "./studentModel.js";

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("🎉 Connected to MongoDB!"))
.catch(err => console.error("❌ Connection error:", err));

📝 Creating a New Student

const newStudent = new Student({
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "1234567890",
});

newStudent.save()
  .then(() => console.log("✅ Student saved successfully!"))
  .catch(err => console.error("❌ Error saving student:", err));

▶️ Running the Project

Make sure your MongoDB instance is up and running, then execute:

node index.js

📜 License

This project is open-source under the MIT License. Feel free to contribute and improve it! 😊

