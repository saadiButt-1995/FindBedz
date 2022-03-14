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
  import Reservations from "./Components/sheltorProvider/reservations/index";

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
import Test from './Test.js'


// New Routes
import Auth from './Containers/Auth/Index'

// Admin Dashboard
import AdminDashboard from './Containers/Admin'

export default function routes() {
  return (
      <Routes>
        {/* <PublicRoute restricted={false} component={Landingpage} path="/"  />
        <PublicRoute restricted={true} component={SignUp} path="/signup"  />
        <PublicRoute restricted={true} component={Login} path="/login"  />

        <PrivateRoute component={Individual} path="/Individual-signup"  />
        <PrivateRoute component={IndividualLanding} path="/individual-landingpage"  />
        <PrivateRoute component={Sheltorsignup} path="/sheltor-signup"  />
        <PrivateRoute component={Organization} path="/organization"  />
        <PrivateRoute component={Sheltordashboard} path="/sheltor-dashboard"  />


        <PrivateRoute component={OrganizationLandingpage} path="/OrganizationLandingpage"  />
        <PrivateRoute component={OrganizationEditprofile} path="/organization-edit-profile"  />
        <PrivateRoute component={Editprofile} path="/IndividualEditprofile"  />
        <PrivateRoute component={Forget} path="/forget-password"  />
        <PrivateRoute component={Newpassword} path="/newpassword"  />
        <PrivateRoute component={Enterpin} path="/enterpin"  /> */}
          
        <Route index path="/*" element={<PublicRoute restricted={true} component={Auth}  exact/>} />
        {/* <Route path="/signup" element={<PublicRoute restricted={true} component={SignUp}  />} /> */}
        {/* <Route path="/login" element={<PublicRoute restricted={true} component={Login}  />} /> */}
        <Route path="/dashboard" element={<Dashboard/>} />

        {/* individuals */}
        <Route path="/Individual-signup" element={<PublicRoute restricted={true} component={Individual}   />} />
        <Route path="/individual-landingpage" element={<PrivateRoute component={IndividualLanding} path="/individual-landingpage"  />} />
        <Route path="/IndividualEditprofile" element={<PrivateRoute component={Editprofile}   />} />
        
        {/* Shelter */}
        <Route path="/sheltor-dashboard" element={<PrivateRoute component={Sheltordashboard}   />} />
        <Route path="/sheltor-signup" element={<PublicRoute restricted={true} component={Sheltorsignup}   />} />
        <Route path="/shelter-editprofile" element={<PrivateRoute component={SheltorEditProfile}   />} />
        
        {/* Organizations */}
        <Route path="/organization" element={<PublicRoute restricted={true} component={Organization}  />} />
        <Route path="/OrganizationLandingpage" element={<PrivateRoute component={OrganizationLandingpage}   />} />
        <Route path="/organization-edit-profile" element={<PrivateRoute component={OrganizationEditprofile}  />} />
        
        
        <Route path="/forgot-password" element={<PublicRoute component={Forget}   />} />
        <Route path="/newpassword" element={<PrivateRoute component={Newpassword}   />} />
        <Route path="/enterpin" element={<PrivateRoute component={Enterpin}   />} />

        {/* Beds */}
        <Route path="/find-a-bed" element={<PrivateRoute component={FindAbed}   />} />
        
        {/* Find Services */}
        <Route path="/find-services" element={<PrivateRoute component={FindService}   />} />


        {/* RESERVATIONS */}
        <Route path="/reservations" element={<PrivateRoute component={Reservations}   />} />


        {/* Admin Panel */}
        <Route path="/admin/*" element={<PublicRoute component={AdminDashboard}   />} />
        {/* <Route path="/reservations" element={<PrivateRoute component={Reservations}   />} /> */}

        <Route path="/test" element={<PublicRoute component={Test}   />}/>

      </Routes>
  );
}
