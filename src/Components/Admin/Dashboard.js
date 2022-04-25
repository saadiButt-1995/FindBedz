import React, { useState, useEffect } from "react";
import { axios } from "../../config";
import { Wrapper } from "./Layout/AdminLayouts.styled";
import Base from "./Layout/Base";

export default function Dashboard() {
  const [shelters, setShelters] = useState([]);
  const [agencies, setAgencies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // var response = await axios.get("shelter/query");
      // if (response.status === 200) {
      //   setShelters(response.data.result.results);
      // }

      var response = await axios.get("users/getUsers?role=user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setUsers(response.data.results);
      }

      var response1 = await axios.get("users/getUsers?role=sheriff", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response1.status === 200) {
        setAgencies(response1.data.results);
      }

      var response2 = await axios.get("shelter/query");
      if (response2.status === 200) {
        setShelters(response2.data.result.results);
      }
    } catch (e) {}
  };
  return (
    <Wrapper>
      <Base header="Administrator">
        <div class="container">
          <div class="row dash_cards">
            <div class="col-md-4">
              <div class="dash-card">
                <p className="dash-count">{shelters.length}</p>
                <p className="dash-title">TOTAL SHELTERS</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="dash-card">
                <p className="dash-count">{users.length}</p>
                <p className="dash-title">TOTAL INDIVIDUALS</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="dash-card">
                <p className="dash-count">{agencies.length}</p>
                <p className="dash-title">TOTAL AGENCIES</p>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </Wrapper>
  );
}
