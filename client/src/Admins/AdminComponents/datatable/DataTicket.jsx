import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesourceT";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

import { getTicket } from "../../../redux/Action/TicketAction";

const Datatable = () => {

  const { Loading, ticket, error } = useSelector((state) => state.Ticket_Select);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicket())
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Organisateur/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            //  onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>{Loading ? (
      <h1 className="text" >
        {" "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      </h1>
    ) :
      <div className="datatable">
        <div className="datatableTitle">
          Tout les Tickets
        </div>
        <DataGrid
          className="datagrid"
          rows={ticket}
          getRowId={(row) => row._id}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection />
      </div>
    }
    </div>
  );
};

export default Datatable;
