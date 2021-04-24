import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import { useState } from "react";

function App() {
  const [tableItems, settableItems] = useState([]);

  const savingDataFromFetch = async () => {
    const data = await fetcherListData();
  };

  console.log(tableItems);
  return (
    <div className="App">
      <DisplayTable />
    </div>
  );
}

export default App;
