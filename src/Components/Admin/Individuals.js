import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axios } from "../../config";
import { getShelterDetails, login, setLocalValues } from "../../services/auth";
import { Wrapper } from "../Admin/Layout/AdminLayouts.styled";
import Base from "./Layout/Base";
import Spinner from "../Loaders/buttonTailSpinner";

export default function Individuals() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      var response = await axios.get("users/getUsers?role=user");
      if (response.status === 200) {
        setLoading(false);
        setData(response.data.results);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  const agencyControl = async (agency, routeName) => {
    try {
      var response = await login({
        userName: agency.userName,
        password: agency.password,
      });
      if (response.status === 200) {
        toast.success("Shelter Login Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(async () => {
          setLoading(false);
          if (response.data.role === "shelter") {
            await getShelterDetails(response.data.user);
            setTimeout(() => {
              if (routeName === "login") {
                navigate("/sheltor-dashboard");
              } else {
                navigate("/shelter-editprofile");
              }
            }, 1000);
          } else if (response.data.role === "user") {
            await setLocalValues(response.data);
            navigate("/individual-landingpage");
          } else if (response.data.role === "sheriff") {
            await setLocalValues(response.data);
            if (routeName === "login") {
              navigate("/OrganizationLandingpage");
            } else {
              navigate("/organization-edit-profile");
            }
          }
        }, 1000);
      } else {
        setLoading(false);
        toast.error("error!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (e) {
      setLoading(false);
      var error = "";
      console.log("ERROR");
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
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const renderData = () => {
    /* eslint-disable */
    var items = [];
    if (username.length > 0 || fullname.length > 0) {
      items = data.filter((item) => {
        if (
          item.userName.toLowerCase().includes(username.toLowerCase()) &&
          item.nickName.toLowerCase().includes(fullname.toLowerCase())
        ) {
          return item;
        }
      });
    } else {
      items = data;
    }
    return items.map((item) => {
      return (
        <tr>
          <td>{item.userName}</td>
          <td>{item.nickName}</td>
          <td>{item.gender}</td>
          <td>{item.county}</td>
          <td>{item.state}</td>
          {/* <td>{item.date}</td> */}
          <td>
            {loading ? (
              <Spinner />
            ) : (
              <div className="reserve-action-btns">
                <button
                  className="text-primary"
                  onClick={() => agencyControl(item, "")}
                >
                  MODIFY
                </button>
                {/* <button className="text-danger">DELETE</button> */}
                <button
                  className="text-success login-btn"
                  onClick={() => agencyControl(item, "login")}
                >
                  LOGIN
                </button>
              </div>
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <Wrapper>
      <Base>
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-3">
              <div class="row">
                <div class="col-md-5 m-0 p-0">
                  <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control login_field"
                      id="validationCustomUsername"
                      placeholder="Search By Username"
                      onChange={(e) => setUsername(e.target.value)}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <span
                      class="input-group-text login_field"
                      id="inputGroupPrepend"
                    >
                      <img
                        src="/images/search_icon.svg"
                        width={"30px"}
                        alt="search_icon"
                      />
                    </span>
                  </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5 m-0 p-0">
                  <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control login_field"
                      id="validationCustomUsername"
                      placeholder="Search By Nick Name"
                      onChange={(e) => setFullname(e.target.value)}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <span
                      class="input-group-text login_field"
                      id="inputGroupPrepend"
                    >
                      <img
                        src="/images/search_icon.svg"
                        width={"30px"}
                        alt="search_icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <table class="reservation-table table ">
                <thead
                  class="thead-inverse table-head"
                  style={{ borderRadius: "10px" }}
                >
                  <tr>
                    <th>Username</th>
                    <th>Nick Name</th>
                    <th>Gender</th>
                    <th>County</th>
                    <th>State</th>
                    {/* <th>Last Modified</th> */}
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr className="text-center">
                      <td colSpan={9}>
                        <Spinner width="60" height="60" />
                        <p>Loading...</p>
                      </td>
                    </tr>
                  ) : (
                    <>{renderData()}</>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Base>
    </Wrapper>
  );
}
