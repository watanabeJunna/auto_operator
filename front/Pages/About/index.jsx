import React from "react"
import ReactDOM from "react-dom"
import { Nav } from "../../Common/Nav"
import { NavItemList } from "./attributes"


ReactDOM.render((
<div>
    <Nav>
        {NavItemList}
    </Nav>
</div>), document.getElementById("react-root"))