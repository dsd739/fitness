import { RouterProvider } from "react-router";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Feeds from "./components/Feeds/Feeds";
import Login from "./components/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import { routing } from "./routing";
// import { Provider } from "react-redux";

function App() {
  return (
    // <div className="App">
    //   <Login />
    //   <DashBoard />
    //   <Feeds />
    // </div>
    <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
  );
}

export default App;
