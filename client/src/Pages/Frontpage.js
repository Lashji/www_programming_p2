import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
    return (
        <div>
            <nav class="crumbs">
                <ol>
                    <li class="crumb"><a href="#">Löydöt.fi</a></li>
                </ol>
            </nav>
            <nav class="menu">
                <ol>
                    <li class="menu"><a href="#">Löydöt.fi</a></li>
                    <li class="menu"><a href="#"></a></li>
                </ol>
            </nav>
            <SearchBar handleSearchChange={props.handleSearchChange} />
        </div>
    );
}

function SearchBar(props) {
    return (
        <div>
            <label>Hae tuotteita</label>
            <input id="searchBar" type="text" required name="searchBar"
                size="25" onChange={props.handleSearchChange} />
            <input type="submit" value="Hae" />
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