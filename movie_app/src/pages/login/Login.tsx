import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img
          src="https://i.pinimg.com/1200x/61/6d/24/616d2453e4e2c6b1ad51197a2f00b8c4.jpg"
          alt=""
        />
        <div className={styles.darkEffect}></div>
      </div>
      <div className={styles.login_form}>
        <h1>Sign In</h1>
        <div className={styles.content}>
          <input type="text" placeholder="Your Email" />
          <input type="password" placeholder="password" />
          <button className={styles.btn}>Sign In</button>
          <p className={styles.forgotPass}>Forgot password?</p>
        </div>
        <div className={styles.register}>
          <p>New to MovieX?<b> Sign Up Now</b></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
