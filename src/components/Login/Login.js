// All imports
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Login functionality
const Login = () => {
  // All states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  
  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // All function(handler)
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const SendPasswordReset = (event) => {
    event.preventDefault();
    if (reseterror) {
      return (
        <div>
          <p>Error: {reseterror.message}</p>
        </div>
      );
    }
    if (sending) {
      return <p>Sending...</p>;
    }
    if (email) {
      sendPasswordResetEmail(email);
      toast("Check your email");
    } else {
      toast("Please enter email address");
    }
  };

  return (
    <div className="form-container mt-5 mb-5">
      <Form onSubmit={handleUserSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              onBlur={handlePasswordBlur}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{ cursor: "pointer" }}
            >
              👁
            </p>
          </div>
        </Form.Group>

        <p style={{ color: "red" }}>{error?.message}</p>
        {loading && <p>Loading...</p>}

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <div className="google-siginn d-flex">
          <hr className="w-50" />
          <p className="w-25 text-center border rounded-3">Or</p>
          <hr className="w-50" />
        </div>
        <br />
        <div className="social-login">
          <Button
            onClick={() => signInWithGoogle()}
            className="mb-3"
            variant="primary"
            type="submit"
          >
            Login With Google.
          </Button>
          <br />
          <Button className="mb-3" variant="primary" type="submit">
            Login With Facebook.
          </Button>
        </div>
        <br />
        <Button
          onClick={SendPasswordReset}
          className="form-link ps-0"
          variant="link"
        >
          Forgot Password?
        </Button>
        <p>
          New Here?{" "}
          <Link className="form-link" to="/register">
            Create an account!
          </Link>
        </p>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Login;
