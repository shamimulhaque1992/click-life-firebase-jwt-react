import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfermPassword, setShowConfermPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container mt-5 mb-5">
      <Form onSubmit={handleCreateUser}>
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
              name="password"
              required
            />
            <p onClick={()=> setShowPassword(!showPassword)}  className="position-absolute top-50 end-0 translate-middle-y" style={{cursor: "pointer"}}>
              👁
            </p>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfermPassword">
          <Form.Label>Conferm Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              onBlur={handleConfirmPasswordBlur}
              type={showConfermPassword ? "text" : "password"}
              placeholder="Conferm Password"
              name="confermPassword"
              required
            />
            <p onClick={()=> setShowConfermPassword(!showConfermPassword)} className="position-absolute top-50 end-0 translate-middle-y" style={{cursor: "pointer"}}>
              👁
            </p>
          </div>
        </Form.Group>
        <p style={{ color: "red" }}>{error}</p>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <p>
          Already Have an account?{" "}
          <Link className="form-link" to="/login">
            Login Here...
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
