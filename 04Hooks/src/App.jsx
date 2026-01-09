import "./App.css";
import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // using usereff

  const passRef = useRef();

  const copyToClipboard = useCallback(() => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-mg bg-gray-600 rounded-lg px-4 py-3 my-8 text-red-400 text-center ">
        <h1 className="text-white text-center my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 bg-white text-black">
          <input
            type="text"
            className="w-full outline-none px-3 py-2 "
            value={password}
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white px-2 py-0.5 shrink-0 rounded-r-lg onClick:bg-blue-600">
            Click
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="8"
              max="30"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>lenght : {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label> number </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label> Character </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
