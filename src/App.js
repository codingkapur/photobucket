import "./styles/output.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
const login = lazy(() => import("./pages/Login"));
const signup = lazy(() => import("./pages/SignUp"));
const notfound = lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/"></Route>
          <Route path={ROUTES.LOGIN} element={<Login />}></Route>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
