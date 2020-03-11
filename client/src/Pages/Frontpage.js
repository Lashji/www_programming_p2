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
    document.title = 'Löydöt.fi';
    return (
        <div>
            <Product/>
        </div>
    )
}

function Container() {

}

function Product() {
    return(
        <div>
            hello
        </div>
    );
}

export default Frontpage;