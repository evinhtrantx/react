import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuContainer from "./MenuContainer";
import ClickComponent from "./ClickComponent";
ReactDOM.render(
  <MenuContainer/>,
  document.querySelector("#container")
);
ReactDOM.render(
    <ClickComponent />,
    document.querySelector("#clickComponent")
);