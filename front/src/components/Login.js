import React, { useState } from "react";

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Login</h1>
      {/* // TODO: add form fields for email and password */}
    </div>
  );
}

export default Login;