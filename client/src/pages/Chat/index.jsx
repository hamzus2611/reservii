import Sidebar from "../../Admins/AdminComponents/sidebar/Sidebar"
import Chat from "./Chat"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
<Chat />
      </div>
    </div>
  )
}

export default List