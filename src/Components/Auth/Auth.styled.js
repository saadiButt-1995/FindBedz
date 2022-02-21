import styled from "styled-components";


export const Wrapper = styled.div`
    .account{
        margin-top: 30px;
        .logindiv{
            margin-top: 150px
        }
    }
    .header_title{
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-size: 30px;
        color: rgba(21, 21, 21, 1);
        font-weight: 700;
        font-family: Poppins;
        letter-spacing: 2px;
        display: flex;
        justify-content: center
    }
    .header_text{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: rgba(128, 128, 128, 1);
        letter-spacing: 1px;
        display: flex;
        justify-content: center
    }
    .create_section {
        margin-top: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    .create_card {
        background: #ffffff;
        box-shadow: 0px 4px 10px rgb(0 0 0 / 25%);
        border-radius: 20px;
        height: 260px;
        width: 27%;
        text-align: center;
        padding: 40px;
        transition: 1s;
        img{
            width: 100px;
            height: 100px;
        }
        .second_img{
            width: 150px !important;
            height: 130px !important;
        }
        .card_title{
            font-weight: bold;
            font-family: popbold;
            font-size: 16px;
            letter-spacing: 2px;
            color: #151515;
        }
    }
    
`