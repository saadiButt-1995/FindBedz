import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

import Landingpage from "./Landingpage";
import Dashboard from "./Dashboard";
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
      {/* <PublicRoute restricted={false} component={Landingpage} path="/" exact />
      <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
      <PublicRoute restricted={true} component={Login} path="/login" exact />

      <PrivateRoute component={Individual} path="/Individual-signup" exact />
      <PrivateRoute component={IndividualLanding} path="/individual-landingpage" exact />
      <PrivateRoute component={Sheltorsignup} path="/sheltor-signup" exact />
      <PrivateRoute component={Organization} path="/organization" exact />
      <PrivateRoute component={Sheltordashboard} path="/sheltor-dashboard" exact />


      <PrivateRoute component={OrganizationLandingpage} path="/OrganizationLandingpage" exact />
      <PrivateRoute component={OrganizationEditprofile} path="/organization-edit-profile" exact />
      <PrivateRoute component={Editprofile} path="/IndividualEditprofile" exact />
      <PrivateRoute component={Forget} path="/forget-password" exact />
      <PrivateRoute component={Newpassword} path="/newpassword" exact />
      <PrivateRoute component={Enterpin} path="/enterpin" exact /> */}
      
      <Route exact path="/" element={<PublicRoute restricted={false} component={Landingpage} exact />} />
      <Route path="/signup" element={<PublicRoute restricted={true} component={SignUp} exact />} />
      <Route path="/login" element={<PublicRoute restricted={true} component={Login} path="/login" exact />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/Individual-signup" element={<PrivateRoute component={Individual} path="/Individual-signup" exact />} />
      <Route path="/individual-landingpage" element={<PrivateRoute component={IndividualLanding} path="/individual-landingpage" exact />} />
      <Route path="/sheltor-signup" element={<PrivateRoute component={Sheltorsignup} path="/sheltor-signup" exact />} />
      <Route path="/organization" element={<PrivateRoute component={Organization} path="/organization" exact />} />
      <Route path="/sheltor-dashboard" element={<PrivateRoute component={Sheltordashboard} path="/sheltor-dashboard" exact />} />
      <Route path="/OrganizationLandingpage" element={<PrivateRoute component={OrganizationLandingpage} path="/OrganizationLandingpage" exact />} />
      <Route path="/organization-edit-profile" element={<PrivateRoute component={OrganizationEditprofile} path="/organization-edit-profile" exact />} />
      <Route path="/IndividualEditprofile" element={<PrivateRoute component={Editprofile} path="/IndividualEditprofile" exact />} />
      <Route path="/forget-password" element={<PrivateRoute component={Forget} path="/forget-password" exact />} />
      <Route path="/newpassword" element={<PrivateRoute component={Newpassword} path="/newpassword" exact />} />
      <Route path="/enterpin" element={<PrivateRoute component={Enterpin} path="/enterpin" exact />} />
    </Routes>
  );
}
