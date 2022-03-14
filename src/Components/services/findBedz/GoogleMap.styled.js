import styled from "styled-components";

export const Wrapper = styled.div`
    .account::-webkit-scrollbar {
        display: none;
    }
    .account{
        margin-top: 10px;
        .logindiv{
            margin-top: 150px
        }
        .dashboard_image{
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 80px;
            height: 80px
        }   
        .header_title{
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-size: 25px;
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
        .table-title {
            color: #101B79; 
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 1px;
            margin: 0px;
            padding: 0px;
        }
        .table-text {
            color: grey; 
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 14px;
            letter-spacing: 1px;
        }
        .table-btn {
            background: #101B79;
            color: white;
            padding: 5px 20px;
        }

        .reservation-table {
            text-align: center; 
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 14px;
            .table-head {
                background: #101B79;
                color: white;
                letter-spacing: 0.5px;
            }
            .reserve-action-btns {
                display: flex;
                justify-content: space-between;

                button {
                    border: none;
                    background: transparent;
                    text-decoration: underline;
                    font-weight: bold;
                }
            }
        }
    }
    .container {
                 
        .reserve_modal_title {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 18px;
        }
        .reserve_modal_input_label {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }  
    }

    .username-btn {
        background: #101B79;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

`