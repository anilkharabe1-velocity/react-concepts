import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import BasicComponent from "./components/BasicComponent";
import Counter from "./components/useState/Counter";
import DarkMode from "./components/useState/DarkMode";
import BasicUseEffect from "./components/useEffect/BasicUseEffect";
import APIWithUseEffect from "./components/useEffect/APIWithUseEffect";
import Footer from "./components/Footer";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
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
    ],
    errorElement: <Error />,
  },
]);

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter} />);
