import React, { useState, useRef } from "react";
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
  const [imageUrl, setImageUrl] = useState("./uploads/mask.png");
  const [fileLabel, setFileLabel] = useState("Please choose squared picture")

  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const authType = signup ? "signup" : "signin";
    const formData = new FormData();
    formData.append("imageUrl", imageUrl);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("username", username);
    onAuth(authType, formData)
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

  const handleFile = (e) => {
    setImageUrl(e.target.files[0]);
    setFileLabel(e.target.files[0].name)
  };

  return (
    <div className={styles.contentBox}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
          className={styles.formDiv}
          encType="multipart/form-data"
        >
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
              <div
                className={styles.inputContainer}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="imageUrl" className={styles.authLabel} style={{marginBottom: "5px", textAlign: "center"}}>
                  {fileLabel}
                </label>
                <input
                  type="file"
                  placeholder="imageUrl"
                  id="imageUrl"
                  name="imageUrl"
                  accept=".jpg"
                  onChange={handleFile}
                  ref={fileInput}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  className={styles.upload}
                  onClick={() => fileInput.current.click()}
                >
                  Upload profile picture
                </button>
              </div>
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
