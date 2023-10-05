import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import Body from "./Components/Body";
import Filters from "./Components/Filters";
import VideoContainer from "./Components/VideoContainer";
import VideoCard from "./Components/VideoCard";
import { useSelector } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  const sidebarmenustate = useSelector((state) => state.sidemenu.sidemenu);

  return (
    <div className="bg-dark-theme-background-color text-dark-theme-text-color">
      <Header />
      {sidebarmenustate && <SideMenu />}
      <Body />
    </div>
  );
}

export default App;
