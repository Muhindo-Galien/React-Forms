import React, { useState } from "react";

function App() {
  const [name, setName] = useState(" ");
  const [heading, setHeading] = useState(" ");
  function HandleOnchange(event) {
    setName(event.target.value);
  }

  function HandleOnClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={HandleOnClick}>
        <input
          onChange={HandleOnchange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
