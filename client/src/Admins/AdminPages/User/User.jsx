import "./User.scss"
import Sidebar from "../../AdminComponents/sidebar/Sidebar"
import DataUser from "../../AdminComponents/datatable/DataUser"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <DataUser />
      </div>
    </div>
  )
}

export default List