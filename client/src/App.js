import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./components/style/dark.scss";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homepage";
import Profile from "./pages/profile/Profile";
// import EventsList from "./pages/EventsList/EventsList";
import EventPage from "./pages/EventPage/EventPage";

import Home from "./Admins/AdminPages/home";
import User from "./Admins/AdminPages/User/User";
import Organisateur from "./Admins/AdminPages/Organisateur/Organisateur";
import Admin from "./Admins/AdminPages/Admin/Admin";
import Event from "./Admins/AdminPages/Event/Event";
import Ticket from "./Admins/AdminPages/Ticket/Ticket";
import ProfileA from "./Admins/AdminPages/profile/ProfileA";
import Single from "./Admins/AdminPages/single/Single";
import New from "./Admins/AdminPages/new/New";
import { userInputs } from "./Admins/formSource";

import { useContext } from "react";
import MyEvents from "./Organisateur/OrganisateurPages/Event/Event";
import EventsList from "./pages/EventsList/EventsList";


import DemandeOrganisateur from './Admins/AdminPages/Organisateur/DemandeOrganisateur';
import Param from './pages/profile/Param';
import HomeOrg from "./Organisateur/OrganisateurPages/home/HomeOrg";
import Tickets from "./Organisateur/OrganisateurPages/Ticket/Ticket";
import ProfileO from "./Organisateur/OrganisateurPages/profile/ProfileO"
import Chat from './pages/Chat';

function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <Route path="/CreateEvent" exact element={<EventsList />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="/Profile/edit" exact element={<Param />} />
        <Route path="/event/:id" exact element={<EventPage />} />
        {/* render={(props) => */}
        {/* //   <EventPage {...props} />} */}


        <Route path="/Admin/">
          <Route index element={<Home />} />
          <Route path="message" element={<Chat/>}/>
          <Route path="User">
            <Route index element={<User />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="Organisateur/">
            <Route index element={<Organisateur />} />
            <Route path="inv" element={<DemandeOrganisateur />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add New User" />}
            />
          </Route>
          <Route path="Admin">
            <Route index element={<Admin />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="Event">
            <Route index element={<Event />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="Ticket">
            <Route index element={<Ticket />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="ProfileAdmin" exact element={<ProfileA />}>
          </Route>
        </Route>


        <Route path="/organisateur/">
          <Route index element={<HomeOrg />} />
            <Route path="Tickets" element={<Tickets />} />
          <Route path="Event/">
            <Route index element={<MyEvents />} />
            <Route path=":Events" element={<Single />} />
            <Route path="CreateEvent" exact element={<EventsList />} />
          </Route>
            <Route path="ProfileOrganisateur" exact element={<ProfileO />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
