import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    name,
    error,
    email,
    password,

    setUser,
    setError,
    setIsLoading,
    setUserName,

    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    saveUser,

    signInUsingGoogle,
    registerNewUser,
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
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEmailPassRegistration = (e) => {
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

    registerNewUser(email, password, name)
      .then((result) => {
        setUserName();
        console.log(result.user);
        const { email, displayName } = result.user;
        console.log(name);

        const userInfo = {
          displayName: displayName || name,
          email: email,
        };

        setUser(userInfo);
        //save user to the database
        saveUser(email, name, "POST");

        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className=" my-5 ">
      <form
        className="row g-3 container mx-auto w-75"
        onSubmit={handleEmailPassRegistration}
      >
        <h3>Please Register</h3>
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onBlur={handleNameChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
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
        <div className="col-md-6">
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
            Register
          </button>
          <p>
            Already registered? <Link to="/login">Login</Link>{" "}
          </p>
          <div>-----------or-----------</div>
          <Button onClick={handleGoogleSignIn} variant="warning">
            Google Sign In
          </Button>
        </div>
      </form>

      {/* ********************* */}
    </div>
  );
};

export default Register;
