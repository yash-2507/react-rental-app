import React from "react";
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [add, setAdd] = React.useState(false)
  const [rental, setRental] = React.useState(true)
  const [show, setShow] = React.useState(false)
  return (
    <div className="App">
      <button className="toggleForm" onClick={() => setShow(!show)}>
        {/* Show text Add House or Show Rentals based on state */}
        Toggle Button
      </button>
      {show ? <div className="toggle">
        <button className="toggle-button" onClick={() => setAdd(!add)}>Add House</button>
        <button className="toggle-button" onClick={() => setRental(!rental)}>Show Rentals</button>
      </div> : null}
      {/* Show component based on state */}
        {add ? <AddHouse /> : null}
        {rental ? <Rentals /> : null}
      <br />
    </div>
  );
}

export default App;
