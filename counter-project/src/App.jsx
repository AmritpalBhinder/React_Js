import { useState } from "react";

function App() {
  const [Counter, setCounter] =useState(0);
   
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return (
    <div className="container">
      <div>
        <button  data-testid="minusonebtn" disabled={Counter==0} onClick={()=>setCounter(Counter-1)}>-</button>
        <button data-testid="plusonebtn" onClick={()=>setCounter(Counter+1)}>+</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setCounter(0)}>Reset</button>
      </div>
      </div>
      <span data-testid="counter" ><h1>{Counter}</h1></span>
      <div>
        <span data-testid="odd-or-even">{(Counter%2==0 ?"Even ":"Odd ")}</span>
        <span data-testid="is-prime">{isPrime(Counter)?"Prime":"Not a Prime"}</span> 
      </div>
    </div>
  );

}

export default App;

