import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Explore from "./components/Explore/Explore";
import Purchase from "./components/Purchase/Purchase";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
