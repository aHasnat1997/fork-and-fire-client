import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/Home/HomeLayout";
import MenuLayout from "../pages/Menu/MenuLayout";
import ShopLayout from "../pages/Shop/ShopLayout";
import Login from "../pages/AuthenticationPages/Login";
import Register from "../pages/AuthenticationPages/Register";
import DashboardLayout from "../userDashboard/DashboardLayout";
import UserProfile from "../userDashboard/UserProfile";
import MyCart from "../userDashboard/MyCart";
import Reservation from "../userDashboard/Reservation";
import PaymentHistory from "../userDashboard/PaymentHistory";
import AddReview from "../userDashboard/AddReview";
import MyBooking from "../userDashboard/MyBooking";

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
    ],
  },
  {
    path: '/user-dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'user',
        element: <UserProfile />
      },
      {
        path: 'reservation',
        element: <Reservation />
      },
      {
        path: 'payment',
        element: <PaymentHistory />
      },
      {
        path: 'cart',
        element: <MyCart />
      },
      {
        path: 'review',
        element: <AddReview />
      },
      {
        path: 'booking',
        element: <MyBooking />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
