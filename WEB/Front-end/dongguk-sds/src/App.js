import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import NotificationPage from './pages/NotificationPage';
import DashboardPage from './pages/DashboardPage';
import ControlPage from './pages/ControlPage';
import AnalysisPage from './pages/AnalysisPage';
import SettingsPage from './pages/SettingsPage';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="flex absoltue w-screen h-screen relative overflow-hidden">
        <Sidebar />
        <div className="flex-1 h-full overflow-scroll relative flex flex-col">
          <Header />
            <Switch>
              <Route path="/Home" component={HomePage} />
              <Route path="/Notification" component={NotificationPage} />
              <Route path="/Dashboard" component={DashboardPage} />
              <Route path="/Control" component={ControlPage} />
              <Route path="/Analysis" component={AnalysisPage} />
              <Route path="/Settings" component={SettingsPage} />
            </Switch>

        </div>
      </div>
    </Router>

    
    
  );
}

export default App;
