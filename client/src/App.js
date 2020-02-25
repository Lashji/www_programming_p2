import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
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
