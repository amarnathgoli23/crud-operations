import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import UsersData from "../UsersData/UsersData";

export default function AllUsers() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [editField, setEditField] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = (e) => {
    const headers = {
      Authorization: "Bearer keyR4ocIvLJ4gi7hP",
      "Content-Type": "application/Json",
    };
    axios
      .get(`https://api.airtable.com/v0/appNOUD1dFyUfSSrj/contact`, { headers })
      .then((res) => {
        console.log(res.data.records);
        setData(res.data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteData = (id) => {
    const headers = {
      Authorization: "Bearer keyR4ocIvLJ4gi7hP",
      "Content-Type": "application/Json",
    };
    axios
      .delete(`https://api.airtable.com/v0/appNOUD1dFyUfSSrj/contact/${id}`, {
        method: "DELETE",
        headers,
      })
      .then((result) => {
        console.log(result);
        getData();
      });
  };

  const editData = (id) => {
    setEditField({
      id: id.id,
      name: id.fields.Name,
      email: id.fields.Email,
      password: id.fields.Password,
    });
  };

  const onEdit = (e) => {
    const newData = { ...editField };
    newData[e.target.id] = e.target.value;
    setEditField(newData);
    console.log(newData);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    const _data = {
      fields: {
        Name: editField.name,
        Email: editField.email,
        Password: editField.password,
      },
    };

    const headers = {
      Authorization: "Bearer keyR4ocIvLJ4gi7hP",
      "Content-Type": "application/Json",
    };
    axios
      .put(
        `https://api.airtable.com/v0/appNOUD1dFyUfSSrj/contact/${editField.id}`,
        _data,
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res);
        setEditForm(false);
        getData();
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const _data = {
      fields: {
        Name: inputs.name,
        Email: inputs.email,
        Password: inputs.password,
      },
    };

    const headers = {
      Authorization: "Bearer keyR4ocIvLJ4gi7hP",
      "Content-Type": "application/json",
    };

    axios
      .post(`https://api.airtable.com/v0/appNOUD1dFyUfSSrj/contact`, _data, {
        headers,
      })
      .then((res) => {
        console.log(res);
        getData();
        setInputs(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addClickHandler = () => {
    setInputs(initialValues);
  };

  const onInputChange = (e) => {
    const newData = { ...inputs };
    newData[e.target.id] = e.target.value;
    setInputs(newData);
    console.log(newData);
  };

  return (
    <div>
      <div>
        <UsersData
          data={data}
          remove={deleteData}
          edit={editData}
          setEditForm={setEditForm}
        />
      </div>
      <div>
        {inputs ? (
          <form>
            <h3>Name</h3>
            <input
              type="text"
              id="name"
              placeholder="Username"
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <h3>Email</h3>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <h3>Password</h3>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <br />
            <button onClick={(e) => submitForm(e)}>submit</button>
          </form>
        ) : (
          <button onClick={() => addClickHandler()}>Add new user</button>
        )}
      </div>
      {editForm ? (
        <form>
          <input
            type="text"
            id="name"
            value={editField.name}
            onChange={(e) => onEdit(e)}
          />
          <input
            type="email"
            id="email"
            value={editField.email}
            onChange={(e) => onEdit(e)}
          />
          <button onClick={(e) => submitEdit(e)}>Update</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
