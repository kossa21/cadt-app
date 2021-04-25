import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import Home from "./Components/Home";

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
    <Router>
      <div className="App">
        <nav className="menu">
          <Link to="/designs" onClick={selectDesign}>
            designs
          </Link>
          <Link to="/setouts" onClick={selectSetout}>
            setouts
          </Link>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/designs">
            <DisplayTable tableToDisplay="designs" data={tableItems} />
          </Route>

          <Route path="/setouts">
            <DisplayTable tableToDisplay="setouts" data={tableItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
