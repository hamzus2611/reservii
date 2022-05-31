import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { AcceptOrganisateur, getDemandeOrganizateur } from "../../../redux/Action/UserAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Datatable = () => {
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getDemandeOrganizateur(token));
  }, []);
  
  const handleSubmit = (id) => {
    dispatch(AcceptOrganisateur(id));
    console.log(id)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => handleSubmit(params.row._id)}
              variant="contained"
              color="success">
              Confirmer
            </Button>
            <Button variant="outlined" color="error">
              Supprimer
            </Button>
          </Stack>
        );
      },
    },
  ];
  return (
    <div>
      {Loading ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1>
      ) : (
        <div className="datatable">
          <div className="datatableTitle">
            Les Demandes
          </div>
          <DataGrid
            className="datagrid"
            rows={users}
            getRowId={(row) => row._id}
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
