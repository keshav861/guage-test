import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./js/pages/HomePage/HomePage";
function App() {
  const logo =
    "https://ik.imagekit.io/aq3ybtarw/gauge/logo_gauge_red.png?updatedAt=1683741657958";
  const redlogo =
    "https://ik.imagekit.io/aq3ybtarw/gauge/gauge.png?updatedAt=1683741617926";

  return (
    <Router>
       <Helmet>
        <title>Gauge.ro - Upgrade to a better life</title>
        <meta
          name="description"
          content="Best purifier website"
        />
      
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
