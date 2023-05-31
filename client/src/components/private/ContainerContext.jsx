import Admin from "../admin/Admin";
import { RouteProvider } from "./contextRoute";
// import PrivateRoute from "./PrivateRoute";

const ContainerContext = () => {
  return (
    <RouteProvider>
      <Admin />
      {/* <PrivateRoute /> */}
    </RouteProvider>
  );
};

export default ContainerContext;
