import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import Body from "./Components/Body";
import Filters from "./Components/Filters";
import VideoContainer from "./Components/VideoContainer";
import VideoCard from "./Components/VideoCard";
import store from "./Components/Redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import VideoPage from "./Components/VideoPage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <VideoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-dark-theme-background-color text-dark-theme-text-color  ">
      <Header />
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
}

export default App;
