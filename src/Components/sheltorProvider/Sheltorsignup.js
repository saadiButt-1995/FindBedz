import { useState } from "react";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
function Sheltorsignup() {
  const [value, setValue] = useState(0);
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
    if (incVal < 6) {
      setIncVal(incVal + 1);
    } else {
      setIncVal(6);
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
    if (value < 30) {
      setValue(value + 1);
    } else {
      setValue(30);
    }
  };
  const decreament = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };

  return (
    <div className="Sheltorsignup">
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
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
            />
          </div>
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              ENTER SHELTER NAME<span className="star_red">*</span>
            </label>
            <input
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
          </div>
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
              ADDRESS STATE<span className="star_red">*</span>
            </label>
            <input
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
            />
          </div>
          <div className="row justify-content-md-between">
            <div className="col-lg-3 px-0 ">
              <div className="mb-3 label_input">
                <label htmlFor="validationCustom02">
                  CITY<span className="star_red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control login_field"
                  id="validationCustom02"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3 px-0">
              <div className="mb-3 label_input">
                <label htmlFor="validationCustom02">
                  STATE<span className="star_red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control login_field"
                  id="validationCustom02"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3 px-0">
              <div className="mobile_p pr-0">
                <div className="mb-3 label_input">
                  <label htmlFor="validationCustom02">
                    ZIP CODE<span className="star_red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control login_field"
                    id="validationCustom02"
                    required
                  />
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
              type="text"
              className="form-control login_field"
              id="validationCustom03"
              required
            />
          </div>
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              PHONE <span className="star_red">*</span>
            </label>
            <input
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
          </div>
          <div className="mb-3 label_input">
            <label htmlFor="validationCustom02">
              ENTER EMAIL ADDRESS<span className="star_red">*</span>
            </label>
            <input
              type="text"
              className="form-control login_field"
              id="validationCustom02"
              required
            />
          </div>

          <div className="mb-3 label_input">
            <label htmlFor="validationCustom01">
              NAME OF THE CONTACT PERSON <span className="star_red">*</span>
            </label>
            <input
              type="text"
              className="form-control login_field"
              id="validationCustom01"
              required
            />
          </div>
        </div>
      </div>
      <div className="progress_div">
        <div className="progress_card">
          <div className="headind_pro">TOTAL NUMBER OF BEDS YOU HAVE</div>

          <div className="progress1">
            <div className="cricle_div">{value}</div>
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
      <div className="container mt-4">
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
        <div className="signup_footer">
          <Link className="" to="/sheltor-dashboard">
            <button className="shel_up_btn w-100 px-5">
              SIGNUP & CONTINUE
            </button>
          </Link>
          <p className="footer_sign_up">Cancel</p>
        </div>
      </div>
    </div>
  );
}

export default Sheltorsignup;
