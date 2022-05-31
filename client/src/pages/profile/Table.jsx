import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTicket } from "../../redux/Action/TicketAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

const List = () => {

  const { Loading, ticket, error } = useSelector((state) => state.Ticket_Select);
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getTicket(token))
  }, [])

  return (<div>
    {Loading ?
      <h1 className="text" >
        {" "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      </h1> : (

        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">TicketNum</TableCell>
                <TableCell className="tableCell">Eventname</TableCell>
                <TableCell className="tableCell">Prix</TableCell>
                <TableCell className="tableCell">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticket.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.ticketNum}</TableCell>
                  <TableCell className="tableCell">{row.Eventname}</TableCell>
                  <TableCell className="tableCell">{row.Prix}</TableCell>
                  <TableCell className="tableCell">{row.date.slice(0, 10)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)}
  </div>

  );
};

export default List;
