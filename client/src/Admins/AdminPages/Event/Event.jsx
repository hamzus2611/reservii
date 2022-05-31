import "./Event.scss"
import Sidebar from "../../AdminComponents/sidebar/Sidebar"
import DataEvent from "../../AdminComponents/datatable/DataEvent"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <DataEvent/>
      </div>
    </div>
  )
}

export default List