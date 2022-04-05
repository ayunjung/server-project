import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './file/LoginPage';
import RegisterPage from './file/RegisterPage';
import Mypage from './file/Mypage';
import LectureView from './file/LectureView';
import LectureVidio from './file/LectureVidio';
import MainPage from './file/MainPage';
import Question from './file/Question';
import CommunityPage from './file/CommunityPage';
import LectureList from './file/LectureList';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/LectureList"><LectureList/></Route>
                <Route exact path="/CommunityPage"><CommunityPage/></Route>
                <Route exact path="/Question"><Question/></Route>
                <Route exact path="/MainPage"><MainPage/></Route>
                <Route exact path="/LectureVidio"><LectureVidio/></Route>
                <Route exact path="/LectureView"><LectureView/></Route>
                <Route exact path="/LoginPage"><LoginPage/></Route>
                <Route exact path="/Mypage"><Mypage/></Route>
                <Route exact path="/RegisterPage"><RegisterPage/></Route>
                <Route exact path="/"><LectureList/></Route>
            </Switch>
        </Router>
    );
}

export default App;