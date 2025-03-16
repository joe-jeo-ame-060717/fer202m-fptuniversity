import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyButton from "./slot2/create-jsx-element/MyButton";
import MyComponent from "./slot2/create-jsx-element/MyComponent";
import MySection from "./slot2/create-jsx-element/MySection";
import reportWebVitals from "./reportWebVitals";
import App2 from "./slot2/Mapping-collections-to-elements/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
