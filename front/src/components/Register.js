import React, { useState } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = () => {
    // TODO: redirect to login page or automatically log in user
  }

    return (
        <div>
            <h1>Register</h1>
            {/* // TODO: add form fields for email and password and username */}
        </div>
    )
}

export default Register;