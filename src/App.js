import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import VideoPage from "./Components/VideoPage";
import SearchResultPage from "./Components/SearchResultPage";

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
      {
        path: "results",
        element: <SearchResultPage />,
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
