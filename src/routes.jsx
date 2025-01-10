import App from "./App";
import Profile from "./components/profile";
import ErrorPage from "./components/ErrorPage";
import Spinach from "./components/Spinach";
import Popeye from "./components/Popeye";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        path: "spinach",
        element: <Spinach />,
      },
      {
        path: "popeye",
        element: <Popeye />,
      },
    ],
  },
];

export default routes;
