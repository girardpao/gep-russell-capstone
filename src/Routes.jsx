import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
  {
    path: "contactUs",
    element: <ContactUs />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;
