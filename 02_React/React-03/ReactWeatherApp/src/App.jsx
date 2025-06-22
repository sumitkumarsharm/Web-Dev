import React, { useState } from "react";
import ShowWatherUi from "./components/ShowWatherUi";
import { Moon, Sun } from "lucide-react";
const App = () => {
  const [isDark, setIsDark] = useState(false);

  const bgGradient = isDark
    ? "from-gray-900 to-black"
    : "from-indigo-950 to-indigo-700";

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center bg-gradient-to-r ${bgGradient} p-3 transition-colors duration-500`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 bg-black/20 text-white p-2 rounded-full shadow-md backdrop-blur-md hover:scale-105 transition"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Weather UI Component with isDark prop */}
      <ShowWatherUi isDark={isDark} />
    </div>
  );
};

export default App;
