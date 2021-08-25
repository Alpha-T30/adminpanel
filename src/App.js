import Topbar from "./Components/Topbar/Topbar";

import Style from "./App.module.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Components/Pages/UserList/UserList";
import Newuser from './Components/Pages/Newuser/Newuser';
import Productlist from './Components/Pages/ProductList/Productlist';
import Product from './Components/Pages/Product/Product';
import Newproduct from './Components/Pages/Newproducts/Newproduct';

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className={Style.container}>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route  path="/user/:userId">
            <User></User>
          </Route>
          <Route path='/newUser'>
            < Newuser></Newuser>
          </Route>
          <Route path="/products">
             < Productlist></Productlist>
          </Route>
          <Route  path="/product/:productId">
             <Product></Product>
          </Route>
          <Route path='/newproduct'>
            < Newproduct></Newproduct>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
