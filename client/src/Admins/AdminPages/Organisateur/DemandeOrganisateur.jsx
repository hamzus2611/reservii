import React from "react";
import "./Organisateur.scss";
import Sidebar from "../../AdminComponents/sidebar/Sidebar";
import DataOrgaDemand from "../../AdminComponents/datatable/DataOrgaDemand";
import { Navigate } from "react-router-dom";

function DemandeOrganisateur() {
  const token = localStorage.getItem("token");
  return (
    <div className="list">
      {token ? (
        <div>
          <Sidebar />
          <div className="listContainer">
            {/* <Navbar /> */}
            <DataOrgaDemand />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default DemandeOrganisateur;
