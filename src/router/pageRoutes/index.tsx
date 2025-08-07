import { Outlet } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import ChatPage from "../../pages/ChatPage";
import SampleToolPage from "../../pages/sample";

const Layout = () => <Outlet />;

export const pageRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <LandingPage />,
    },
    {
      path: "chat",
      element: <ChatPage />,
    },
    {
      path: "sample",
      element: <SampleToolPage />,
    }
  ]
};