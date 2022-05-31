import Sidebar from "../../AdminComponents/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../AdminComponents/widget/Widget";
import Featured from "../../AdminComponents/featured/Featured";
import Chart from "../../AdminComponents/chart/Chart";
import Table from "../../AdminComponents/table/Table";
// import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { statadmin } from "../../../redux/Action/UserAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Home = () => {
  const { Loading, stats, error } = useSelector((state) => state.Stat_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(stats.Admin_Num)
  useEffect(() => {
    if (token) {
      dispatch(statadmin(token));
    }
  }, []);

  return (
    <div>{
      Loading ?
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> :
        <div className="homeadmin">
          <Sidebar />
          <div className="homeContainer">
            <div className="widgets">
              <Widget type="user" amount={stats.User_Num} />
              <Widget type="event" amount={stats.Event_Num} />
              <Widget type="ticket" amount={stats.Ticket_Num}  />
            </div>
            <div className="widgets">
              <Widget type="client" amount={stats.Client_Num} />
              <Widget type="Organ" amount={stats.Organ_Num} />
              <Widget type="Admin" amount={stats.Admin_Num} />
            </div>
            <div className="charts">
              <Featured />
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Home;
