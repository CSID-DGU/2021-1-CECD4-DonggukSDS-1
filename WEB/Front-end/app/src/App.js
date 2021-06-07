import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotificationPage from './pages/NotificationPage';
import DashboardPage from './pages/DashboardPage';
import ControlPage from './pages/ControlPage';
import AnalysisPage from './pages/AnalysisPage';

function App() {
  return (
    <>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/notice" component={NotificationPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/control" component={ControlPage} />
      <Route path="/analysis" component={AnalysisPage} />
    </>
  );
}

export default App;
