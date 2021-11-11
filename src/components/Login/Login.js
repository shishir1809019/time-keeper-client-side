import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    error,
    email,
    password,

    setUser,
    setError,
    setIsLoading,

    handleEmailChange,
    handlePasswordChange,
    signInUsingGoogle,
    processLogin,
    saveUser,
  } = useAuth();
  let history = useHistory();
  let location = useLocation();
  let redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    // handle error
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError("Password must contain 2 uppercase");
    //   return;
    // }

    processLogin(email, password)
      .then((result) => {
        const { email, displayName } = result.user;
        const userInfo = {
          displayName: displayName,
          email: email,
        };
        setUser(userInfo);
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <form
        className=" row g-3 mt-3 container w-75 mx-auto"
        onSubmit={handleEmailPassLogin}
      >
        <h3>Please Login</h3>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            className="form-control"
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control"
            id="inputPassword4"
            required
            autoComplete="on"
          />
        </div>

        <div className="text-danger">{error}</div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            new user? <Link to="/register">Register</Link>{" "}
          </p>
          <div>-----------or-----------</div>
          <Button onClick={handleGoogleSignIn} variant="warning">
            Google Sign In
          </Button>
        </div>
      </form>{" "}
    </div>
  );
};

export default Login;
