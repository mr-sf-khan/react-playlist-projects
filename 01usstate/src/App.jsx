import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="center">
          <h1>{count}</h1>
          <button onClick={add}> increase</button>
          <br />
          <button onClick={minus}>decrese</button>
        </div>
      </div>
    </>
  );
}

export default App;
