import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup_main">
      <div className="logodiv logodiv1">
        <Link to="/">
          <img src="/images/sheltorlogo.svg" alt="" />
        </Link>
      </div>

      <div className="create_section">
        <Link className="create_card mb-3" to="/Individual-signup">
          <div className="">
            <img src="/images/person.svg" alt="" />
            <div className="card_title">INDIVIDUAL</div>
          </div>
        </Link>
        <Link
          style={{ paddingTop: "25px" }}
          className="create_card mb-3"
          to="/agency-signup"
        >
          <div className="  creat_card11">
            <img className="second_img" src="/images/Group 575.svg" alt="" />
            <div style={{ paddingTop: "0" }} className="card_title">
              ORGANIZATION/OUTREACH WORKER
            </div>
          </div>
        </Link>

        <Link className="create_card mb-3 " to="/sheltor-signup">
          <div className=" creat_card2">
            <img src="/images/doublebed.svg" alt="" />
            <div className="card_title">SHELTER PROVIDER</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
