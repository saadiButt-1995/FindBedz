import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user_data");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    // <!-- Top Bar Start -->

    <ul className="list-inline float-right mb-0">
      {/* <!-- Search --> */}
      {/* <li className="list-inline-item dropdown notification-list">
            <button className="nav-link waves-effect toggle-search" href="javascript:void(0)"  data-target="#search-wrap">
                <i className="mdi mdi-magnify noti-icon"></i>
            </button>
        </li> */}
      {/* <!-- Fullscreen --> */}
      {/* <li className="list-inline-item dropdown notification-list hidden-xs-down">
            <button className="nav-link waves-effect" href="javascript:void(0)" id="btn-fullscreen">
                <i className="mdi mdi-fullscreen noti-icon"></i>
            </button>
        </li> */}

      {/* <!-- User--> */}
      <li className="list-inline-item dropdown notification-list">
        <button onClick={logout} className="btn btn-sm btn-danger my-2 mx-2">
          Logout
        </button>
      </li>
    </ul>
  );
}
