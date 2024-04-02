import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fixMessage, setFixMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendFixMessage = async () => {
    const res = await axios.post('http://localhost:5000/send-fix', { fixMessage });
    setResponse(res.data.response);
  };

  return (
    <div className="App">
      <h1>FIX 4.2 Simulator</h1>
      <textarea value={fixMessage} onChange={(e) => setFixMessage(e.target.value)} />
      <button onClick={sendFixMessage}>Send FIX Message</button>
      <div>{response}</div>
    </div>
  );
}

export default App;
