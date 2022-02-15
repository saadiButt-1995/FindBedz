import { Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
////individual/////
import Individual from "./Components/individual/Individual";
import IndividualLanding from "./Components/individual/IndividualLanding";
/////shelter-provider/////
import Sheltordashboard from "./Components/sheltorProvider/Sheltordashboard";
import Sheltorsignup from "./Components/sheltorProvider/Sheltorsignup";
/////Organization/////
import Organization from "./Components/Agency/Organization";
import OrganizationLandingpage from "./Components/Agency/OrganizationLandingpage";
import OrganizationEditprofile from "./Components/Agency/OrganizationEditprofile";
import Editprofile from "./Components/individual/IndividualEditprofile";
////////////forget-password///////
import Newpassword from "./Newpassword";
import Forget from "./Forget";
import Enterpin from "./Enterpin";
//////////signup-login//////////
import SignUp from "./SignUp";
import Login from "./Login";
export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Landingpage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Individual-signup" element={<Individual />} />
      <Route path="/individual-landingpage" element={<IndividualLanding />} />
      <Route path="/sheltor-signup" element={<Sheltorsignup />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/sheltor-dashboard" element={<Sheltordashboard />} />
      <Route
        path="/OrganizationLandingpage"
        element={<OrganizationLandingpage />}
      />
      <Route
        path="/organization-edit-profile"
        element={<OrganizationEditprofile />}
      />
      <Route path="/IndividualEditprofile" element={<Editprofile />} />
      <Route path="/forget-password" element={<Forget />} />
      <Route path="/newpassword" element={<Newpassword />} />
      <Route path="/enterpin" element={<Enterpin />} />
    </Routes>
  );
}
