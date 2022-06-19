import React from "react";
import "./App.css";
import Login from "./Login";
import Create from "../src/Components/Create/Create";
import Validation from "./Components/Validation/Validation";
import AllUsers from "./Components/AllUsers/AllUsers";
import Airtable from "./Components/AirTable/Airtable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateForm from "./Components/UpdateForm/UpdateForm";
import UsersData from "./Components/UsersData/UsersData";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        {/* <Route path="edit" element={<UsersData />} /> */}
        <Route path="create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
