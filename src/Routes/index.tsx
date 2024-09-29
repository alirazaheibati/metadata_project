import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../Pages/MainPage";
import Display from "../Pages/Error";


const Router = createBrowserRouter([
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "/Users",
    element: <Display />,
  },
  {
    path: "/Sefaresh",
    element: <Display />,
  },
  {
    path: "/Customers",
    element: <Display />,
  },
  {
    path: "/Data",
    element: <Display />,
  },
]);
export default Router;
