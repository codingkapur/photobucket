import "./styles/output.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />}></Route>
            <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
