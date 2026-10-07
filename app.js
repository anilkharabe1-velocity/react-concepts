import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import BasicComponent from "./components/BasicComponent";
import Counter from "./components/useState/Counter";
import DarkMode from "./components/useState/DarkMode";
import BasicUseEffect from "./components/useEffect/BasicUseEffect";
import APIWithUseEffect from "./components/useEffect/APIWithUseEffect";
import GrandParent from "./components/propDrilling/GrandParent";
import UserContext from "./components/utils/UserContext.";

import Footer from "./components/Footer";
import Error from "./components/Error";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Bahubali");
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BasicComponent />,
      },
      {
        path: "/basiccomponent",
        element: <BasicComponent />,
      },

      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/darkmode",
        element: <DarkMode />,
      },
      {
        path: "/basicuseeffect",
        element: <BasicUseEffect />,
      },
      {
        path: "/apiwithuseeffect",
        element: <APIWithUseEffect />,
      },
      {
        path: "/grandparent",
        element: <GrandParent />,
      },
    ],
    errorElement: <Error />,
  },
]);

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter} />);
