import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </>
  );
}

export default App;
