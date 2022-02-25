import React, { useState } from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox } from "antd";
import { individualSignup, login, setLocalValues } from '../../services/auth'
import { days, months, results, states, years } from "../../services/states_counties";
import { Wrapper } from "../Auth/Auth.styled";
import MainNav from '../Auth/Navs/MainNav'

const Individual = () => {
  const navigate = useNavigate()
  // const [open, setOpen] = useState(false);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [counties, setCounties] = useState([]);
  const [terms, setTerms] = useState(false);
  const [phoneValue, setPhonevalue] = useState("");
  
  const onChange = (e)=> {
    setTerms(e.target.checked)
    getMyLocation(e)
  }

  const getMyLocation = (e) => {
    // const location = window.navigator && window.navigator.geolocation
    
    // if (location) {
    //   location.getCurrentPosition((position) => {
    //     users.coords = `${position.coords.latitude},${position.coords.longitude}`
    //     setUser(users)
    //     setTerms(e.target.checked)
    //   }, (error) => {
    //     toast.error('Error in getting location!')
    //   })
    // }
  }
  const [users, setUser] = useState({
    userName: "",
    password: "",
    phone: "",
    nickName: "",
    ethnicity: "",
    role: "user",
    date_of_birth: "",
    county: "",
    state: "",
    email: "texxt@gmail.com",
    coords: "",
  });

  const [errField, setErrField] = useState({
    userNameErr: "",
    nickName: "",
    phoneErr: "",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    if(name === 'zip_code'){
      if(value.length > 5){
        return
      }
    }
    setUser({ ...users, [name]: value });
  };

  const changeState = (e)=> {
    const state = e.target.value
    setUser({...users, state: state})
    getCountiesOfState(state)
  }

  const changeCounty = (e)=> {
    const county = e.target.value
    setUser({...users, county: county})
  }

  const getCountiesOfState = (state)=> {
    const data = results.filter(x => x.state === state)
    setCounties(data)
  }
  const submit = async (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(validForm());
    console.log("====================================");
    
    if(!validForm()){
      toast.error('Validation Error!',{
        position: toast.POSITION.TOP_CENTER
      })
      return
    }
    if(!year){
      toast.error('Please Select Year!',{
        position: toast.POSITION.TOP_CENTER
      })
      return
    }
    if(!terms){
      toast.error("Please allow this app to access your device's location!",{
        position: toast.POSITION.TOP_CENTER
      })
      return
    }

    users.phone = phoneValue;
    users.date_of_birth = `${year}-${month}-${day}`
    if (users.password === "" || users.password === undefined) {
      delete users.password;
    }
    if (users.county === "" || users.county === undefined) {
      delete users.county;
    }
    if (users.ethnicity === "" || users.ethnicity === undefined) {
      delete users.ethnicity;
    }
    if (users.date_of_birth === "" || users.date_of_birth === undefined) {
      delete users.date_of_birth;
    }
    if (users.date_of_birth === "" || users.date_of_birth === undefined) {
      delete users.date_of_birth;
    }
    if (users.state === "" || users.state === undefined) {
      delete users.state;
    }
    delete users.coords
    
    try{
      var response = await individualSignup(users)
      if (response.status === 200) {
        toast.success("Account has been created successfully!");
        setTimeout(async() => {
          var result = await login({userName: users.userName, password: users.password}) 
          await setLocalValues(result.data)
          navigate("/individual-landingpage");
          // navigate("/login");
          // toast.success("Please Login To Continue!");
        }, 500);
      }else{
        toast.error("Something went wrong !",{
          position: toast.POSITION.TOP_CENTER
        });
        console.log(response);
      }
    }catch(e){
      console.log('ERRORChoose a password*');
      toast.error(e.response.data.message,{
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      nickName: "",
      phoneErr: "",
    });
    if (users.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Name is Required",
      }));
    }

    if (phoneValue === "" || phoneValue.length < 15) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Invalid Phone Number!",
      }));
    }
    if (users.nickName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        nickName: "NickName is Required",
      }));
    }

    return formIsValid;
  };
  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    return maskedText;
  };

  return (
    <Wrapper>
      <MainNav/>
      <ToastContainer />

      <div className="account">
        
        <p style={{ marginBottom: "15px" }} className="header_title">
          CREATE AN ACCOUNT
        </p>
        <div className="mt-5">
          <form onSubmit={submit}>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-6">
                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom01">
                      CHOOSE USERNAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="userName"
                      value={users.userName}
                      onChange={handleInput}
                      type="text"
                      className="form-control login_field"
                      id="validationCustom01"
                      placeholder="Create a username"
                    />
                    {errField.userNameErr.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.userNameErr}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 label_input">
                    <label htmlFor="validationCustom02">
                      NICK NAME <span className="star_red">*</span>
                    </label>
                    <input
                      name="nickName"
                      value={users.nickName}
                      onChange={handleInput}
                      type="text"
                      placeholder="Create a nickname"
                      className="form-control login_field"
                      id="validationCustom02"
                    />
                    {errField.nickName.length > 0 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.nickName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      ETHNICITY
                    </label>
                    <select
                      name="ethnicity"
                      onChange={handleInput}
                      className="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option className="login_field">Enter Ethnicity</option>
                      <option>MIXED RACE</option>
                      <option>ARCTIC ( SIBERIAN, ESKIMO )</option>
                      <option>CAUCASIAN ( EUROPEAN )</option>
                      <option>CAUCASIAN ( INDIAN )</option>
                      <option>CAUCASIAN ( MIDDLE EAST )</option>
                      <option>CAUCASIAN ( NORTH AFRICAN, OTHER )</option>
                      <option>INDIGENOUS AUSTRALIAN</option>
                      <option>NATIVE AMERICAN</option>
                      <option>NORTH EAST ASIAN  ( MONGOL, TIBETAN, KOREAN JAPANESE, ETC )</option>
                      <option>PACIFIC (POLYNESIAN , MICRONESIAN, ETC)</option>
                      <option>SOUTH EAST ASIAN (CHINESE,THAI, MALAY, FILIPINO, ETC)</option>
                      <option>WEST AFRICAN, BUSHMEN, ETHIOPIAN</option>
                      <option>OTHER RACE</option>
                    /
                    </select>
                  </div>

                  <div className="form-group" style={{marginTop: '-5px'}}>
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                      value={users.date_of_birth}
                      onChange={handleInput}
                    >
                      GENDER
                    </label>
                    <select
                      name="gender"
                      onChange={handleInput}
                      className="form-control login_field"
                      id="exampleFormControlSelect1"
                    >
                      <option className="login_field" selected disabled>SELECT GENDER</option>
                      <option className="login_field">MALE</option>
                      <option className="login_field">FEMALE</option>
                      <option className="login_field">OTHER</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">
                      PASSWORD 
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "popreg",
                          color: "#828282",
                        }}
                      >
                        (optional)
                      </span>
                    </label>
                    <input
                      name="password"
                      placeholder="Choose a password"
                      onChange={handleInput}
                      value={users.password}
                      type="text"
                      className="first form-control login_field"
                    />
                  </div>
                  <div className="label_input mb-3">
                    <label htmlFor="validationCustom03">
                      PHONE NUMBER <span className="star_red">*</span>
                    </label>
                    <span
                      className="input-group-text login_field"
                      id="basic-addon1"
                    >
                      +1
                    </span>
                    <input
                      placeholder="(###) ###-####"
                      type="tel"
                      // value={phoneValue}
                      inputMode="numeric"
                      name="text"
                      className="first form-control login_field login_fieldw"
                      id="text"
                      onChange={(event) => {
                        const { value } = event.target;
                        setPhonevalue(value);
                        event.target.value = normalizeCardNumber(value);
                      }}
                    />
                    {errField.phoneErr.length > 10 && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "11px",
                          fontFamily: "popreg",
                        }}
                      >
                        {errField.phoneErr}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label
                      className="label_input"
                      for="exampleFormControlSelect1"
                    >
                      DATE OF BIRTH <span className="star_red">*</span>
                    </label>
                    <div className="">

                    <div class="row">
                      <div class="col-md-4  m-0 p-0 pr-3">
                          <select onChange={(e)=> setMonth(e.target.value)} name="" id="" className="form-control login_field">
                              <option value="" selected disabled>Select Month</option>
                              {months.map((element) => {
                                return (
                                  <option className="login_field" value={element}>{element}</option>
                                )
                              })}
                          </select>
                      </div>
                      <div class="col-md-4 m-0 p-0 pr-3">
                          <select onChange={(e)=> setDay(e.target.value)} name="" id="" className="form-control login_field">
                              <option value="" selected disabled>Select Day</option>
                              {days.map((element )=> {
                                return (
                                  <option className="login_field" value={element}>{element}</option>
                                )
                              })}
                          </select>
                      </div>
                      <div class="col-md-4 m-0 p-0 pr-0">
                          <select onChange={(e)=> setYear(e.target.value)} name="" id="" className="form-control login_field">
                              <option value="" selected disabled>Select Year</option>
                              {years.map((element) => {
                                return (
                                  <option className="login_field" value={element}>{element}</option>
                                )
                              })}
                          </select>
                      </div>
                  </div>
                  </div>
                      {/* <Datepicker /> */}
                      {/* <DropdownDate
                        
                        startDate={
                          // optional, if not provided 1900-01-01 is startDate
                          "1920-12-01" // 'yyyy-mm-dd' format only
                        }
                        endDate={
                          // optional, if not provided current date is endDate
                          "2022-11-01" // 'yyyy-mm-dd' format only
                        }
                        selectedDate={
                          // optional
                          users.date_of_birth
                          // this.state.selectedDate // 'yyyy-mm-dd' format only
                        }
                        onYearChange={(year) => {
                          // optional
                          setYear(year);
                        }}
                        onDayChange={(day) => {
                          // optional
                          setDay(day);
                        }}
                        onMonthChange={(month) => {
                          // optional
                          setMonth(month);
                        }}
                        onDateChange={(date) => {
                          // optional
                          // setDate(date);
                          setSelectedDate(formatDate(date));
                          // this.setState({
                          //   date: date,
                          //   selectedDate: formatDate(date),
                          // });
                        }}
                      />
                    </div> */}
                  </div>
                  {/* <select className="select" multiple>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                  </select> */}
                  <div className="row">
                    <div className="col-lg-6 pl-0 respon2">
                      <div className="mb-3 label_input">
                      <label htmlFor="validationCustom02">STATE</label>
                        <select className="form-control login_field" name="states" id="states"
                        onChange={changeState}
                        >
                          <option className="login_field" selected disabled>Select State</option>
                          {states.map((item, index)=> {
                            return (
                              <option className="login_field" key={index} value={item}>{item}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 pr-0 respon">
                      <div className="mb-3 label_input">
                        <label htmlFor="validationCustom02">COUNTY </label>
                        <select className="form-control login_field" name="counties" id="counties"
                        onChange={changeCounty}
                        >
                          {/* {!users.state? */}
                            <option className="login_field" selected disabled>Select County</option>
                          {/* :null} */}
                          {counties.map((item, index)=> {
                            return (
                              <option className="login_field" key={index} value={item.countyName}>{item.countyName}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Checkbox
                style={{ paddingLeft: "17px", paddingTop: "20px" }}
                onChange={onChange}
              >
                <span className="label_input location ml-2">
                  SYSTEM WILL USE YOUR DEVICE’S LOCATION SERVICES
                  <span className="star_red">*</span>
                </span>
              </Checkbox>
            </div>

            <div className="signup_footer">
              {/* <Link to="/login" onClick={submit}> */}
              <button
                className="signupbtn"
                type={"submit"}
              >
                SIGNUP
              </button>
              <Link className="" to="/">
                <p className="footer_sign_up">Cancel</p>
              </Link>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Individual;
