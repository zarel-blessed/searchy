import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Switcher from "./components/Switcher";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [currentMode, setCurrentMode] = useState<string>(
    defaultTheme.matches ? "dark" : "light"
  );

  return (
    <main className={currentMode}>
      <Router>
        <Switcher currentMode={currentMode} setCurrentMode={setCurrentMode} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/search-results/:searchTerm"
            element={<SearchResults />}
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
