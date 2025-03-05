import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ResultsPage from "../pages/ResultsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
