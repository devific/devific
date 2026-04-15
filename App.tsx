import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";
import ProjectDialog from "./components/ProjectDialog";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 flex flex-col overflow-x-hidden bg-white">
        <Navbar onOpenDialog={() => setIsDialogOpen(true)} />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenDialog={() => setIsDialogOpen(true)} />}
            />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
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
