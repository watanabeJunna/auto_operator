import React from "react"
import styled from "styled-components"
import Container from "../Container"
import SolutionsMain from "./SolutionsMain"
import Description from "./Description"

const MainWrapper = styled.main``

const Main = () => {
    return (
        <Container>
            <MainWrapper>
                <SolutionsMain />
                <Description>

                </Description>
            </MainWrapper>
        </Container>
    )
}

export default Main