import React, { useState } from 'react';
import './App.css';
import './signin/SignIn.js';
import SignInContainer from './signin/SignInContainer';
import SignUpContainer from "./signup/SignUpContainer";
import 'typeface-roboto';
import FrontpageContainer from './frontpage/FrontpageContainer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { grey } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl'
import Searchbar from './components/Searchbar'
import AddProductPageContainer from './addproduct/AddProductPageContainer'
import AdminPageContainer from './adminPage/AdminPageContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SignInSignUp() {
  return (
    <div>
      <Link to="/sign_up">
        <Button variant="outlined" size="large">
          Sign up
        </Button>
      </Link>
      <Link to="/sign_in">
        <Button variant="outlined" size="large">
          Sign in
        </Button>
      </Link>
    </div>
  )
}

function LogOut(props) {
  return (
    <Button variant="outlined" size="medium" onClick={props.onClick}>
      Log Out
    </Button>
  )
}

const GoToAdmin= (props) =>{
  return (
    <Link to="/admin">
            <Button onClick={e => props.adminPage()} variant="outlined" size="medium">
                Admin
            </Button>
    </Link>
  )
}


function App(props) {
  console.log("App props =>", props)
  const style = {
    backgroundColor: "white",
    textAlign: 'center',
    margin: 'auto'
  }

  const ToolbarStyles = {
    display: "grid",
    gridTemplateColumns: "5% 10% auto 30% auto 20%"
  }

 
  let buttons;
  if (props.token) {
    let adminBtn
    if (props.role === 'admin')
      adminBtn = <GoToAdmin adminPage={props.adminPage} />
    buttons = (
      <div>
        {adminBtn}
         <Link to="/add">
            <Button onClick={e => props.addPage()} variant="outlined" size="medium">
                Add new product
            </Button>
        </Link>
        <LogOut onClick={props.logOut}/>);
      </div>)
  }
  else {
    buttons = <SignInSignUp />;
  }

  let searchbar
  console.log("props=>", props)

  if (props.searchBar)
    searchbar = <Searchbar products={props.products} filterProducts={props.filterProducts} />
   
  else
    searchbar = <div></div>


  return (
    <Router>
      <div>
        <div style={style}>
          <AppBar position="static" style={style}>
            <Toolbar style={ToolbarStyles} >
              <Link to="/">
                <HomeIcon onClick={e => props.frontpage()} style={{ color: grey[900] }} />
              </Link>
              <Link to="/">
                <h1 onClick={e => props.frontpage()} style={{ color: grey[900] }}>Löydöt.fi</h1>
              </Link>
              <div></div> {/*These are for keeping the searchbar in middle*/}
              {searchbar}
              <div></div> {/*These are for keeping the searchbar in middle*/}
              {buttons}
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            The component to be rendered has to be passed in the
            component property, to have access to props like
            history. */}
        <Switch>
          <Route path="/sign_in" component={SignInContainer}>
          </Route>
          <Route path="/sign_up" component={SignUpContainer}>
          </Route>
          <Route path="/admin" component={AdminPageContainer}>
          </Route>
          <Route path="/add" component={AddProductPageContainer} >
          </Route>
          <Route path="/" component={FrontpageContainer}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
