import React, { useState } from "react";

export default function Validation() {
  return (
    <div className="container">
      <h1>Ligin Form</h1>
      <input type="text" id="name" placeholder="Username" /> <br/><br/>
      <input type="email" id="email" placeholder="Email" /><br/><br/>
      <input type="password" id="password" placeholder="Password" /><br/>
    </div>
  );
}
