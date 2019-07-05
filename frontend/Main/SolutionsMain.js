import React from "react"
import styled from "styled-components"

const Title = styled.div`
    max-width: 840px;
    font-size: 48px;
    font-weight: 700;
`

const Description = styled.div`
    font-size: 28px;
`

const SolutionsMainWrapper = styled.section`
    margin: 120px 0;
`

const SolutionsMain = () => {
    return (
        <SolutionsMainWrapper>
            <Title>
                Production-Grade Container Orchestration
            </Title>
            <Description>
                For non-native applications, Kubernetes offers ways to place a network port or load balancer in between your application and the backend Pods.
            </Description>
        </SolutionsMainWrapper>
    )
}

export default SolutionsMain