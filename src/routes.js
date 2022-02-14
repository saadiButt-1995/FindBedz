import { Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import SignUp from "./SignUp";
import Login from "./Login";
import Individual from "./Components/individual/Individual";
import IndividualLanding from "./Components/individual/IndividualLanding";
import Sheltorsignup from "./Components/sheltorProvider/Sheltorsignup";
import Organization from "./Components/Agency/Organization";
import OrganizationLandingpage from "./Components/Agency/OrganizationLandingpage";
import Sheltordashboard from "./Components/sheltorProvider/Sheltordashboard";
import Empty from "./Empty";
import Ant from "./Ant";
import Editprofile from "./Components/individual/IndividualEditprofile";
import Newpassword from "./Newpassword";
import Forget from "./Forget";
import Enterpin from "./Enterpin";

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
      <Route path="/empty" element={<Empty />} />
      <Route path="/ant" element={<Ant />} />
      <Route path="/IndividualEditprofile" element={<Editprofile />} />
      <Route path="/forget-password" element={<Forget />} />
      <Route path="/newpassword" element={<Newpassword />} />
      <Route path="/enterpin" element={<Enterpin />} />
    </Routes>
  );
}
