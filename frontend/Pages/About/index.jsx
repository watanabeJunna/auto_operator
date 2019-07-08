import React from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav/index"
import Main from "./Main/index"
import PageWrapper from "./PageWarp/index"

ReactDOM.render((
    <PageWrapper>
        <Nav />
        <Main />
    </PageWrapper>), document.getElementById("react-root"))