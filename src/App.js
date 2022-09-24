import React, { useState } from "react";
import Images from "./Images";
import "./style.css";

function App() {
  const [img, setImg] = useState(Images[2]);

  return (
    <div className="App">
      <div className="container">
        <img src={img} alt="imgSelected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((image, index) => (
          <img
            src={image}
            alt="img"
            key={index}
            onClick={() => setImg(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
