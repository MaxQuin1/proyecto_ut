import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Tools from "../components/Tools";

export default function Inicio() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex h-screen ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={handleSidebarToggle}
        width="1/5"
      />
      <div className="flex flex-col w-full">
        <Navbar />
        <Tools />
      </div>
    </div>
  );
}
