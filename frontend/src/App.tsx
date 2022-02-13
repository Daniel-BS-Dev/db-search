import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyRoutes from "./Routes";

const App = () => {
  return (
    <>
      <MyRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
