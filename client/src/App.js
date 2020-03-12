import React, { useState } from 'react';
import './App.css';
import './Pages/SignIn.js';
import SignInSide from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import 'typeface-roboto';
import Frontpage from './Pages/Frontpage.js'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { grey } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const style = {
    backgroundColor: "white",
    textAlign: 'center',
    margin: 'auto'
  }
  return (
    <Router>
      <div>
        <div style={style}>
          <AppBar position="static" style={style}>
            <Toolbar>
              <Link to="/">
                <HomeIcon style={{ color: grey[900] }} />
              </Link>
              <Link to="/">
                <h1 style={{ color: grey[900] }}>Löydöt.fi</h1>
              </Link>
              <SearchBar />
              <Link to="/Sign_Up">
                <Button variant="outlined" size="large">
                  Sign up
                    </Button>
              </Link>
              <Link to="/Sign_In">
                <Button variant="outlined" size="large">
                  Sign in
                    </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Sign_in">
            <SignInSide />
          </Route>
          <Route path="/Sign_up">
            <SignUp />
          </Route>
          <Route path="/">
            <Frontpage />
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
