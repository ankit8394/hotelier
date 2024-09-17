import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import {
  Vhome
} from "./components";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/'element={<Vhome/>}/>
    </Routes>
  </Router>,
  document.getElementById("root")

);

serviceWorker.unregister();
reportWebVitals();
