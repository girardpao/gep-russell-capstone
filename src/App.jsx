import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import PageNav from "./components/PageNav";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <PageNav />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
