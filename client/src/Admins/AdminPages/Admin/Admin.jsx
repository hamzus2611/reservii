import "./Admin.scss"
import Sidebar from "../../AdminComponents/sidebar/Sidebar"
import DataAdmin from "../../AdminComponents/datatable/DataAdmin"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <DataAdmin />
      </div>
    </div>
  )
}

export default List