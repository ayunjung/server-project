import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import CommunityView from './pages/CommunityView';
import CommunityWrite from './pages/CommunityWrite';
import LectureList from './pages/LectureList';
import LectureMain from './pages/LectureMain';
import LectureVidio from './pages/LectureVidio';
import LectureView from './pages/LectureView';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import Mypage from './pages/Mypage';
import QuestionPage from './pages/QuestionPage';
import QuestionView from './pages/QuestionView';
import QuestionWrite from './pages/QuestionWrite';
import RegisterPage from './pages/RegisterPage';
import LoginPopupPage from './pages/LoginPopupPage';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/LoginPopupPage"><LoginPopupPage/></Route>
                <Route exact path="/CommunityPage"><CommunityPage/></Route>
                <Route exact path="/CommunityView/:communum"><CommunityView/></Route>
                <Route exact path="/CommunityWrite"><CommunityWrite/></Route>
                <Route exact path="/LectureList/:sort"><LectureList/></Route>
                <Route exact path="/LectureMain"><LectureMain/></Route>
                <Route exact path="/LectureVidio"><LectureVidio/></Route>
                <Route exact path="/LectureView/:lecnum"><LectureView/></Route>
                <Route exact path="/LoginPage"><LoginPage/></Route>
                <Route exact path="/MainPage"><MainPage/></Route>
                <Route exact path="/ModifyInfoPage"><ModifyInfoPage/></Route>
                <Route exact path="/Mypage"><Mypage/></Route>
                <Route exact path="/QuestionPage"><QuestionPage/></Route>
                <Route exact path="/QuestionView/:quesnum"><QuestionView/></Route>
                <Route exact path="/QuestionWrite"><QuestionWrite/></Route>
                <Route exact path="/RegisterPage"><RegisterPage/></Route>
                <Route path="/"><MainPage/></Route>
            </Switch>
        </Router>
    );
}

export default App;