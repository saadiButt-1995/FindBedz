import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { getShelterDetails, providerSignup } from "../../services/auth";
import { Checkbox } from "antd";
import { Wrapper } from "../Auth/Auth.styled";
import MainNav from "../Auth/Navs/MainNav";
// import { results, states } from "../../services/states_counties";
import Spinner from "../Loaders/buttonTailSpinner";
import { TimePicker } from "antd";
import moment from "moment";

function Sheltorsignup() {
  const [loading, setLoading] = useState(false);
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
    hours_of_intake: "",
  });
  const navigate = useNavigate();

  const [phoneValue, setPhonevalue] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [storage, setStorage] = useState("none");
  const [storage_message, setStorageMessage] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [foods, setFoods] = useState([]);
  const [pets, setPets] = useState([]);
  const [shelter_For, setShelterFor] = useState("");
  const [valuee, setValuee] = useState(0);
  const [incVal, setIncVal] = useState(0);
  const [hour, setHour] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [images, setImages] = useState([]);
  const [terms, setTerms] = useState(false);
  const [lat_lng, setLatLng] = useState("");
  const [states, setStates] = useState([]);
  const [counties, setCounties] = useState([]);

  const shelterTypes = [
    { showname: "Adults ( any gender )", name: "adults" },
    { showname: "Female Only", name: "female" },
    { showname: "Male Only", name: "male" },
    { showname: "Family Friendly", name: "family" },
  ];
  const foodTypes = [
    { showname: "Breakfast", name: "breakfast" },
    { showname: "Lunch", name: "lunch" },
    { showname: "Dinner", name: "dinner" },
    { showname: "Snacks", name: "snacks" },
  ];
  const ameniity_types = [
    { showname: "Power Outlets", name: "power_outlets" },
    { showname: "Computer Access", name: "computer_access" },
    { showname: "WIFI", name: "wifi" },
    { showname: "Shower", name: "shower" },
  ];
  const petTypes = [
    { showname: "Dogs", name: "dogs" },
    { showname: "Cats", name: "cats" },
  ];

  const [errField, setErrField] = useState({
    userNameErr: "",
    passwordErr: "",
    shelterNameErr: "",
    phoneErr: "",
    emailErr: "",
    addressErr: "",
    cityErr: "",
    stateErr: "",
    countyErr: "",
    zipCodeErr: "",
    contact_person_nameErr: "",
    role: "shelter",
  });

  useEffect(() => {
    (async () => {
      const where = encodeURIComponent(
        JSON.stringify({
          countyName: {
            $exists: true,
          },
          state: {
            $exists: true,
          },
        })
      );
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Area?count=1&limit=1000000&order=state&keys=countyName,state,stateAbbreviation&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id":
              "VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL", // This is the fake app's application id
            "X-Parse-Master-Key": "UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V", // This is the fake app's readonly master key
          },
        }
      );
      const data = await response.json(); // Here you have the data that you need
      let states = [];
      states = data.results.map((item) => {
        return item.state;
      });
      var unique = states.filter(onlyUnique);
      setStates(unique);
    })();
  }, []);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const changeState = (e) => {
    const state = e.target.value;
    setUser({ ...user, state: state });
    getCountiesOfState(state);
  };

  const changeCounty = (e) => {
    const county = e.target.value;
    setUser({ ...user, county: county });
  };

  const getCountiesOfState = (state) => {
    (async () => {
      const where = encodeURIComponent(
        JSON.stringify({
          state: state,
        })
      );
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Area?limit=1000&order=state&keys=countyName,state,stateAbbreviation&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id":
              "VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL", // This is the fake app's application id
            "X-Parse-Master-Key": "UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V", // This is the fake app's readonly master key
          },
        }
      );
      const data = await response.json(); // Here you have the data that you need
      let counties = data.results.map((item) => {
        return item.countyName;
      });
      var unique = counties.filter(onlyUnique);
      setCounties(unique);
    })();
  };

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (name === "zipCode") {
      if (value.length > 5) {
        return;
      }
    }
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
      countyErr: "",
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
    if (user.county === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        countyErr: "Please Enter County",
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
      if (incVal > valuee - 1) {
        setIncVal(valuee - 1);
      }
    } else {
      setValuee(0);
    }
  };
  const normalizeCardNumber = (value) => {
    let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let maskedText = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? " - " + x[3] : "");
    return maskedText;
  };

  const FoodHandle = (value) => {
    var exists = false;
    var index = 0;
    foods.forEach((item, key) => {
      if (item === value) {
        exists = true;
        index = key;
      }
    });
    if (!exists) {
      foods.push(value);
    } else {
      foods.splice(index, 1);
    }
    setTimeout(() => {
      setFoods(foods);
    }, 200);
  };

  const AmenityHandle = (value) => {
    var exists = false;
    var index = 0;
    amenities.forEach((item, key) => {
      if (item === value) {
        exists = true;
        index = key;
      }
    });
    if (!exists) {
      amenities.push(value);
    } else {
      amenities.splice(index, 1);
    }
    setTimeout(() => {
      setAmenities(amenities);
    }, 200);
  };

  const PetHandle = (value) => {
    var exists = false;
    var index = 0;
    pets.forEach((item, key) => {
      if (item === value) {
        exists = true;
        index = key;
      }
    });
    if (!exists) {
      pets.push(value);
    } else {
      pets.splice(index, 1);
    }
    setTimeout(() => {
      setPets(pets);
    }, 200);
  };

  const chooseImage = () => {
    document.getElementById("image").click();
  };

  const selectImage = (event) => {
    var imagefile = document.querySelector("#image");
    if (event.target.files && event.target.files[0]) {
      const files = Array.from(imagefile.files);
      setImages(images.concat(files[0]));
      let img = event.target.files[0];

      // check resolutions
      if (isImage(img.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = async () => {
          setFileList(fileList.concat(reader.result));
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      } else {
        toast.error("Invalid image format..", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        return false;
      }
    }
  };
  const isImage = (filename) => {
    var ext = getExtension(filename);
    if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif") {
      return true;
    }
    return false;
  };
  const getExtension = (filename) => {
    var parts = filename.split(".");
    return parts[parts.length - 1];
  };

  const deletePhoto = (index) => {
    if (window.confirm("Sure to delete this photo?")) {
      fileList.splice(index, 1);
      setTimeout(() => {
        setLoading(true);
        setFileList(fileList);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }, 500);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    formdata.append("county", user.county);
    formdata.append("contact_person_name", user.contact_person_name);
    formdata.append("zipCode", user.zipCode);
    formdata.append(
      "totalAllowedForReservation",
      user.totalAllowedForReservation
    );
    formdata.append("totalNumberOfBeds", user.totalNumberOfBeds);
    formdata.append("coords", lat_lng);
    if (user.maxTimeToHoldABed !== "")
      formdata.append("maxTimeToHoldABed", user.maxTimeToHoldABed);
    if (rules !== "") formdata.append("rules", rules);
    if (description !== "") formdata.append("description", description);
    if (storage !== "") formdata.append("storage", storage);
    if (storage_message !== "")
      formdata.append("storage_available_desc", storage_message);
    if (shelter_For) formdata.append("shelterIsFor", shelter_For);
    if (user.hours_of_intake)
      formdata.append("hours_of_intake", user.hours_of_intake);
    if (images.length > 0) {
      images.forEach((image) => {
        formdata.append("image", image);
      });
    }
    if (foods.length > 0) {
      foods.forEach((item) => {
        formdata.append("food", item);
      });
    } else {
      // formdata.append("food", []);
    }
    if (amenities.length > 0) {
      amenities.forEach((item) => {
        formdata.append("amenities", item);
      });
    } else {
      // formdata.append("amenities", []);
    }
    if (pets.length > 0) {
      pets.forEach((item) => {
        formdata.append("pets_allowed", item);
      });
    } else {
      // formdata.append("pets_allowed", []);
    }

    if (!validForm()) {
      setLoading(false);
      toast.error("Validation Error!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    if (!terms) {
      setLoading(false);
      toast.error("Please allow this app to access your device's location!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }

    // if (
    //   user.totalAllowedForReservation === "" ||
    //   user.totalAllowedForReservation === 0
    // ) {
    //   toast.error("Total Allowed For Reservation Cannot Be Empty!", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    //   setLoading(false);
    //   return;
    // }
    if (user.totalNumberOfBeds === "" || user.totalNumberOfBeds === 0) {
      toast.error("Please Enter Total Number Of Beds!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setLoading(false);
      return;
    }
    // if (user.maxTimeToHoldABed === "" || user.maxTimeToHoldABed === 0) {
    //   toast.error("Maximum Time To Holding Bed Cannot Be Empty!", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    //   setLoading(false);
    //   return;
    // }
    try {
      var response = await providerSignup(formdata);
      if (response.status === 201) {
        await getShelterDetails(response.data.shelter._id);
        setLoading(false);
        toast.success("Account has been created successfully!");
        setTimeout(() => {
          navigate("/login");
          toast.success("Please Login To Continue!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }, 1500);
      } else {
        setLoading(false);
        toast.error("Something went wrong !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log(response);
      }
    } catch (e) {
      setLoading(false);
      var error = "";
      console.log("ERRORChoose a password*");
      if (e.response) {
        console.log(e.response);
        error = e.response;
        if (e.response.data) {
          console.log(e.response.data);
          error = e.response.data;
          if (e.response.data.message) {
            console.log(e.response.data.message);
            error = e.response.data.message;
          }
        }
      }
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const onChange = (e) => {
    // setTerms(e.target.checked)
    getMyLocation(e);
    // setLatLng('')
  };

  const getMyLocation = (e) => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          setLatLng(`${position.coords.latitude},${position.coords.longitude}`);
          setTerms(e.target.checked);
        },
        (error) => {
          toast.error("Error in getting location!");
        }
      );
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <MainNav />
      <div className="account">
        <p className="header_title">CREATE AN ACCOUNT</p>
        <div className="row justify-content-around mt-5">
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
            <div className="row justify-content-md-between mt-4">
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
              <div className="col-lg-3 px-0 pl-1">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    STATE<span className="star_red">*</span>
                  </label>
                  <select
                    className="form-control login_field"
                    name="states"
                    id="states"
                    onChange={changeState}
                  >
                    <option className="login_field" selected disabled>
                      Select State
                    </option>
                    {states.map((item, index) => {
                      return (
                        <option
                          className="login_field"
                          key={index}
                          value={item}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>

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

              <div className="col-lg-3 px-0 pl-1">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    COUNTY<span className="star_red">*</span>
                  </label>
                  <select
                    className="form-control login_field"
                    name="counties"
                    id="counties"
                    onChange={changeCounty}
                  >
                    <option className="login_field" selected disabled>
                      Select County
                    </option>
                    {counties.map((item, index) => {
                      return (
                        <option
                          className="login_field"
                          key={index}
                          value={item}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>

                  {errField.countyErr.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "11px",
                        fontFamily: "popreg",
                      }}
                    >
                      {errField.countyErr}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-lg-3 px-0 pl-1">
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
              <div className="col-md-12 px-0">
                <Checkbox style={{ paddingTop: "20px" }} onChange={onChange}>
                  <span className="label_input ml-2">
                    SYSTEM WILL USE YOUR DEVICE’S LOCATION SERVICES
                    <span className="star_red">*</span>
                  </span>
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="label_input mb-4">
              <label htmlFor="validationCustom03">
                PASSWORD <span className="star_red">*</span>
              </label>
              <input
                name="password"
                onChange={handleInput}
                value={user.password}
                placeholder="Choose a password"
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
                {foodTypes.map((item, index) => {
                  return (
                    <div className="form-group form-check" key={index}>
                      <input
                        type="checkbox"
                        name="breakfast"
                        onChange={(e) => FoodHandle(e.target.value)}
                        className="form-check-input"
                        id={`foods${index}`}
                        value={item.name}
                      />
                      <label
                        className="form-check-label checks_labels"
                        htmlFor={`foods${index}`}
                      >
                        {item.showname}
                      </label>
                    </div>
                  );
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
                SHELTER IS FOR:
              </p>
              <div className="radiobnts">
                {shelterTypes.map((item, index) => {
                  return (
                    <div className="form-check form-group" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shelters"
                        id={`shelters${index}`}
                        onChange={() => setShelterFor(item.name)}
                      />
                      <label
                        className="form-check-label checks_labels"
                        htmlFor={`shelters${index}`}
                      >
                        {item.showname}
                      </label>
                    </div>
                  );
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
              <TimePicker.RangePicker
                showTime={{ format: "HH:mm" }}
                onChange={(e) =>
                  setUser({
                    ...user,
                    hours_of_intake: `${moment(e[0]._d).format(
                      "YYYY-M-d HH:mm:ss"
                    )} --  ${moment(e[1]._d).format("YYYY-M-d HH:mm:ss")}`,
                  })
                }
              />
              {/* <input type="text" name="hours_intake" className="form-control" id="hours_intake" onChange={handleInput}/> */}
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="row">
            <div className="col-lg-6">
              <div style={{ marginBottom: "20px" }} classname="checkboxs">
                <p style={{ fontWeight: "600" }} className="checks_labels">
                  PETS ALLOWED (Check all that apply):
                </p>
                <div className="animals">
                  {petTypes.map((item, index) => {
                    return (
                      <div className="form-group form-check" key={index}>
                        <input
                          type="checkbox"
                          name="breakfast"
                          onChange={(e) => PetHandle(e.target.value)}
                          className="form-check-input"
                          id={`pets${index}`}
                          value={item.name}
                        />
                        <label
                          className="form-check-label checks_labels"
                          htmlFor={`pets${index}`}
                        >
                          {item.showname}
                        </label>
                      </div>
                    );
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
                      name="storages"
                      id={`storages0`}
                      onChange={() => setStorage("none")}
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
                      name="storages"
                      id={`storages1`}
                      onChange={() => setStorage("yes")}
                    />
                    <label
                      className="form-check-label checks_labels"
                      htmlFor={`storages1`}
                    >
                      Yes
                    </label>
                    <br />
                    {storage === "yes" ? (
                      <input
                        type="text"
                        style={{ marginLeft: "-20px" }}
                        className="form-control"
                        id=""
                        placeholder="Description types of storages"
                        onChange={(e) => setStorageMessage(e.target.value)}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div classname="checkboxs">
                <p style={{ fontWeight: "600" }} className="checks_labels">
                  AMENITIES PROVIDED (check all that apply):
                </p>
                {ameniity_types.map((item, index) => {
                  return (
                    <div className="form-group form-check" key={index}>
                      <input
                        type="checkbox"
                        name="breakfast"
                        onChange={(e) => AmenityHandle(e.target.value)}
                        className="form-check-input"
                        id={`amenities${index}`}
                        value={item.name}
                      />
                      <label
                        className="form-check-label checks_labels"
                        htmlFor={`amenities${index}`}
                      >
                        {item.showname}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="images section mt-4">
              <p style={{ fontWeight: "600" }} className="checks_labels">
                ADD IMAGES
              </p>

              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={selectImage}
                multiple
              />

              <div className="flex_images">
                {fileList.map((item, index) => {
                  return (
                    <div className="text-center" key={index}>
                      <img
                        src={item}
                        width="100px"
                        height="100px"
                        alt="image123"
                      />
                      <br />
                      <span
                        className="text-white bg-danger"
                        style={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          padding: "5px 10px",
                        }}
                        onClick={() => deletePhoto(index)}
                      >
                        X
                      </span>
                    </div>
                  );
                })}
                {fileList.length < 5 ? (
                  <img
                    src="/images/emptyimage.svg"
                    width="100px"
                    height="100px"
                    alt="icon"
                    onClick={chooseImage}
                  />
                ) : null}
              </div>
            </div>
            <div className="mobile_col row mt-5 mb-5">
              <div className="col">
                <p className="checks_labels">DESCRIPTION</p>
                <textarea
                  className="checks_labels login_field1 with_input"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <p></p>
              <div className="col ">
                <p className="checks_labels">RULES/REQUIREMENTS</p>
                <textarea
                  className="checks_labels login_field1 with_input"
                  type="text"
                  onChange={(e) => setRules(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="signup_footer mt-2">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <button
                onClick={submit}
                className={`signupbtn1 ${!terms ? "btn-secondary" : ""}`}
                disabled={!terms ? "disabled" : ""}
              >
                SIGNUP & CONTINUE
              </button>
              <Link className="" to="/">
                <p className="footer_sign_up">Cancel</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Sheltorsignup;
