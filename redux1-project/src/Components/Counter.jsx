import React from 'react'
import{increment,decrement} from '../Features/Counter/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <br /> <br />
    </div>
  );
}

export default Counter
