import { useEffect, useContext } from "react";
import Dashboard from "../dashboard/Dashboard";
import { RouteContext } from "./contextRoute";
import { ContainerRoute } from "./PrivateRouteStyled";

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
    name,
    setName,
  ] = useContext(RouteContext);

  useEffect(() => {
    //verify logged user
    const savedToken = getToken();

    if (savedToken) {
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
              const tokenDB = `"${res.token}"`;
              matchToken(tokenDB);
              setName(res.name);
            }
          });
      }
    }
  }, []);

  useEffect(() => {
    //check token
    consultToken(email)
      .then((res) => res.json())
      .then((res) => {
        const tokenDB = `"${res.token}"`;
        matchToken(tokenDB);
        if (res.name) setName(res.name);
      });
  }, [token]);

  useEffect(() => {
    saveName();
  }, [name]);

  //compare token saved
  const matchToken = (tk) => {
    const savedToken = getToken().token;
    if (tk == savedToken) {
      setAuthorization(true);
    }
  };

  //get local storage token
  const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
  };

  //save name local storage
  const saveName = () => {
    const data = getToken();
    if (name) localStorage.setItem("token", JSON.stringify({ ...data, name }));
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

  return (
    <ContainerRoute>
      {authorization ? (
        <Dashboard authorization={authorization} name={name} />
      ) : null}
    </ContainerRoute>
  );
};

export default PrivateRoute;
