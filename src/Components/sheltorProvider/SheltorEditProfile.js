import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { basePath } from "../../config";
import { providerSignup } from "../../services/auth";

function SheltorEditProfile() {
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
    totalAllowedForReservation: "",
    totalNumberOfBeds: "",
    description: "testadsf",
    rules: "testfasdf",
    maxTimeToHoldABed: "",
    food: "",
    shelterIsFor: "family",
  });

  const [phoneValue, setPhonevalue] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [storage, setStorage] = useState(false);
  const [storage_message, setStorageMessage] = useState('');
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [foods, setFoods] = useState([]);
  const [pets, setPets] = useState([]);
  const [shelter_For, setShelterFor] = useState('')
  const [valuee, setValuee] = useState(0);
  const [incVal, setIncVal] = useState(0);
  const [hour, setHour] = useState(0);
  const [fileList, setFileList] = useState([]);

  const ameniity_types = ['Power Outlets', 'Computer Access', 'WIFI', 'Shower'];
  const foodTypes = ['breakfast', 'lunch', 'dinner', 'snacks'];
  const shelterTypes = ['Adults', 'Female Only', 'Male Only', 'Family Friendly'];
  const petTypes = ['Dogs', 'Cats'];
  const storageTypes = ['None', 'Yes'];
  

  const navigate = useNavigate();

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
    role: "shelter",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
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

  const toggle = () => {
    setOpen(!open);
  };
  
 

  const hourInc = () => {
    if (hour < 4) {
      setHour(hour + 0.5);
    } else {
      setHour(4);
    }
  };
  const hourDec = () => {
    if (hour > 0) {
      setHour(hour - 0.5);
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
  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    return maskedText;
  };

  const FoodHandle = (value)=> {
    var exists = false
    var index = 0
    foods.forEach((item, index)=> {
      if(item === value){
        exists = true
        index = index
      }
    })
    if(!exists){
      foods.push(value)
    }else{
      foods.splice(index, 1)
    }
  }

  const AmenityHandle = (value)=> {
    var exists = false
    var index = 0
    amenities.forEach((item, index)=> {
      if(item === value){
        exists = true
        index = index
      }
    })
    if(!exists){
      amenities.push(value)
    }else{
      amenities.splice(index, 1)
    }
  }

  const PetHandle = (value)=> {
    var exists = false
    var index = 0
    pets.forEach((item, index)=> {
      if(item === value){
        exists = true
        index = index
      }
    })
    if(!exists){
      pets.push(value)
    }else{
      pets.splice(index, 1)
    }
  }

  const chooseImage = ()=> {
    document.getElementById("image").click();
  }

  const selectImage = (event)=> {
    var pic = "";
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      // check resolutions
      setTimeout(() => {
        if (isImage(img.name)) {
            
            // setImage(URL.createObjectURL(img))
            let reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = async() =>{                
                pic = reader.result;
            };
            reader.onerror = function (error) {
              console.log("Error: ", error);
            };
            setTimeout(() => {
                setFileList(fileList.concat(pic))
              }, 1000);
          }else { 
            toast.error('Invalid image format..')
            return false
          }
      }, 200);

    }
  }
  const isImage = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      return true;
    }
    return false;
  }
  const getExtension = (filename) => {
    var parts = filename.split(".");
    return parts[parts.length - 1];
  }

  const deletePhoto = (index) => {
    if (window.confirm('Sure to delete this photo?')){
      fileList.splice(index, 1)
      setTimeout(() => {
        setFileList(fileList)
      }, 500);
    }
  }

  const submit = async (e) => {
    e.preventDefault();
    if (user.food === "" || user.food === undefined) {
      delete user.food;
    }

    user.phone = phoneValue;
    user.totalAllowedForReservation = incVal;
    user.totalNumberOfBeds = valuee;
    user.maxTimeToHoldABed = hour;
    let formdata = new FormData();
    formdata.append("role", user.role);
    formdata.append("userName", user.userName);
    formdata.append("address", user.address);
    formdata.append("shelterName", user.shelterName);
    formdata.append("phone", user.phone);
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    formdata.append("city", user.city);
    formdata.append("state", user.state);
    formdata.append("contact_person_name", user.contact_person_name);
    formdata.append("zipCode", user.zipCode);
    formdata.append( "totalAllowedForReservation", user.totalAllowedForReservation );
    formdata.append("totalNumberOfBeds", user.totalNumberOfBeds);
    formdata.append("description", description);
    formdata.append("rules", rules);
    formdata.append("maxTimeToHoldABed", user.maxTimeToHoldABed);
    formdata.append("storage", storage);
    formdata.append("storage_message", storage_message);
    formdata.append("shelterIsFor", shelter_For);
    fileList.map((image, index)=> {
      formdata.append("image", image);
    })
    foods.map((item, index)=> {
      formdata.append("food", item);
    })
    amenities.map((item, index)=> {
      formdata.append("amenities", item);
    })
    pets.map((item, index)=> {
      formdata.append("pets", item);
    })
    

    if (validForm()) {
      console.log(formdata);
      var response = await providerSignup(formdata)
        if (response.status === 200) {
          toast.success("Account Created Successfully!");
          setTimeout(() => {
            navigate("/login");
            toast.success("Please Login To Continue!");
        }, 1500);
        }else{
        toast.error("Something went wrong !");
        console.log(response);
      }
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
              placeholder="Create a username"
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
              placeholder="Create a shelter name"
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
              placeholder="Enter street address"
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
                  placeholder="Enter City"
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
                  placeholder="Enter State"
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
                    type="number"
                    placeholder="Enter Zip Code"
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
              placeholder="************"
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
              PHONE NUMBER
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
              placeholder="(###) ###-####"
              type="tel"
              // value={phoneValue}
              inputMode="numeric"
              autoComplete="cc-number"
              name="cardNumber"
              className="first form-control login_field login_fieldw"
              id="cardNumber"
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

          <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              ENTER EMAIL ADDRESS<span className="star_red">*</span>
            </label>
            <input
              name="email"
              value={user.email}
              onChange={handleInput}
              type="text"
              placeholder="user@gmail.com"
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
              placeholder="Create contact person name"
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
            <div
              type="number"
              name="totalNumberOfBeds"
              onChange={handleInput}
              className="cricle_div"
            >
              {valuee}
            </div>
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
            <div className="cricle_div bluplus">{hour} Hr</div>
            <div className="calcu_btns">
              <button
                className="plusbtn plusgreen bluplus"
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
        <p className="following">
          THE FOLLOWING ITEMS CAN ALSO BE ADDED LATER UNDER “EDIT PROFILE”
        </p>
        <div className="row">
          <div className="col-lg-6">
            <div classname="checkboxs">
              <p style={{ fontWeight: "600" }} className="checks_labels">
                MEALS PROVIDED (check all that apply):
              </p>
              {foodTypes.map((item, index)=> {
                return (
                  <div className="form-group form-check" key={index}>
                    <input
                      type="checkbox"
                      name="breakfast"
                      onChange={(e)=> FoodHandle(e.target.value)}
                      className="form-check-input"
                      id="exampleCheck1"
                      value={item}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item}
                    </label>
                  </div>
                )
              })}
              
            </div>
          </div>
          <div className=" col-lg-6 mobile_view">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
              className="checks_labels"
            >
              Shelter Is For:
            </p>
            <div className="radiobnts">
              {shelterTypes.map((item, index)=> {
                return(
                  <div className="form-check form-group" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shelters"
                      id={`shelters${index}`}
                      defaultValue="option1"
                      defaultChecked
                      // onChange={()=> setType(item.name)}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor={`shelters${index}`}
                    >
                      {item}
                    </label>
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label
            style={{
              // fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
            htmlFor="inputEmail3"
            className="col-sm-2 col-form-label"
          >
            HOURS OF INTAKE:
          </label>
          <div className="col-lg-4 pl-0">
            <input type="number" className="form-control" id="" />
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-6">
            <div style={{ marginBottom: "20px" }} classname="checkboxs">
              <p style={{ fontWeight: "600" }} className="checks_labels">
                PETS ALLOWED (Check all that apply):
              </p>
              <div className="animals">
              {petTypes.map((item, index)=> {
                return (
                  <div className="form-group form-check" key={index}>
                    <input
                      type="checkbox"
                      name="breakfast"
                      onChange={(e)=> PetHandle(e.target.value)}
                      className="form-check-input"
                      id="exampleCheck1"
                      value={item}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item}
                    </label>
                  </div>
                  )
                })}
              </div>
            </div>
            <div classname="checkboxs">
              <p style={{ fontWeight: "600" }} className="checks_labels">
                STORAGE AVAILABLE:
              </p>
              <div className="storages">
              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id={`storages0`}
                  defaultValue="option1"
                  onChange={()=> setStorage(false)}
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor={`storages0`}
                >
                  None
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id={`storages1`}
                  defaultValue="option1"
                  onChange={()=> setStorage(true)}
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor={`storages1`}
                >
                  Yes
                </label>
                <br/>
                {storage?
                  <input type="number" className="form-control" id="" placeholder="Description types of storages " />
                :null}
              </div>
              
             
                
              </div>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div classname="checkboxs">
              <p style={{ fontWeight: "600" }} className="checks_labels">
                AMENITIES PROVIDED (check all that apply):
              </p>
              {ameniity_types.map((item, index)=> {
                return (
                  <div className="form-group form-check" key={index}>
                    <input
                      type="checkbox"
                      name="breakfast"
                      onChange={(e)=> AmenityHandle(e.target.value)}
                      className="form-check-input"
                      id="exampleCheck1"
                      value={item}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item}
                    </label>
                  </div>
                  )
                })}
            </div>
          </div>
        </div>

        <div className="col-lg-6"></div>
        <div className="images section mt-4">
          <p className="checks_labels">ADD IMAGES </p>

          <input type="file" id="image" style={{display: 'none'}} onChange={selectImage}/>

          <div className="flex_images">
            {fileList.map((item, index)=> {
              return (
                <div className="text-center" key={index}>
                  <img src={item} width="100px" height="100px" />
                  <br/>
                  <span className="text-white bg-danger" style={{cursor: 'pointer', borderRadius: '50%', padding: '5px 10px'}} onClick={()=> deletePhoto(index)}>X</span>
                </div>
              )
            })}
            {fileList.length < 5?
              <img src="/images/emptyimage.svg" width="100px" height="100px" alt='icon' onClick={chooseImage}/>
            :null}
          </div>
        </div>
        <div className="mobile_col row mt-5 mb-5">
          <div className="col">
            <p className="checks_labels">DESCRIPTION</p>
            <textarea
              className="checks_labels login_field1 with_input"
              type="text" onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>
          <p></p>
          <div className="col ">
            <p className="checks_labels">RULES/REQUIREMENTS</p>
            <textarea
              className="checks_labels login_field1 with_input"
              type="text" onChange={(e)=> setRules(e.target.value)}
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

export default SheltorEditProfile;
