import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import UploadingPage from "./pages/UploadingPage";
import Signup from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";
import { Navigate } from "react-router-dom";

const isLoggedIn = () => {
  return !!localStorage.getItem("token"); // Check if the token exists
};

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

const GuestRoute = ({ children }) => {
  return !isLoggedIn() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <main className="text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <UploadingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup />
            </GuestRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            <ProtectedRoute>
              <PricingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
