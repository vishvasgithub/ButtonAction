import "./styles.css";
import React, { useState } from 'react';

 function App() {
   const [state, setState] = useState(true);
  return (
    <div className="App">
      <button id="click" onClick={() => setState(false)}>
        clickMe
        </button>
        <p id="para" hidden={state}>
          Heloo, I've learnt to use the full-stack  evaluation tool. This makes me so happy
          </p>
    </div>
  );
}
export default App;