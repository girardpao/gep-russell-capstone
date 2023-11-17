import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import DiscountPolicy from "./pages/DiscountPolicy";
import Reservation from "./pages/Reservation";
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
    path: "booking",
    element: <Booking />,
  },
  {
    path: "discountPolicy",
    element: <DiscountPolicy />,
  },
  {
    path: "reservation",
    element: <Reservation />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;
