import React from "react"
import styled from "styled-components"
import Container from "../Wrapper/Container"
import { NavItem } from "./NavItem"

export class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    render() {
        let navItems = []

        if (this.props.children) {
            navItems = this.props.children
        }

        return (
                <NavBarWrapper>
                    <NavBarNav>
                        {
                            navItems.map((item, c) => {
                                return (
                                    <NavItem
                                        key={c}
                                        >
                                    {item.name}
                                    </NavItem>
                                )
                            })
                        }
                    </NavBarNav>
                </NavBarWrapper>
        )
    }
}

const NavBarWrapper = styled.nav`
    position: relative;
    display: flex !important;
    transition: background-color 300ms ease;
    align-items: center;
    flex-basis: auto;
    flex-grow: 1;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border-bottom: 1px solid black;
`

const NavBarNav = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: row;
    list-style: none
`
