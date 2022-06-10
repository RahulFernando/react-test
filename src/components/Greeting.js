import React, { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);

  const changeTextHandler = () => {
    setText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!text && <p>It's good to see you!</p>}
      {text && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change</button>
    </div>
  );
};

export default Greeting;
