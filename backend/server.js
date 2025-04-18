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
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Define the legal context
const legalContext = `You are a legal expert specializing in Indian civil laws. Answer the user's questions accurately based on Indian civil law.`;

app.post("/legal-expert", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Missing message." });
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${legalContext}\nUser's question: ${message}\nLegal Expert:`
              }
            ]
          }
        ]
      }),
    });

    const data = await response.json();

    // Log the response for debugging
    console.log("Gemini API Response:", data);

    if (data && data.candidates && Array.isArray(data.candidates) && data.candidates.length > 0) {
      const reply = data.candidates[0]?.content?.parts?.[0]?.text || "No valid response.";
      return res.json({ reply });
    } else {
      console.error("No valid candidates in Gemini response.");
      return res.status(500).json({ reply: "No valid response from Gemini." });
    }
  } catch (error) {
    console.error("🔥 Gemini API Error:", error);
    return res.status(500).json({ reply: "Server error: could not generate response." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Legal Expert API running on http://localhost:${PORT}`);
});
