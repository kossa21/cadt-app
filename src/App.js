import "./App.css";
import DisplayTable from "./Components/DisplayTable";
import { fetcherListData } from "./API";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useState, useCallback } from "react";
import Home from "./Components/Home";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

function App() {
  const [tableItems, settableItems] = useState([]);
  const [tableToDisplay, setTableToDisplay] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
        <Navbar color="light" light expand="md" className="custom-navbar">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavLink
                activeClassName="active-link"
                to="/designs"
                onClick={selectDesign}
              >
                Designs
              </NavLink>

              <NavLink
                activeClassName="active-link"
                to="/setouts"
                onClick={selectSetout}
              >
                Setouts
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>

        {/* <nav className="menu">
          <NavLink to="/designs" onClick={selectDesign}>
            designs
          </NavLink>
          <NavLink to="/setouts" onClick={selectSetout}>
            setouts
          </NavLink>
        </nav> */}

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
