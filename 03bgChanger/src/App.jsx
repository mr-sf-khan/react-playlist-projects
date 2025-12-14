import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div
      className=" h-screen w-full duration-200 relative "
      style={{ backgroundColor: color }}>
      <div className=" flex items-center justify-center ">
        <Buttons setcolor={setcolor} />
      </div>
    </div>
  );
}

export default App;
