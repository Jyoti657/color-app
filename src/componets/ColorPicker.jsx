import { useState } from "react";
import DisplayColor from "./DisplayColor";

export default function ColorPicker() {
  const [color, setColor] = useState("pink");

  function handleColorChange(newColor) {
    setColor(newColor);
  }
  return (
    <>
      <h1>Color Picker</h1>

      <div className="select-bar">
        <div className="btn-bar">
          <button
            className="btn"
            style={{ backgroundColor: "pink" }}
            onClick={() => handleColorChange("pink")}
          >
            pink
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChange("red")}
          >
            Red
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "white" }}
            onClick={() => handleColorChange("white")}
          >
            White
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChange("blue")}
          >
            Blue
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "black" }}
            onClick={() => handleColorChange("black")}
          >
            Balck
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "green" }}
            onClick={() => handleColorChange("green")}
          >
            Green
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleColorChange("yellow")}
          >
            yellow
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "grey" }}
            onClick={() => handleColorChange("grey")}
          >
            grey
          </button>
        </div>
      </div>
      <DisplayColor color={color} />
    </>
  );
}
