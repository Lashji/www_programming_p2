import React from 'react';
import './App.css';
import 'typeface-roboto';
import Frontpage from './Pages/Frontpage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Frontpage />
  );
}

export default App;
