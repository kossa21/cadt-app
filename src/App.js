import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import { useState, useCallback } from "react";

function App() {
  const [tableItems, settableItems] = useState([]);
  const [tableToDisplay, setTableToDisplay] = useState("");

  const selectType = useCallback(
    async (type) => {
      setTableToDisplay(type);
      const data = await fetcherListData(type);
      settableItems(data);
    },
    [setTableToDisplay, settableItems]
  );

  const selectDesign = useCallback(() => {
    selectType("designs");
  }, [selectType]);

  const selectSetout = useCallback(() => {
    selectType("setouts");
  }, [selectType]);

  return (
    <div className="App">
      {tableToDisplay ? (
        <DisplayTable tableToDisplay={tableToDisplay} data={tableItems} />
      ) : null}
      <button onClick={selectDesign}>designs</button>
      <button onClick={selectSetout}>setouts</button>
    </div>
  );
}

export default App;
