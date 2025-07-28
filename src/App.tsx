import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./components";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={`route-key-${route.path}`}
              path={route.path}
              element={<route.component />}
            >
              {route.children?.map((child) => (
                <Route
                  key={`route-key-${route.path}-${child.path}`}
                  path={child.path}
                  element={<child.component />}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
