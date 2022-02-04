import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Sheltorsignup() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    shelterName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    contact_person_name: "",
    zipCode: "",
    role: "shelter",
    // totalAllowedForReservation: "12",
    // totalNumberOfBeds: "14",
    // description: "",
    // rules: "",
    // maxTimeToHoldABed: "",
    // food: "",
    // shelterIsFor: "family",
    // contact_person: "xsasas",
    // massage: "12221",
  });

  const navigate = useNavigate();
  // const handleAddrTypeChange = (e) => {
  //   console.clear();
  //   console.log(user.iam[e.target.value]);
  //   setUser({ ...user, iam: e.target.value });
  // };
  // const [role, setRole] = useState("sheriif");
  // const  = (event) => {
  //   event.preventDefault();
  //   console.log(`
  //     Role: ${role}
  //   `);
  // };

  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
    shelterNameErr: "",
    phoneErr: "",
    emailErr: "",
    addressErr: "",
    cityErr: "",
    stateErr: "",
    zipCodeErr: "",
    contact_person_nameErr: "",
    // role: "shelter",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(validForm());
    if (validForm()) {
      let url = "https://shelterprovider.herokuapp.com/v1/shelter/create";
      let options = {
        method: "POST",
        url: url,
        headers: {},
        data: user,
      };
      let response = await axios(options);

      console.log(response);
      if (response.status === 201) {
        toast.success("Added Successfully!");
        setTimeout(() => {
          navigate("/sheltor-dashboard");
        }, 1500);
      } else {
        toast.error("Something went wrong !");
      }
      // }catch(e){
      //   console.log(e)
      //  toast.error("Something went wrong !");
      // }
    }
  };

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      userNameErr: "",
      passwordErr: "",
      shelterNameErr: "",
      phoneErr: "",
      emailErr: "",
      addressErr: "",
      cityErr: "",
      stateErr: "",
      zipCodeErr: "",
      contact_person_nameErr: "",
    });
    if (user.userName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        userNameErr: "Please Enter userName",
      }));
    }
    if (user.contact_person_name === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        contact_person_nameErr: "Please Enter contact person Name",
      }));
    }
    if (user.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (user.phone === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Please Enter phone",
      }));
    }
    if (user.email === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        emailErr: "Please Enter email",
      }));
    }
    if (user.shelterName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        shelterNameErr: "Please Enter shelter name",
      }));
    }
    if (user.address === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        addressErr: "Please Enter address",
      }));
    }
    if (user.city === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cityErr: "Please Enter City",
      }));
    }
    if (user.state === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        stateErr: "Please Enter State",
      }));
    }
    if (user.zipCode === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipCodeErr: "Please Enter zipCode",
      }));
    }

    return formIsValid;
  };
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const [valuee, setValuee] = useState(0);
  const [incVal, setIncVal] = useState(0);
  const [hour, setHour] = useState(0);
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "zia.jpg",
      status: "done",
      url: "/images/maan.jpg",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const hourInc = () => {
    if (hour < 4) {
      setHour(hour + 1);
    } else {
      setHour(4);
    }
  };
  const hourDec = () => {
    if (hour > 0) {
      setHour(hour - 1);
    } else {
      setHour(0);
    }
  };

  const valInc = () => {
    if (incVal < valuee) {
      setIncVal(incVal + 1);
    }
  };
  const valDec = () => {
    if (incVal > 0) {
      setIncVal(incVal - 1);
    } else {
      setIncVal(0);
    }
  };
  const increament = () => {
    if (valuee < 100) {
      setValuee(valuee + 1);
    } else {
      setValuee(100);
    }
  };
  const decreament = () => {
    if (valuee > 0) {
      setValuee(valuee - 1);
    } else {
      setValuee(0);
    }
  };

  return (
    <div className="Sheltorsignup">
      <ToastContainer />
      <Link to="/">
        <div className="logodiv login_log">
          <img className="login_logo" src="/images/sheltorlogo.svg" alt="" />
        </div>
      </Link>
      <p className="indi_title">SIGNUP FOR SHELTER PROVIDER</p>
      <div className="row justify-content-around">
        <div className="col-lg-5">
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
              CHOOSE USERNAME<span className="star_red">*</span>
            </label>
            <input
              name="userName"
              value={user.userName}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
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
              ENTER SHELTER NAME<span className="star_red">*</span>
            </label>
            <input
              name="shelterName"
              value={user.shelterName}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
            {errField.shelterNameErr.length > 0 && (
              <span
                style={{
                  color: "red",
                  fontSize: "11px",
                  fontFamily: "popreg",
                }}
              >
                {errField.shelterNameErr}
              </span>
            )}
          </div>
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
              ADDRESS<span className="star_red">*</span>
            </label>
            <input
              name="address"
              value={user.address}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
            />
            {errField.addressErr.length > 0 && (
              <span
                style={{
                  color: "red",
                  fontSize: "11px",
                  fontFamily: "popreg",
                }}
              >
                {errField.addressErr}
              </span>
            )}
          </div>
          <div className="row justify-content-md-between">
            <div className="col-lg-3 px-0 ">
              <div className="mb-3 label_input">
                <label htmlFor="validationCustom02">
                  CITY<span className="star_red">*</span>
                </label>
                <input
                  name="city"
                  value={user.city}
                  onChange={handleInput}
                  type="text"
                  className="form-control login_field"
                  id="validationCustom02"
                  required
                />
                {errField.cityErr.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "11px",
                      fontFamily: "popreg",
                    }}
                  >
                    {errField.cityErr}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-3 px-0">
              <div className="mb-3 label_input">
                <label htmlFor="validationCustom02">
                  STATE<span className="star_red">*</span>
                </label>
                <input
                  name="state"
                  onChange={handleInput}
                  value={user.state}
                  type="text"
                  className="form-control login_field"
                  id="validationCustom02"
                  required
                />
                {errField.stateErr.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "11px",
                      fontFamily: "popreg",
                    }}
                  >
                    {errField.stateErr}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-3 px-0">
              <div className="mobile_p pr-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    ZIP CODE<span className="star_red">*</span>
                  </label>
                  <input
                    name="zipCode"
                    value={user.zipCode}
                    onChange={handleInput}
                    type="text"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
                  {errField.zipCodeErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.zipCodeErr}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="label_input mb-4">
            <label htmlFor="validationCustom03">
              CREATE PASSWORD<span className="star_red">*</span>
            </label>
            <input
              name="password"
              onChange={handleInput}
              value={user.password}
              type={open === false ? "password" : "text"}
              className="form-control login_field"
              id="validationCustom03"
              required
            />
            {errField.passwordErr.length > 0 && (
              <span
                style={{
                  color: "red",
                  fontSize: "11px",
                  fontFamily: "popreg",
                }}
              >
                {errField.passwordErr}
              </span>
            )}
            {open === false ? (
              <AiFillEyeInvisible className="svggg" onClick={toggle} />
            ) : (
              <AiFillEye className="svggg" onClick={toggle} />
            )}
          </div>
          <div className="label_input mb-3">
            <label htmlFor="validationCustom03">
              PHONE
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "popreg",
                  color: "#828282",
                }}
              >
                <span className="star_red">*</span>
              </span>
            </label>
            <span className="input-group-text login_field" id="basic-addon1">
              +1
            </span>
            <input
              name="phone"
              onChange={handleInput}
              value={user.phone}
              type="text"
              className="first form-control login_field"
            />
            {errField.phoneErr.length > 0 && (
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
          {/* <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              PHONE <span className="star_red">*</span>
            </label>
            <input
              name="phone"
              onChange={handleInput}
              value={user.phone}
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
            {errField.phoneErr.length > 0 && (
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
          </div> */}
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              ENTER EMAIL ADDRESS<span className="star_red">*</span>
            </label>
            <input
              name="email"
              value={user.email}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
            {errField.emailErr.length > 0 && (
              <span
                style={{
                  color: "red",
                  fontSize: "11px",
                  fontFamily: "popreg",
                }}
              >
                {errField.emailErr}
              </span>
            )}
          </div>

          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
              NAME OF THE CONTACT PERSON <span className="star_red">*</span>
            </label>
            <input
              name="contact_person_name"
              value={user.contact_person_name}
              onChange={handleInput}
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
            />
            {errField.contact_person_nameErr.length > 0 && (
              <span
                style={{
                  color: "red",
                  fontSize: "11px",
                  fontFamily: "popreg",
                }}
              >
                {errField.contact_person_nameErr}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="progress_div">
        <div className="progress_card">
          <div className="headind_pro">TOTAL NUMBER OF BEDS YOU HAVE</div>

          <div className="progress1">
            <div className="cricle_div">{valuee}</div>
            <div className="calcu_btns">
              <button className="plusbtn" onClick={increament}>
                +
              </button>
              <button className="plusbtn color_red" onClick={decreament}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className="progress_card">
          <div className="headind_pro">TOTAL ALLOWED FOR RESERVATION</div>

          <div className="progress1">
            <div className="cricle_div color_gold">{incVal}</div>
            <div className="calcu_btns">
              <button className="plusbtn" onClick={valInc}>
                +
              </button>
              <button className="plusbtn color_red" onClick={valDec}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className="progress_card">
          <div className="headind_pro">Maximum Time to Hold a Bed</div>

          <div className="progress1">
            <div className="cricle_div">{hour} Hr</div>
            <div className="calcu_btns">
              <button
                className="plusbtn plusgreen"
                onClick={hourInc}
                disabled={incVal === 0}
              >
                +
              </button>
              <button
                className="plusbtn color_red"
                onClick={hourDec}
                disabled={incVal === 0}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="para_sheltor">
        THE ITEMS BELOW CAN ALSO BE ADDED LATER UNDER “EDIT PROFILE”
      </p>
      <div className="container mt-4 background_contain">
        <div className="row">
          <div className="col-lg-6">
            <div classname="checkboxs">
              <p className="checks_labels">Click all that apply</p>
              <div className="form-group form-check ">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleCheck1"
                >
                  Breakfast
                </label>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleCheck3"
                >
                  Lunch
                </label>
              </div>
              <div className="form-group form-check checks_labels">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck4"
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleCheck5"
                >
                  Dinner
                </label>
              </div>
              <div className="form-group form-check checks_labels">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck6"
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleCheck1"
                >
                  Snacks
                </label>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 mobile_view">
            <p className="checks_labels">RULES/REQUIREMENTS</p>
            <div className="radiobnts">
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleRadios1"
                >
                  Adults
                </label>
              </div>
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleRadios1"
                >
                  Female Only
                </label>
              </div>
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleRadios1"
                >
                  Male Only
                </label>
              </div>
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor="exampleRadios1"
                >
                  Family Friendly
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="images section mt-4">
          <p className="checks_labels">ADD IMAGES </p>
          <div className="flex_images">
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </div>
        </div>
        <div className="mobile_col row mt-5 mb-5">
          <div className="col">
            <p className="checks_labels">DESCRIPTION</p>
            <textarea
              className="checks_labels login_field1 with_input"
              type="text"
            ></textarea>
          </div>
          <p></p>
          <div className="col ">
            <p className="checks_labels">RULES/REQUIREMENTS</p>
            <textarea
              className="checks_labels login_field1 with_input"
              type="text"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="signup_footer">
        <Link onClick={submit} className="" to="/sheltor-dashboard">
          <button className="shel_up_btn w-100 px-5">SIGNUP & CONTINUE</button>
        </Link>
        <p className="footer_sign_up">Cancel</p>
      </div>
    </div>
  );
}

export default Sheltorsignup;
