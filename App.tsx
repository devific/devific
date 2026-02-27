import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";
import ProjectDialog from "./components/ProjectDialog";
import CustomCursor from "./components/CustomCursor";
import "./index.css";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Router>
      <div
        className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 flex flex-col overflow-x-hidden"
        style={{ cursor: "none" }}
      >
        <ScrollProgressBar />
        <Navbar onOpenDialog={() => setIsDialogOpen(true)} />
        <CustomCursor />
        <main className="grow overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenDialog={() => setIsDialogOpen(true)} />}
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <ProjectDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
