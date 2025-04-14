import App from "./App";
import Profile from "./Profile";
import Image from "./Image";
import ErrorPage from "./ErrorPage";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    
    {
        path: "/profile",
        element: <Image />,
    },

    {
      path: "/profile/:name",
      element: <Profile />,
    },
  ];

  export default routes;