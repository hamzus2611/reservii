// import Home from "../AdminPages/home/Home";
// import Login from "../AdminPages/login/Login";
// import List from "../AdminPages/list/List";
// import Single from "../AdminPages/single/Single";
// import New from "../AdminPages/new/New";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "../components/context/darkModeContext";

// function AppAdmin() {
//  const { darkMode } = useContext(DarkModeContext);

//  return (
//   <div className={darkMode ? "app dark" : "app"}>

//    <BrowserRouter>
//     <Routes>
//      <Route path="/">
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="users">
//        <Route index element={<List />} />
//        <Route path=":userId" element={<Single />} />
//        <Route
//         path="new"
//         element={<New inputs={userInputs} title="Add New User" />}
//        />
//       </Route>
//       <Route path="products">
//        <Route index element={<List />} />
//        <Route path=":productId" element={<Single />} />
//        <Route
//         path="new"
//         element={<New inputs={productInputs} title="Add New Product" />}
//        />
//       </Route>
//      </Route>
//     </Routes>
//    </BrowserRouter>
//   </div>
//  );
// }

// export default AppAdmin;
