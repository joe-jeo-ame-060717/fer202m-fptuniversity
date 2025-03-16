import React from "react";

const array = ["Flutter", "Vue", "React", "Next"];
const object = {
  Flutter: 1, // Sửa lỗi chính tả từ "Fluter" thành "Flutter"
  Vue: 2,
  React: 3,
  Next: 4,
};

const App = () => {
  return (
    <section>
      <h2>Array</h2>
      <ul>
        {array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h2>Object</h2>
      <ul>
        {Object.keys(object).map(
          (
            i // Thêm object vào Object.keys()
          ) => (
            <li key={i}>
              {i}: {object[i]}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default App;
