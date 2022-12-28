import { useEffect } from "react";
import { useContext } from "react";
import Dashboard from "../dashboard/Dashboard";
import { RouteContext } from "./contextRoute";

const PrivateRoute = () => {
  const [
    email,
    setEmail,
    password,
    setPassword,
    token,
    setToken,
    authorization,
    setAuthorization,
  ] = useContext(RouteContext);

  useEffect(() => {
    //verify logged user
    const savedToken = getToken();

    if (savedToken.token) {
      consultToken(savedToken.email)
        .then((res) => res.json())
        .then((res) => {
          //verify token valid
          if (res.name === "TokenExpiredError") {
            //setting invalid token
            setTokenStorage({ name: res.name, expiredAt: res.expiredAt });
          } else {
            //allow access
            setToken(savedToken.token);
            matchToken(savedToken.token);
          }
        });
    }
  }, []);

  useEffect(() => {
    //check token
    consultToken(email)
      .then((res) => res.json())
      .then((res) => {
        const tokenDB = `"${res.token}"`;
        matchToken(tokenDB);
      });
  }, [token]);

  //compare token saved
  const matchToken = (tk) => {
    const savedToken = getToken().token;
    if (tk == savedToken) setAuthorization(true);
  };

  //get local storage token
  const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };

  //set token in local storage
  const setTokenStorage = (params) => {
    return localStorage.setItem("token", JSON.stringify(params));
  };

  //consult token in server
  const consultToken = (user) => {
    return fetch("/admin/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user }),
    });
  };

  return <div>{authorization ? <Dashboard /> : null}</div>;
};

export default PrivateRoute;
