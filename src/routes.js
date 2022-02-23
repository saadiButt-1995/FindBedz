import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

// import Landingpage from "./Landingpage";
import Dashboard from "./Dashboard";

////individual/////
import Individual from "./Components/individual/Individual";
import IndividualLanding from "./Components/individual/IndividualLanding";

/////shelter-provider/////
import Sheltordashboard from "./Components/sheltorProvider/Sheltordashboard";
import Sheltorsignup from "./Components/sheltorProvider/Sheltorsignup";
import SheltorEditProfile from "./Components/sheltorProvider/SheltorEditProfile";
  // reservations
  import Reservations from "./Components/sheltorProvider/reservations";

  /////Organization/////
import Organization from "./Components/Agency/Organization";
import OrganizationLandingpage from "./Components/Agency/OrganizationLandingpage";
import OrganizationEditprofile from "./Components/Agency/OrganizationEditprofile";
import Editprofile from "./Components/individual/IndividualEditprofile";
import FindAbed from "./Components/services/findBedz";
import FindService from "./Components/services/findServices";

////////////forget-password///////
import Newpassword from "./Newpassword";
import Forget from "./Forget";
import Enterpin from "./Enterpin";
//////////signup-login//////////
// import SignUp from "./SignUp";
// import Login from "./Login";




// New Routes
import Auth from './Containers/Auth/Index'

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
        
        <Route index path="/*" element={<PublicRoute restricted={true} component={Auth} exact />} />
        {/* <Route path="/signup" element={<PublicRoute restricted={true} component={SignUp} exact />} /> */}
        {/* <Route path="/login" element={<PublicRoute restricted={true} component={Login}  />} /> */}
        <Route path="/dashboard" element={<Dashboard/>} />

        {/* individuals */}
        <Route path="/Individual-signup" element={<PublicRoute restricted={true} component={Individual}  exact />} />
        <Route path="/individual-landingpage" element={<PrivateRoute component={IndividualLanding} path="/individual-landingpage" exact />} />
        <Route path="/IndividualEditprofile" element={<PrivateRoute component={Editprofile}  exact />} />
        
        {/* Shelter */}
        <Route path="/sheltor-dashboard" element={<PrivateRoute component={Sheltordashboard}  exact />} />
        <Route path="/sheltor-signup" element={<PublicRoute restricted={true} component={Sheltorsignup}  exact />} />
        <Route path="/shelter-editprofile" element={<PrivateRoute component={SheltorEditProfile}  exact />} />
        
        {/* Organizations */}
        <Route path="/organization" element={<PublicRoute restricted={true} component={Organization}  />} />
        <Route path="/OrganizationLandingpage" element={<PrivateRoute component={OrganizationLandingpage}  exact />} />
        <Route path="/organization-edit-profile" element={<PrivateRoute component={OrganizationEditprofile} exact />} />
        
        
        <Route path="/forgot-password" element={<PublicRoute component={Forget}  exact />} />
        <Route path="/newpassword" element={<PrivateRoute component={Newpassword}  exact />} />
        <Route path="/enterpin" element={<PrivateRoute component={Enterpin}  exact />} />

        {/* Beds */}
        <Route path="/find-a-bed" element={<PrivateRoute component={FindAbed}  exact />} />
        
        {/* Find Services */}
        <Route path="/find-services" element={<PrivateRoute component={FindService}  exact />} />


        {/* RESERVATIONS */}
        <Route path="/reservations" element={<PrivateRoute component={Reservations}  exact />} />
      </Routes>
  );
}
