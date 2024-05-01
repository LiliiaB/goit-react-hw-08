import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { PublicRoute } from "../PublicRoute";
import { PrivateRoute } from "../PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshUser } from "../../redux/auth/operations";
import { Layout } from "../Layout/Layout";

const Home = lazy(() => import("../../Pages/Home/Home"));
const ContactDetails = lazy(() =>
  import("../../Pages/ContactDetails/ContactDetails")
);
const ContactsPage = lazy(() =>
  import("../../Pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../Pages/RegistrationPage/RegistrationPage")
);
const LogInPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: "100vh",
        fontSize: 20,
        color: "#010101",
        textAlign: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LogInPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          >
            <Route
              path=":id"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactDetails />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
