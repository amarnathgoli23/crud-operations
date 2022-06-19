import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function UsersData({ data, remove, edit, setEditForm }) {
  return (
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
          {data.map((item, index) => {
            if (item.fields != null) {
              return (
                <tr key={index}>
                  <td>{item.fields.Name}</td>
                  <td> {item.fields.Email}</td>
                  <td>
                    <button onClick={() => remove(item.id)}>Delete</button>
                    <button
                      onClick={() => {
                        edit(item);
                        console.log(item)
                        setEditForm((prev) => !prev);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}
