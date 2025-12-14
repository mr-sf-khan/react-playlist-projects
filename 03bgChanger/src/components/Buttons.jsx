import React from "react";

const Buttons = ({ setcolor }) => {
  return (
    <div className=" flex items-center justify-between border border-black gap-10  px-20 py-5 rounded-xl absolute bottom-0 bg-black-500 mb-5">
      <button
        style={{ backgroundColor: "red" }}
        className=" bg-black border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("red")}>
        Red
      </button>

      <button
        style={{ backgroundColor: "green" }}
        className="border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("green")}>
        green
      </button>

      <button
        style={{ backgroundColor: "blue" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("blue")}>
        blue
      </button>

      <button
        style={{ backgroundColor: "orange" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("orange")}>
        orange
      </button>

      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderColor: "white",
        }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("black")}
        onDoubleClick={() => setcolor("white")}>
        black
      </button>

      <button
        style={{ backgroundColor: "pink" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("pink")}>
        pink
      </button>

      <button
        style={{ backgroundColor: "purple" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("purple")}>
        purple
      </button>

      <button
        style={{ backgroundColor: "gray" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("gray")}>
        gray
      </button>

      <button
        style={{ backgroundColor: "magenta" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("magenta")}>
        magenta
      </button>

      <button
        style={{ backgroundColor: "indigo" }}
        className=" border border-black px-5 py-2 rounded-xl"
        onClick={() => setcolor("indigo")}>
        indigo
      </button>
    </div>
  );
};

export default Buttons;
