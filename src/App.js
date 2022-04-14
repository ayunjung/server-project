import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Mypage from './pages/Mypage';
import LectureView from './pages/LectureView';
import LectureVidio from './pages/LectureVidio';
import MainPage from './pages/MainPage';
import Question from './pages/Question';
import CommunityPage from './pages/CommunityPage';
import LectureList from './pages/LectureList';
import WritePage from './pages/WritePage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import PostPage from './pages/PostPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/PostPage"><PostPage/></Route>
                <Route exact path="/WritePage"><WritePage/></Route>
                <Route exact path="/ModifyInfoPage"><ModifyInfoPage/></Route>
                <Route exact path="/LectureList"><LectureList/></Route>
                <Route exact path="/CommunityPage"><CommunityPage/></Route>
                <Route exact path="/Question"><Question/></Route>
                <Route exact path="/MainPage"><MainPage/></Route>
                <Route exact path="/LectureVidio"><LectureVidio/></Route>
                <Route exact path="/LectureView"><LectureView/></Route>
                <Route exact path="/LoginPage"><LoginPage/></Route>
                <Route exact path="/Mypage"><Mypage/></Route>
                <Route exact path="/RegisterPage"><RegisterPage/></Route>
                <Route path="/"><LoginPage/></Route>
            </Switch>
        </Router>
    );
}

export default App;