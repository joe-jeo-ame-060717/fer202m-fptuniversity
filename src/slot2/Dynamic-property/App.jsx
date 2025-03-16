import React from "react";
const enable = false;
const text = "My Button";
const size = 50;
const placeholder = "please input a value ...";
const App = () => {
  return (
    <section>
      <button enable={!enable}>{text}</button>
      <input placeholder={placeholder} size={50}></input>
    </section>
  );
};
export default App;
