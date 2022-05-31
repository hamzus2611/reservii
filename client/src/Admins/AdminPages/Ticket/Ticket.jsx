import "./Event.scss"
import Sidebar from "../../AdminComponents/sidebar/Sidebar"
import DataTicket from "../../AdminComponents/datatable/DataTicket"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <DataTicket />
      </div>
    </div>
  )
}

export default List