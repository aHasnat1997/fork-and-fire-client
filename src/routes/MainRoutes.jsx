import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/Home/HomeLayout";
import MenuLayout from "../pages/Menu/MenuLayout";
import ShopLayout from "../pages/Shop/ShopLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeLayout />
      },
      {
        path: '/menu',
        element: <MenuLayout />
      },
      {
        path: '/shop',
        element: <ShopLayout />
      }
    ]
  }
]);
