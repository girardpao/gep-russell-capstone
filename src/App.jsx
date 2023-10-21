import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./Routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
