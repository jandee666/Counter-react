import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Dagdagi</button>
      <button onClick={() => setCount(count - 1)}>Bawasi</button>
      <button onClick={() => setCount(0)}>Reseti</button>
      <br />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <p>Message: {message}</p>
      {count >= 5 && <p>Woops! tama na, masama ang nakikipag away!</p>}
    </div>
  );
}

export default App;