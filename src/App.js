import Topbar from "./Components/Topbar/Topbar";

import Style from "./App.module.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./Components/Pages/UserList/UserList";
import Newuser from "./Components/Pages/Newuser/Newuser";
import Productlist from "./Components/Pages/ProductList/Productlist";
import Product from "./Components/Pages/Product/Product";
import Newproduct from "./Components/Pages/Newproducts/Newproduct";
import Login from "./Components/Pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./Context_Api/AuthContext/AuthContext";
import ListList from "./Components/Pages/MovieListlist/ListList";
import List from "./Components/Pages/List/List";
import NewList from "./Components/Pages/NewList/NewList";

function App() {
  console.log(JSON.parse(localStorage.getItem("user")));
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/"></Redirect> : <Login />}
        </Route>
        {user ? (
          <>
            <Topbar></Topbar>
            <div className={Style.container}>
              <Sidebar></Sidebar>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/users">
                <UserList></UserList>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/user/:userId">
                <User></User>
              </Route>
              <Route path="/newUser">
                <Newuser></Newuser>
              </Route>
              <Route path="/movies">
                <Productlist></Productlist>
              </Route>
              <Route path="/product/:productId">
                <Product></Product>
              </Route>
              <Route path="/newmovie">
                <Newproduct></Newproduct>
              </Route>
              <Route path="/lists">
                <ListList></ListList>
              </Route>
              <Route path="/list/:listId">
                <List></List>
              </Route>
              <Route path="/newlist">
                <NewList></NewList>
              </Route>
            </div>{" "}
          </>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </Switch>
    </Router>
  );
}

export default App;
