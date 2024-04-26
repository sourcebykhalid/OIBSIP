import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/achievements" component={Achievements} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
