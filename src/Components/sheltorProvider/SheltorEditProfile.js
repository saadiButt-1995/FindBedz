import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getShelterDetails, updateShelterDetails } from "../../services/auth";
import $ from 'jquery'
import { states_with_nick } from "../../services/states_counties";
import DashboardNav from '../Auth/Navs/DashboardNav'

function ShelterEditProfile() {
  const navigate = useNavigate()
  const u = JSON.parse(localStorage.getItem("user_data"));
  const user_id = localStorage.getItem("user")
  const token = `Bearer ${localStorage.getItem("token")}`

  const [user, setUser] = useState({
    userName: u.userName,
    password: u.password,
    shelterName: u.shelterName,
    phone: u.phone,
    email: u.email,
    address: u.address,
    city: u.city,
    state: u.state,
    contact_person_name: u.contact_person_name,
    zipCode: u.zipCode,
    role: "shelter",
    totalAllowedForReservation: u.totalAllowedForReservation,
    totalNumberOfBeds: u.totalNumberOfBeds,
    description: u.description,
    rules: u.rules,
    maxTimeToHoldABed: u.maxTimeToHoldABed,
    food: u.food,
    shelterIsFor: "family",
    hours_of_intake: u.hours_of_intake?u.hours_of_intake:0
  });

  const [description, setDescription] = useState(u.description?u.description:"");
  const [rules, setRules] = useState(u.rules?u.rules:"");
  const [storage, setStorage] = useState(u.storage==="yes"?"yes":"none");
  const [storage_message, setStorageMessage] = useState(u.storage_available_desc?u.storage_available_desc:"");
  const [amenities, setAmenities] = useState(u.amenities);
  const [foods, setFoods] = useState(u.food);
  const [pets, setPets] = useState(u.pets_allowed);
  const [shelter_For, setShelterFor] = useState('')
  const [valuee, setValuee] = useState(u.totalNumberOfBeds?u.totalNumberOfBeds:0);
  const [incVal, setIncVal] = useState(u.totalAllowedForReservation?u.totalAllowedForReservation:0);
  const [hour, setHour] = useState(u.maxTimeToHoldABed?u.maxTimeToHoldABed:0);  
  // const [hours_intake, setHoursIntake] = useState(u.hours_intake?u.hours_intake:0);
  const [fileList, setFileList] = useState(u.image);
  const [images, setImages] = useState(u.image);

  const shelterTypes = [
    {showname:'Adults ( any gender )', name: 'adults'}, 
    {showname:'Female Only', name: 'female'}, 
    {showname:'Male Only', name: 'male'}, 
    {showname:'Family Friendly', name: 'family'}
  ]
  const foodTypes = [
    {showname:'Breakfast', name: 'breakfast'}, 
    {showname:'Lunch', name: 'lunch'}, 
    {showname:'Dinner', name: 'dinner'}, 
    {showname:'Snacks', name: 'snacks'}
  ]
  const ameniity_types = [
    {showname:'Power Outlets', name: 'power_outlets'}, 
    {showname:'Computer Access', name: 'computer_access'}, 
    {showname:'WIFI', name: 'wifi'}, 
    {showname:'Shower', name: 'shower'}
  ]
  const petTypes = [
    {showname:'Dogs', name: 'dogs'}, 
    {showname:'Cats', name: 'cats'}, 
  ]

  
  useEffect(()=> {
    /* eslint-disable */
    setValues()
  }, [])

  const setValues = () => {
    u.food.forEach(x=> {
      console.log('Choose a passwordChoose a password******');
      console.log(x);
      foodTypes.forEach((item, index)=> {
        console.log('inner');
        console.log(item);
        if(x === item.name){
          console.log('#food'+index);
          foodTypes[index].checked = true
          $('#food'+index).prop('checked', true);
          console.log('checked');
        }
      })
    })
    u.amenities.forEach(x=> {
      ameniity_types.forEach((item, index)=> {
        if(x === item.name){
          ameniity_types[index].checked = true
          $('#amenities'+index).prop('checked', true);
        }
      })
    })
    u.pets_allowed.forEach(x=> {
      petTypes.forEach((item, index)=> {
        if(x === item.name){
          petTypes[index].checked = true
          $('#pets'+index).prop('checked', true);
        }
      })
    })
    // u.shelterIsFor.forEach(x=> {
      shelterTypes.forEach((item, index)=> {
        if(u.shelterIsFor === item.name){
          shelterTypes[index].checked = true
          $('#shelters'+index).prop("checked", true);
          console.log('checked');
      }
      })
    // })

    if(u.storage === 'none'){
      $('#storages1').prop("checked", true);
    }else{
      $('#storages0').prop("checked", true);
    }
  }

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
    if (user.phone === "" || user.phone.length < 15) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneErr: "Invalid Phone Number",
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
    if (user.zipCode === "" || user.zipCode.length < 5) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        zipCodeErr: "Invalid Zip Code",
      }));
    }

    return formIsValid;
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
    foods.forEach((item, key)=> {
      if(item === value){
        exists = true
        index = key
      }
    })
    if(!exists){
      setFoods(foods.concat(value))
      // foods.push(value)
    }else{
      foods.splice(index, 1)
    }
    // setTimeout(() => {
    //   setFoods(foods)
    // }, 200);
  }

  const AmenityHandle = (value)=> {
    var exists = false
    var index = 0
    amenities.forEach((item, key)=> {
      if(item === value){
        exists = true
        index = key
      }
    })
    if(!exists){
      amenities.push(value)
    }else{
      amenities.splice(index, 1)
    }
    setTimeout(() => {
      setAmenities(amenities)
    }, 200);
  }

  const PetHandle = (value)=> {
    var exists = false
    var index = 0
    pets.forEach((item, key)=> {
      if(item === value){
        exists = true
        index = key
      }
    })
    if(!exists){
      pets.push(value)
    }else{
      pets.splice(index, 1)
    }
    setTimeout(() => {
      setPets(pets)
    }, 200);
  }

  const chooseImage = ()=> {
    document.getElementById("image").click();
  }

  const selectImage = (event)=> {
    var imagefile = document.querySelector('#image');
    if (event.target.files && event.target.files[0]) {
      
        let img = event.target.files[0];

        // check resolutions
        if (isImage(img.name)) {
          const files = Array.from(imagefile.files);
          setImages(images.concat(files[0]))
          let reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = async() =>{                
              setFileList(fileList.concat(reader.result))
          };
          reader.onerror = function (error) {
            console.log("Error: ", error);
          };
        }else { 
          toast.error('Invalid image format..')
          return false
        }
    }
  }
  const isImage = (filename) => {
    var ext = getExtension(filename);
    if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif"){
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
      images.splice(index, 1)
      setTimeout(() => {
        setImages(images)
        setFileList(fileList)
        var des = description
        setDescription('')
        setTimeout(() => {
          setDescription(des)
        }, 1000);
      }, 500);
    }
  }

  const submit = async (e) => {
    e.preventDefault();
    delete user.password
    if (user.food === "" || user.food === undefined) {
      delete user.food;
    }
    user.totalAllowedForReservation = incVal;
    user.totalNumberOfBeds = valuee;
    user.maxTimeToHoldABed = hour;
    let formdata = new FormData();
    formdata.append("role", user.role);
    formdata.append("address", user.address);
    formdata.append("shelterName", user.shelterName);
    formdata.append("phone", user.phone);
    formdata.append("email", user.email);
    formdata.append("city", user.city);
    formdata.append("state", user.state);
    formdata.append("contact_person_name", user.contact_person_name);
    formdata.append("zipCode", user.zipCode);
    formdata.append( "totalAllowedForReservation", user.totalAllowedForReservation );
    formdata.append("totalNumberOfBeds", user.totalNumberOfBeds);
    if(user.maxTimeToHoldABed !== '')
      formdata.append("maxTimeToHoldABed", user.maxTimeToHoldABed);
    if(rules !== '')
      formdata.append("rules", rules);
    if(description !== '')
      formdata.append("description", description);
    if(storage !== '')
      formdata.append("storage", storage);
    if(storage_message !== '')
      formdata.append("storage_available_desc", storage_message);
    if(shelter_For)
      formdata.append("shelterIsFor", shelter_For);
    if(u.hours_of_intake)
      formdata.append("hours_of_intake", u.hours_of_intake);
    if(images.length > 0){
      images.forEach((image)=> {
        formdata.append("image", image);
      })
    }
    if(foods.length > 0){
      foods.forEach((item)=> {
        formdata.append("food", item);
      })
    }else{
      formdata.append("food", []);
    }
    if(amenities.length > 0){
      amenities.forEach((item)=> {
        formdata.append("amenities", item);
      })
    }else{
      formdata.append("amenities", []);
    }
    if(pets.length > 0){
      pets.forEach((item)=> {
        formdata.append("pets_allowed", item);
      })
    }else{
      formdata.append("pets_allowed", []);
    }
    // var obj = {
    //   role: user.role,
    //   address: user.address,
    //   shelterName: user.shelterName,
    //   phone: user.phone,
    //   email: user.email,
    //   city: user.city,
    //   state: user.state,
    //   zipCode: user.zipCode,
    //   contact_person_name: user.contact_person_name,
    //   totalAllowedForReservation: user.totalAllowedForReservation,
    //   citytotalNumberOfBeds: user.totalNumberOfBeds,
    // }
    // if(user.maxTimeToHoldABed !== '')
    //   obj.maxTimeToHoldABed = user.maxTimeToHoldABed
    //   // formdata.append("maxTimeToHoldABed", user.maxTimeToHoldABed);
    // if(rules !== '')
    //   obj.rules = rules
    // if(description !== '')
    //   obj.description = description
    // if(storage !== '')
    //   obj.description = description
    // if(storage_message !== '')
    //   obj.storage_available_desc = storage_message
    // if(shelter_For)
    //   obj.shelterIsFor = shelter_For
    // if(hours_intake)
    //   obj.hours_of_intake = hours_intake
    // if(images.length > 0){
    //   obj.image = images
    // }
    // if(foods.length > 0){
    //   obj.food = foods 
    // }
    // if(amenities.length > 0){
    //   obj.amenities = amenities 
    // }
    // if(pets.length > 0){
    //   obj.pets_allowed = pets
    // }
    setTimeout(async() => {
      if (!validForm()) {
        toast.error('Validation Error!')
        return
      }
        try{
          var response = await updateShelterDetails(formdata, user_id, token)
          if(response.status === 200){
            toast.success("Updated Successfully!");
            getShelterDetails(response.data.shelter.id)
              setTimeout(() => {
                navigate("/");
              }, 1500);
            }else{
              toast.error("Fields Cannot be empty");
              console.log(response);
            }
        }catch(e){
          console.log('ERRORChoose a password*');
          toast.error(e.response.data.message);
        }
    }, 500);

  };
  return (
    <div className="Sheltorsignup">
     <ToastContainer />
     <DashboardNav/>
        <div className="popo">
          <img
            className=""
            src="/images/edit_user.svg"
            alt=""
          />
        </div>
     
      <p className="indi_title" style={{fontSize: '30px'}}> EDIT PROFILE</p>
      <div className="row justify-content-around">
        <div className="col-lg-5">
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
            USERNAME<span className="star_red">*</span>
            </label>
            <input
              name="userName"
              value={user.userName}
              onChange={handleInput}
              type="text"
              placeholder="Create a username"
              className="form-control login_field"
              id="validationCustom01"
              disabled
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
                <select className="form-control login_field" name="state" id="state"
                  onChange={handleInput}
                  >
                    <option className="login_field" selected disabled>Select State</option>
                    {states_with_nick.map((item, index)=> {
                      return (
                        <option className="login_field" key={index} value={item.name} selected={item.name === user.state?true:false}>{item.name}</option>
                      )
                    })}
                </select>
                {/* <input
                  name="state"
                  onChange={handleInput}
                  value={user.state}
                  type="text"
                  className="form-control login_field"
                  id="validationCustom02"
                  placeholder="Enter State"
                  required
                /> */}
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
              PASSWORD<span className="star_red">*</span>
            </label>
            <input
              name="password"
              onChange={handleInput}
              type="password"
              value={user.password}
              placeholder="Choose a password"
              className="form-control login_field"
              id="validationCustom03"
              disabled
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
              inputMode="numeric"
              name="text"
              className="first form-control login_field login_fieldw"
              id="text"
              defaultValue={user.phone}
              onChange={(event) => {
                const { value } = event.target;
                user.phone = value  
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
              placeholder="user@example.com"
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
          <div className="headind_pro">MAXIMUM TIME TO HOLD A BED</div>

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
                      name={`food${index}`}
                      onChange={(e)=> FoodHandle(e.target.value)}
                      className="form-check-input"
                      id={`food${index}`}
                      value={item.name}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item.showname}
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
                      name={`shelterisFor`}
                      id={`shelters${index}`}
                      onChange={()=> setShelterFor(item.name)}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor={`shelters`}
                    >
                      {item.showname}
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
              fontWeight: "600",
              letterSpacing: "1px",
            }}
            htmlFor="inputEmail3"
            className="col-sm-2 col-form-label"
          >
            HOURS OF INTAKE:
          </label>
          <div className="col-lg-4 pl-0">
            <input name="hours_of_intake" value={u.hours_of_intake} type="number" className="form-control" id="" onChange={handleInput}/>
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
                      name={`pets${index}`}
                      onChange={(e)=> PetHandle(e.target.value)}
                      className="form-check-input"
                      id={`pets${index}`}
                      value={item.name}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item.showname}
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
                  name={`storages`}
                  id={`storages_none`}
                  defaultValue="option1"
                  onChange={()=> setStorage('none')}
                  />
                <label
                  className="form-check-label checks_labels"
                  htmlFor={`storages`}
                >
                  None
                </label>
              </div>
              <div className="form-group">
                <input
                  className="form-check-input"
                  type="radio"
                  name="storages"
                  id={`storages_yes`}
                  defaultValue="option1"
                  onChange={()=> setStorage('yes')}
                />
                <label
                  className="form-check-label checks_labels"
                  htmlFor={`storages`}
                >
                  Yes
                </label>
                <br/>
                {storage === 'yes'?
                  <input type="text" style={{marginLeft: '-20px'}} className="form-control" id="" placeholder="Description types of storages" onChange={(e)=> setStorageMessage(e.target.value)} />
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
                      name={`amenities${index}`}
                      onChange={(e)=> AmenityHandle(e.target.value)}
                      className="form-check-input"
                      id={`amenities${index}`}
                      value={item.name}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor="exampleCheck1"
                    >
                      {item.showname}
                    </label>
                  </div>
                  )
                })}
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="images section mt-4">
          <p style={{ fontWeight: "600" }} className="checks_labels">
          ADD IMAGES
          </p>

          <input type="file" id="image" style={{display: 'none'}} onChange={selectImage} multiple/>

          <div className="flex_images">
            {fileList.map((item, index)=> {
              return (
                <div className="text-center" key={index}>
                  <img src={item} width="100px" height="100px" alt="image123"/>
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
              value={description}
              type="text" onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>
          <p></p>
          <div className="col ">
            <p className="checks_labels">RULES/REQUIREMENTS</p>
            <textarea
              className="checks_labels login_field1 with_input"
              value={rules}
              type="text" onChange={(e)=> setRules(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      </div>
      <div className="signup_footer">
        <Link onClick={submit} className="" to="/sheltor-dashboard">
          <button className="shel_up_btn w-100 px-5">SUBMIT CHANGES</button>
        </Link>
        <p className="footer_sign_up">Cancel</p>
      </div>
    </div>
  );
}

export default ShelterEditProfile;
