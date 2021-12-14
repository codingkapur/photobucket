import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = () => {};
  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <p>I am the login page</p>
    </div>
  );
};

export default Login;
