import "./User.scss"
import SidebarOrginisateur from "../../OrganisateurComponents/sidebar/SidebarOrginisateur"
import DataTicket from "../../OrganisateurComponents/datatable/DataTicket"
// import Navbar from "../../OrganisateurComponents/navbar/Navbar"
// import DataUser from "../../OrganisateurComponents/datatable/DataUser"

const List = () => {
  return (
    <div className="list">
      <SidebarOrginisateur />
      <div className="listContainer">
        <DataTicket/>
      </div>
    </div>
  )
}

export default List