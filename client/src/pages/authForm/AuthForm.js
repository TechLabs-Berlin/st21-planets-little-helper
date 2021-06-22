import React, { useState } from "react";
import styles from "./Auth.module.css";

function AuthForm({
  heading,
  buttonText,
  signup,
  onAuth,
  error,
  removeError,
  history,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authType = signup ? "signup" : "signin";
    onAuth(authType, { email, password, username })
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  history.listen(() => {
    removeError();
  });

  return (
    <div className={styles.contentBox}>
    <div className={styles.formContainer}>
    <form onSubmit={handleSubmit} className={styles.formDiv}>
      <h2 className={styles.h2Form}>{heading}</h2>
      {error.message && <div>{error.message}</div>}
      <div className={styles.inputContainer}>
        <label htmlFor="email"></label>

        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.authInput}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password"></label>

        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.authInput}
        />
      </div>
      {signup && (
        <>
          <div className={styles.inputContainer}>
            <label htmlFor="username"></label>

            <input
              type="username"
              placeholder="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.authInput}
            />
          </div>
          {/* <div className={styles.inputContainer}>
            <label htmlFor="imageUrl" className={styles.authLabel}>
              Profile picture:
            </label>
            <input
              type="imageUrl"
              placeholder="imageUrl"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div> */}
        </>
      )}
      <button type="submit" className={styles.submitButton}>
        {buttonText}
      </button>
    </form>
    </div>
    </div>
  );
}

export default AuthForm;
