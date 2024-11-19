import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import UploadingPage from "./pages/UploadingPage";
import Signup from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <main className="text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<UploadingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </main>
  );
}

export default App;
