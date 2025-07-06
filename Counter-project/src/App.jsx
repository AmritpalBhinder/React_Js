import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [Counter, setCounter] = useState(0);

  const handleCounter = (type) => {
    type == "INCREMENT"
      ? Counter < 20
        ? setCounter(Counter + 1)
        : setCounter(Counter)
      : Counter > 0
      ? setCounter(Counter - 1)
      : setCounter(Counter);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <button onClick={() => handleCounter("INCREMENT")}>+</button>
      <span>{Counter}</span>
      <button onClick={() => handleCounter("DECREMENT")}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App
