import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Sidebar.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import MyPurchases from "../MyPurchases/MyPurchases";
import Review from "../Review/Review";

const options = [
  {
    name: "Dashboard",
    scroll: true,
    backdrop: false,
  },
];

const Sidebar = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  let { path, url } = useRouteMatch();
  return (
    <div className="row">
      <div className="col-md-3">
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas
          style={{ visibility: "visible" }}
          className="sidebar-nav"
          show={show}
          onHide={handleClose}
          {...props}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h2>Topics</h2>
              <ul>
                {/* <li><Link to={`${url}`}>Dashboard</Link></li> */}
                <li>
                  <Link to={`${url}/myPurchases`}>My Purchase</Link>
                </li>
                <li>
                  <Link to={`${url}/review`}>Review</Link>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="col-md-9">
        {
          <Switch>
            <Route exact path={path}>
              <Dashboard />
            </Route>
            <Route path={`${path}/myPurchases`}>
              <MyPurchases />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        }
      </div>
    </div>
  );
};

function Canvas() {
  return (
    <div>
      {options.map((props, idx) => (
        <Sidebar key={idx} {...props} />
      ))}
    </div>
  );
}

export default Canvas;
