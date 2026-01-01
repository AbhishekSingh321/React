//Using Use Reducer

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <><h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}

export default Counter;