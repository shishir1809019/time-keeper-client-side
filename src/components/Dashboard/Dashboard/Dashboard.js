import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyPurchases from "../MyPurchases/MyPurchases";
import Review from "../Review/Review";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
import Payment from "../Payment/Payment";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllPurchases from "../ManageAllPurchases/ManageAllPurchases";

const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();
  // console.log(admin);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <NavLink style={{ textDecoration: "none", color: "black" }} to="/explore">
        <Button color="inherit">Our All Products</Button>
      </NavLink>
      <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </NavLink>
      <br />
      {!admin && (
        <Box>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/payment`}
          >
            <Button variant="text" color="inherit">
              Payment
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/myPurchases`}
          >
            <Button color="inherit">My Purchases</Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/review`}
          >
            <Button color="inherit">Review</Button>
          </NavLink>
        </Box>
      )}
      {admin && (
        <Box>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/makeAdmin`}
          >
            <Button color="inherit">Make Admin</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/addProduct`}
          >
            <Button color="inherit">Add Product</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/manageProducts`}
          >
            <Button color="inherit">Manage Products</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/manageAllPurchases`}
          >
            <Button color="inherit">Manage All Purchases</Button>
          </NavLink>
        </Box>
      )}
      <Divider sx={{ marginTop: "100%" }} />
      <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}`}>
        <Button color="inherit" onClick={logOut}>
          Logout
        </Button>
      </NavLink>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      > */}
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/myPurchases`}>
            <MyPurchases />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllPurchases`}>
            <ManageAllPurchases />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
