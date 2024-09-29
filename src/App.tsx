import { RouterProvider } from "react-router-dom";
import "./App.css";

import { UserProvider } from "./Context/UserProvider";
import LayoutCopm from "./Layout";
import Router from "./Routes";
import { MainPage } from "./Pages/MainPage";

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={Router} />
      </UserProvider>
    </>
  );
}

export default App;
