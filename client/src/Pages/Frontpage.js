import React, { useState } from 'react';
import './Frontpage.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { grey } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

function Frontpage() {
    const [search, setSearch] = useState("");
    document.title = 'Löydöt.fi';

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div>
            <NavBar handleSearchChange={handleSearchChange} />
        </div>
    )
}

function NavBar(props) {
    const style = {
        backgroundColor: "white"
    }
    return (
        <div>
            <AppBar position="static" style={style}>
                <Toolbar>
                    <HomeIcon style={{ color: grey[900] }} />
                    <p style={{ color: grey[900] }}>Löydöt.fi</p>
                    <SearchBar handleSearchChange={props.handleSearchChange} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

function SearchBar(props) {
    const style = {
        backgroundColor: "white"
    }
    return (
        <div>
            <TextField style={style} id="outlined-search" label={<SearchIcon />} type="search" variant="outlined" />
            <Button variant="contained" style={style}>
                Hae tuotteita
            </Button>
        </div>
    )
}

function SignInUp() {

}

function Container() {

}

function Product() {

}

export default Frontpage;