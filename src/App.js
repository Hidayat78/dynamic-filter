import { useState } from "react";
import "./App.css";
function App() {
  const [filter, setFilter] = useState(null);
  const handlefilter = (newfilter) => {
    setFilter(newfilter);
  };
  const resetFilter = () => {
    setFilter(null);
  };
  return (
    <div className="App">
      <div className="iamge3">
        <img src="sky.jpg" style={{ filter }} />
      </div>
      <div className="filter-btn">
        <button
          onMouseEnter={() => handlefilter("none")}
          onMouseLeave={resetFilter}
        >
          Normal
        </button>
        <br />
        <button
          onMouseEnter={() => handlefilter("blur(8px)")}
          onMouseLeave={resetFilter}
        >
          blur
        </button>
        <br />
        <button
          onMouseEnter={() => handlefilter("grayscale(100%)")}
          onMouseLeave={resetFilter}
        >
          grayscale
        </button>
        <br />
        <button
          onMouseEnter={() => handlefilter("brightness(75%)")}
          onMouseLeave={resetFilter}
        >
          brightness
        </button>
        <br />
        <button
          onMouseEnter={() => handlefilter("saturate(300%)")}
          onMouseLeave={resetFilter}
        >
          Saturated
        </button>
        <br />
        <button
          onMouseEnter={() => handlefilter("hue-rotate(90deg)")}
          onMouseLeave={resetFilter}
        >
          hue rotate
        </button>
        <br />
        {/* <button onMouseEnter={resetFilter}>Reset</button> */}
      </div>
    </div>
  );
}

export default App;
