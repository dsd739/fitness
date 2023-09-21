import "./App.css";
import DashBoard from "./components/DashBoard";
import Feeds from "./components/Feeds/Feeds";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">

      <Login />
      <DashBoard />
      <Feeds />

    </div>
  );
}

export default App;
