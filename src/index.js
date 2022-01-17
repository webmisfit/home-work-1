import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import { Profile, Profile2 } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Profile name="Функциональный компонент" date={new Date()} />
    <Profile2 name="Классовый компонент" date={new Date()} />
  </StrictMode>,
  rootElement
);
