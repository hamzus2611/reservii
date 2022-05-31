import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesourceE";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getclient } from "../../../redux/Action/UserAction";
import { getticketinfo } from "../../../redux/Action/TicketAction";

const Datatable = () => {
  const { Loading, ticket, error } = useSelector(
    (state) => state.Ticket_Select
  );
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getticketinfo(token));
  }, []);
  //  let [Data, setData] = useState(users);

  // console.log(users)/
  //console.log(Data)
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/User/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              //onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {Loading ? (
        <h1 className="text">
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1>
      ) : (
        <div className="datatable">
          <div className="datatableTitle">Tout Vos Tickets</div>
          <DataGrid
            className="datagrid"
            rows={ticket}
            getRowId={(row) => row.id_tick}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      )}
    </div>
  );
};

export default Datatable;
