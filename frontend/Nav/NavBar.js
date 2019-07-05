import React from "react"
import styled from "styled-components"
import NavItem from "./NavItem"

const NavBar = (props) => {
    let navItem = []

    if (props.children) {
        navItem = props.children
    }

    return (
        <NavBarWrapper>
            <NavBarNav>
                {
                    navItem.map((e, c) =>
                        <NavItem key={c}>{e.name}</NavItem>
                    )
                }
            </NavBarNav>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    display: flex !important;
    transition: background-color 300ms ease;
    padding: 30px 15px 23px;
    align-items: center;
    flex-basis: auto;
    flex-grow: 1;
    flex-flow: row nowrap;
    justify-content: flex-start;
    position: relative;
`

const NavBarNav = styled.ul`
    display: flex;
    margin: auto;
    flex-direction: row;
    list-style: none
`

export default NavBar