import React, { useState, useEffect } from "react";

export default function Login() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.username = "Email is required!";
    }
    if (!values.password) {
      errors.username = "Password is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label> <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <label>Email</label> <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          required
        />{" "}
        <br /> <br />
        <label>Password</label> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          required
        />{" "}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
