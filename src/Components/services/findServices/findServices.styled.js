import styled from "styled-components";

const height = window.innerHeight
export const Wrapper = styled.div`
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
        .filters {
            width: 100%;
            background: #ffffff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            margin-top: -40px;
        }
        .beds {
            overflow-y: scroll;
            height: ${height}px;
        }
        .beds::-webkit-scrollbar {
            display: none;
        }
        
        .company {
            width: 100%;
            background: #ffffff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            padding-left: 20px;
        }
    }

    .main_filter {
        padding: 20px;
        .filter_title {
            color: #101b79;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            margin: 0px 0px 20px 0px
        }

        .form-check label {
            font-family: popreg;
            font-weight: bold;
            margin-left: 5px;
        }

        .sub {
            margin-left: 20px;

            .or {
                display: flex;
                justify-content: center;
                color: red;
                font-family: popreg;
                font--weight: 700;
                margin: 10px 0px;
            }

            .custom-switch {
                label {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    font-size: 14px
                }
            }

            .form-check {
                margin-top: 5px;
            }
            .form-check label {
                font-family: popreg;
                font-weight: 500;
                margin-left: 3px;
            }
        }
    }


    .bedservices {
        .available_round {
            display: flex;
            justify-content: space-evenly;
            .avail_beds {
                text-align: center;
                color: #000;
                font-family: popbold !important;
                font-size: 20px;
                letter-spacing: 1px;
            }
            .round {
                width: 65px;
                height: 65px;
                border-radius: 50%;
                text-align: center;
                font-family: popmd;
                font-size: 17px;
                padding-top: 20px;
                margin-top: 20px;
                color: #fff;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 10px;                
            }
            .black {
                background: black;
                color: white
            }
            .green {
                background: #008e00;
                color: white
            }
        }
    }

    .company-page {
        font-family: 'Poppins', sans-serif;
        padding: 10px;

        .update-time {
            font-weight: 500;
            font-size: 11px;
            letter-spacing: 1px;
            float: right;
            margin: 10px;

        }
        .title_shelter {
            margin: 30px 0px 10px;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 1px;
        }
        .adress_title {
            
        }
        .adress_title img {
            width: 15px;
            height: 15px;
        }
        .available_round {
            display: flex;
            justify-content: space-between;
            .avail_beds {
                text-align: center;
                color: #000;
                font-family: popbold !important;
                font-size: 20px;
                letter-spacing: 1px;
            }
            .round {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                text-align: center;
                font-family: popmd;
                font-size: 13px;
                padding-top: 10px;
                margin-top: 10px;
                color: #fff;
                margin-left: auto;
                margin-right: auto;
                float: left;
                margin-top: 5px
            }
            .black {
                background: black;
                color: white
            }
            .green {
                background: #008e00;
                color: white
            }
            .golden {
                background: #DDC114;
            }
            .available_image {
                float: left;
                width: 43px;
                height: 43px;
                verticle-align: middle;
                line-height: 3;
                margin-left: 20px;
            }
            .available_title {
                float: left;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                letter-spacing: 1px;
                verticle-align: middle;
                line-height: 3;
                margin-left: 20px
            }
            .company_images {
                .largepic {
                    width: 250px;
                    height: 150px;
                    border-radius: 20px;
                }
                .smallpic {
                    width: 50px;
                    height: 50px;
                    border-radius: 10px;
                }
            }            
        }
        .facilities {
            display: flex;
            justify-content: space-between;

            .meals_section {
                float: left;
                width: 50%;
                margin: 10px 0px;

                img {
                    margin-right: 10px;
                }

                .meals_title {
                    letter-spacing: 1px;
                    font-weight: 700;
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                }

                .meals_description {
                    color: grey;
                    font-weight: 300;
                    font-family: 'Poppins', sans-serif;
                    font-size: 10px;
                }

                .faciliites_list {
                    span {
                        display: block;
                        color: grey;
                        font-weight: 300;
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        letter-spacing: 1px;
                    }
                }

                // .rules {
                //     display: flex;
                //     justify-content: space-between;
                //     margin-top: 10px;                    
                // }
                // .selected_icon {
                //     width: 20px;
                //     height: 20px;
                //     background: blue;
                //     border-radius: 50%;
                //     margin-right: 10px;
                // }
        
                // .label {
                //     color: grey;
                // }
                
            }
        }
    }

    .services-table {
        margin-top: 20px;
        .table-head {
            background: #101B79;
            color: #ffff;
            border-radius: 10px;

        }
    }

    .services-list {
        display: flex;
        justify-content: space-between;

        .service-card {
            height: 130px;
            width: 130px;
            box-shadow: 1px 1px 1px 1px lightgrey;
            text-align: center;
            border-radius: 10px;
            padding: 10px 0px 0px 0px;
            cursor: pointer;
            img {
                display: block;
                height: 90px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
            }
            .service_card_text {
                font-weight: 700;
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                margin-top: 10px;
            }


        }
    }
    

    
`