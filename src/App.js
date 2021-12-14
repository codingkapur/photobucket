import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
const login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/"></Route>
          <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
