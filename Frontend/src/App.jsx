import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import LandingPage from "./components/Landing page"; // Corrected file name without space
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/admin" element = {<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
