// const express = require("express");
// const bodyParser = require("body-parser");
// const dialogflow = require("@google-cloud/dialogflow");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const PROJECT_ID = "legalchatbot-xiaa"; // Change this to your project ID
// const SESSION_ID = "123456";

// // Load service account key
// const CREDENTIALS = JSON.parse(
//   fs.readFileSync("service-account.json")
// );

// const CONFIGURATION = {
//   credentials: {
//     private_key: CREDENTIALS.private_key,
//     client_email: CREDENTIALS.client_email,
//   },
// };

// const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

// app.post("/send-message", async (req, res) => {
//   try {
//     console.log("Received request:", req.body);

//     if (!req.body.message || !req.body.sessionId) {
//       return res.status(400).json({ error: "Missing parameters!" });
//     }

//     const sessionPath = sessionClient.projectAgentSessionPath(
//       PROJECT_ID,
//       req.body.sessionId
//     );

//     const request = {
//       session: sessionPath,
//       queryInput: {
//         text: {
//           text: req.body.message,
//           languageCode: "en",
//         },
//       },
//     };

//     const responses = await sessionClient.detectIntent(request);
//     const result = responses[0].queryResult;

//     console.log("Dialogflow Response:", result.fulfillmentText);

//     res.json({ reply: result.fulfillmentText });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const API_TOKEN = "61b8b7f9d750496a80c2c683a8c220a65ca404d5"; // Replace with actual token

// Handle search requests
app.post("/search-case-law", async (req, res) => {
  try {
    console.log("Received request:", req.body);

    if (!req.body.query) {
      return res.status(400).json({ error: "Missing search query!" });
    }

    const query = encodeURIComponent(req.body.query);
    const url = `https://api.indiankanoon.org/search/?formInput=${query}`;

    console.log(`Fetching case laws from: ${url}`);

    // Call Indian Kanoon API
    const apiResponse = await axios.get(url, {
      headers: { Authorization: `Token ${API_TOKEN}` },
    });

    if (apiResponse.data) {
      return res.json({ results: apiResponse.data });
    } else {
      return res.json({ message: "No relevant case laws found." });
    }
  } catch (error) {
    console.error("Error fetching case laws:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
