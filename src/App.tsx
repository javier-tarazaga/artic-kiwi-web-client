import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainScreen from '../components/main/MainScreen';
import LoginScreen from '../features/auth/LoginScreen';
import RegisterScreen from 'features/auth/RegisterScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
