import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App3 from './App3';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserDashboardPage from "./UserDashboardPage";
import ResourceManagementWelcomePage from "./ResourceManagementWelcomePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/resource" element={<ResourceManagementWelcomePage />} />
                <Route path="/dashboard" element={<UserDashboardPage />} />
            </Routes>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
