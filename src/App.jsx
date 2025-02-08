import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import PickingPage from "./pages/PickingPage";
import ReportsPage from "./Components/ReportsPage";
import BookingTable from "./pages/BookingPage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/picking/:building" element={<PickingPage />} />
        <Route path="/sucess" element={<ReportsPage />} />
        <Route path="/calendar" element={<BookingTable />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
