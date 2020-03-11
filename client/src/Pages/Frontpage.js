import React from 'react';
import './Frontpage.css';

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