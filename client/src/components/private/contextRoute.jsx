import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteProvider = (props) => {
  const [token, setToken] = useState(null);
  const [authorization, setAuthorization] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RouteContext.Provider
      value={[
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        authorization,
        setAuthorization,
      ]}
    >
      {props.children}
    </RouteContext.Provider>
  );
};
