import axios from "axios";
import styles from "./Login.module.css";
import { useState } from "react";
import { backURL } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState(false);
  const [err, seterr] = useState("");

  console.log(password, username);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const userdata = {
      username,
      password,
    };

    try {
      const res = await axios.post(`${backURL}/login`, userdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data) {
        console.log(res.data);
        localStorage.setItem("userid", res.data.id);
        navigate("/");
      }
    } catch (error) {
      seterr(true);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>Et-Grocery</h3>
          <span className={styles.loginDesc}>
            Buy what you want with only one click
          </span>
        </div>
        <div className={styles.loginRight}>
          <form onSubmit={handleLogin} className={styles.loginBox}>
            <input
              onChange={(e) => setusername(e.target.value)}
              placeholder="username"
              className={styles.loginInput}
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className={styles.loginInput}
            />
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
            {err ? <span className={styles.err}> No user Crendtials</span> : ""}
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button className={styles.loginRegisterButton}>
              <a className={styles.abbr} href="/register">
                Create a New Account
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
