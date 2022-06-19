import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function AirTable() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://api.airtable.com/v0/appNOUD1dFyUfSSrj/contact`).then(
      (result) => {
       console.log(result)
      }
    );
  },[]);
  console.warn(user)
  function deleteUser(id){
      alert(id)
  }
  return(
    <div>
    <Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {user.map((item, index) => {
          if (item.fields != null) {
            return (
              <tr key={index}>
                <td>{item.fields.Name}</td>
                <td> {item.fields.Email}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <button>Edit</button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </Table>
  </div>
  )
}
