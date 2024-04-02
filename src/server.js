const express = require('express');
const bodyParser = require('body-parser');
const fixparser = require('fixparser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/send-fix', (req, res) => {
  const fixMessage = req.body.fixMessage;
  // Process and simulate response for the FIX message
  const response = simulateFixMessage(fixMessage);
  res.json({ response });
});

function simulateFixMessage(fixMessage) {
  // Simulate processing and response based on the FIX message
  // Replace this with your actual simulation logic
  return `Received FIX message: ${fixMessage}`;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
