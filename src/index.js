import React from "react";
import ReactDOM from "react-dom";
import Run from "./components/run/Run";
import Header from "./components/header";
import Footer from "./components/footer";

import "./scss/style.scss";




ReactDOM.render(<Run />, document.getElementById("run"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
