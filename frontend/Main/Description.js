import React from "react"
import styled from "styled-components"

const DescriptionContent = styled.div`

`

const DescriptionWrapper = styled.section`
    margin: 120px auto 0;
    font-size: 28px;
    color: #666;
`

const Description = () => {
    return (
        <DescriptionWrapper>
            <DescriptionContent>
                Accelerate Modernization by Containerizing Legacy Applications
            </DescriptionContent>
        </DescriptionWrapper>
    )
}

export default Description