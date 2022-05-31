import "./Organisateur.scss";
import Sidebar from "../../AdminComponents/sidebar/Sidebar";

import DataOrganisater from "../../AdminComponents/datatable/DataOrganisater";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <Navbar /> */}
        <DataOrganisater />
      </div>
    </div>
  );
};

export default List;
