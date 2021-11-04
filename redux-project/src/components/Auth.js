import classes from "./Auth.module.css";
import { authActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const auth = useSelector((state) => state.isAuth);
  const email = useSelector((state) => state.auth.emailValue);
  const password = useSelector((state) => state.auth.passwordValue);
  const dispatch = useDispatch();
  console.log(email);

  const emailChangeHandler = (e) => {
    dispatch(authActions.emailHandler(e.target.value));
  };

  const passwordChangeHandler = (e) => {
    dispatch(authActions.passwordHandler(e.target.value));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // value={password}
              // onChange={passwordChangeHandler}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
