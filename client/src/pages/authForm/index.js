import React, { useState } from "react";

function AuthForm({ heading, buttonText, signup, onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authType = signup ? "signup" : "signin";
    onAuth(authType, { email, password, username, imageUrl }).then(() => {
       console.log("Logged in")
    })
  };

  return (
    <div className="loginbox">
      <form name="login" action="" method="" onSubmit={handleSubmit}>
        <h2>{heading}</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {signup && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              placeholder="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="imageUrl">Profile picture:</label>
            <input
              type="imageUrl"
              placeholder="imageUrl"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        )}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default AuthForm;
