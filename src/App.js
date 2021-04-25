import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import { useState } from "react";

function App() {
  const [tableItems, settableItems] = useState([]);
  const [tableToDisplay, setTableToDisplay] = useState("");

  const savingDataFromFetch = async (e) => {
    setTableToDisplay(e.target.innerHTML);
    const data = await fetcherListData(tableToDisplay);
    settableItems(data);
    /* setTableToDisplay(e.innerHTML); */
  };

  return (
    <div className="App">
      {tableToDisplay ? (
        <DisplayTable tableToDisplay={tableToDisplay} data={tableItems} />
      ) : null}
      <button onClick={savingDataFromFetch}>designs</button>
      <button onClick={savingDataFromFetch}>setouts</button>
    </div>
  );
}

export default App;
