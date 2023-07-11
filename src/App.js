import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./js/pages/HomePage/HomePage";
function App() {

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
