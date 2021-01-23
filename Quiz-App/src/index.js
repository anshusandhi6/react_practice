import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <>
      <h1 className="heading">GOAT quiz app</h1>
      <App />
    </>
  </StrictMode>,
  rootElement
);
