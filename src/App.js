import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './file/LoginPage';
import RegisterPage from './file/RegisterPage';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/LoginPage">
                    <LoginPage/>
                </Route>
                <Route exact path="/RegisterPage">
                    <RegisterPage/>
                </Route>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;