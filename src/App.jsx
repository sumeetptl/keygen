import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const generatePassword = () => {
    const newPassword = uuidv4().replace(/-/g, "");
    setPassword(newPassword);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <nav className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Keygen
        </div>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>
      <div className="min-h-screen flex items-center justify-center py-12 bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Strong Password Generator
          </h1>
          <div className="mb-4">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Generated Password"
            />
          </div>
          <button
            onClick={generatePassword}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
