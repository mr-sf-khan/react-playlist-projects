import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  return (
    <div>
      <button className="bg-red-700 text-white font-bold py-2 px-40 rounded">
        Click me
      </button>
      <Card name="hello" id="solder1" />
      <Card name="bravo" id="solder2" />
      <Card name="hey there" id="solder3" />
      <Card name="whats up" id="solder4" />
    </div>
  );
}

export default App;
