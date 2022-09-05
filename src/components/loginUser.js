import PropTypes from "prop-types";
import React, { useState } from "react";
// import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3009/api/user", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(credentials),
  }).then((data) => {
    data.json().then((credentials) => {
      console.log(credentials.success.token);
    });
  });
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      username,

      password,
      // console.log(usename);
    });

    setToken(token);
  };

  return (
    <div className="login-wrapper bg-slate-500">
      <h1>Please Log In</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>

          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>

        <label>
          <p>Password</p>

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
