import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "./components/Header";
import BasicComponent from "./components/BasicComponent";
import Counter from "./components/useState/Counter";
import DarkMode from "./components/useState/DarkMode";
import BasicUseEffect from "./components/useEffect/BasicUseEffect";
import APIWithUseEffect from "./components/useEffect/APIWithUseEffect";
import GrandParent from "./components/propDrilling/GrandParent";
import APIWithRQ from "./components/tanstackQuery/APIWIthRQ";
import UserContext from "./components/utils/UserContext.";
import Footer from "./components/Footer";
import Error from "./components/Error";
import appStore from "./components/redux/appStore";

const queryClient = new QueryClient();
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Bahubali");
  }, []);

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Header />
            <Outlet />
            <Footer />
          </UserContext.Provider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
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
      {
        path: "/apiwithrq",
        element: <APIWithRQ />,
      },
    ],
    errorElement: <Error />,
  },
]);

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter} />);
