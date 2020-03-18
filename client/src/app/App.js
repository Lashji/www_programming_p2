import React, { useState } from 'react';
import './App.css';
import './signin/SignIn.js';
import SignInContainer from './signin/SignInContainer';
import SignUpContainer from "./signup/SignUpContainer";
import 'typeface-roboto';
import Frontpage from './frontpage/Frontpage.js'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { grey } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl'
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
    <Button variant="outlined" size="large" onClick={props.onClick}>
      Log Out
    </Button>
  )
}

function App(props) {
  const style = {
    backgroundColor: "white",
    textAlign: 'center',
    // margin: 'auto'
  }

  const ToolbarStyles = {
    display: "grid",
    gridTemplateColumns: "5% 10% auto 15%"
  }

 

  let buttons;
  if (props.token) {
    buttons = <LogOut
      onClick={props.logOut}
    />;
  }
  else {
    buttons = <SignInSignUp />;
  }
  return (
    <Router>
      <div>
        <div style={style}>
          <AppBar position="static" style={style}>
            <Toolbar style={ToolbarStyles} >
              <Link to="/">
                <HomeIcon style={{ color: grey[900] }} />
              </Link>
              <Link to="/">
                <h1 style={{ color: grey[900] }}>Löydöt.fi</h1>
              </Link>
              {/* <SearchBar /> */}
              <form noValidate autoComplete="off">
                <FormControl width={200}>
                  <TextField id="standard-basic" label="Search..." />
                </FormControl>
              </form>
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
          <Route path="/" component={Frontpage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function SearchBar() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }
  const style = {
    backgroundColor: "white"
  }
  return (
    <div>
      <TextField style={style} id="outlined-search" label={<SearchIcon />} type="search" variant="outlined" onChange={handleSearchChange} />
    </div>
  )

}

export default App;
