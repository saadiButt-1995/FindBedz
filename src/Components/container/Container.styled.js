import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    width: calc( 100% );
    margin-top: 8vh;
    margin-bottom: 20px;
    padding: 0 20px;
    @media (max-width: 992px) {
        width: 100%;
        margin-left: 0;
    }
    >div {
        
        ${props => props.full?`
            max-width: 100%;
        `:`
            max-width: 540px;
        `}
        width: 100%;
    }
    ${props => props.dflex && css`
        display: flex;
    `}
    ${props => props.center && css`
        justify-content: center;
    `}
    ${props => props.between && css`
        justify-content: space-between;
    `}
    ${props => props.around && css`
        justify-content: space-around;
    `}
`



