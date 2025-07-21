import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ImageComponent
        src="https://placecats.com/300/300"
        alt="Immagine di gattini"
      />
      <ImageComponent
        src="https://placebear.com/300/300"
        alt="Immagine di orsacchiotti"
      />
      <ButtonComponent
        animal="cats"
        testo="Clicca qui per vedere dei gattini!"
      />
      <ButtonComponent
        animal="bear"
        testo="Premi qui se preferisci vedere degli orsetti!"
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
