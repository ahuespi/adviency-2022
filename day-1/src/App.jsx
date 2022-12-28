import { useState } from "react";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([
    "Sandalias",
    "Buzo de Harry potter",
    "Auriculares",
  ]);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline mb-10">Regalos:</h1>
      <ul>
        {gifs.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
