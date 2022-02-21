import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    width: calc( 100% );
    margin-top: 3vh;
    margin-bottom: 10px;
    padding: 0 20px;
    .header_img{
        width: 150px;
        height: 150px;
    }
    .dashtittle{
        color: #101b79;
        font-family: patua;
        padding-top: 10px;
        font-size: 22px !important;
    }
    .back-home{
        text-align: start;
        img {
            width: 30px;
            margin: 0px 5px
        }
        .back-button{
            cursor: pointer;
        }
    }
    .logout{
        cursor: pointer;
        text-align: end;
    }
    @media (max-width: 992px) {
        width: 100%;
        margin-left: 0;
    }
    >div {
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



