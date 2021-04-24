import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import { useState } from "react";

function App() {
  const [tableItems, settableItems] = useState([]);
  const [tableToDisplay, setTableToDisplay] = useState("designs");

  const savingDataFromFetch = async () => {
    const data = await fetcherListData("designs");
    settableItems(data);
  };

  return (
    <div className="App">
      <DisplayTable tableToDisplay={tableToDisplay} data={tableItems} />
      <button onClick={savingDataFromFetch}>click Me</button>
    </div>
  );
}

export default App;
