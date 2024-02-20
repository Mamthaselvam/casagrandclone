import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// react router
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga4'


ReactGA.initialize("G-E7DC049VPD"); // measurement ID

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
