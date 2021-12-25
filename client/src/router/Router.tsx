import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";

// Public Routes
import Home from "../pages/home/Home";

// Private Routes

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />

        {/* Private Routes */}
      </Routes>
    </BrowserRouter>
  )
}