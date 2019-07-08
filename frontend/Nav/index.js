import React from "react"
import styled from "styled-components"
import Container from "../Container/index"
import NavBar from "./NavBar"

const navItemList = [
    {
        name: "Link",
        url: "",
        type: "a"
    },
    {
        name: "About",
        url: "",
        type: "a"
    },

    {
        name: "Contents",
        url: "",
        type: "a"
    },

    {
        name: "Tool",
        url: "",
        type: "a"
    },
]

const Nav = () => {
    return (
        <Container>
            <NavBar>
                {navItemList}
            </NavBar>
        </Container>
    )
}

export default Nav