import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import Body from "./Components/Body";
import Filters from "./Components/Filters";
import VideoContainer from "./Components/VideoContainer";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <div className="bg-dark-theme-background-color text-dark-theme-text-color">
      <Header />
      <SideMenu />
      <Body />
      <Filters />
      <VideoContainer />
      <VideoCard />
    </div>
  );
}

export default App;
