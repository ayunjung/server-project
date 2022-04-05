import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './file/LoginPage';
import RegisterPage from './file/RegisterPage';
import Mypage from './file/Mypage';
import LectureView from './file/LectureView';
import LectureVidio from './file/LectureVidio';
import LectureMain from './file/LectureMain';
import Question from './file/Question';
import CommunityPage from './file/CommunityPage';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/CommunityPage"><CommunityPage/></Route>
                <Route exact path="/Question"><Question/></Route>
                <Route exact path="/LectureMain"><LectureMain/></Route>
                <Route exact path="/LectureVidio"><LectureVidio/></Route>
                <Route exact path="/LectureView"><LectureView/></Route>
                <Route exact path="/LoginPage"><LoginPage/></Route>
                <Route exact path="/Mypage"><Mypage/></Route>
                <Route exact path="/RegisterPage"><RegisterPage/></Route>
                <Route exact path="/"><LoginPage/></Route>
            </Switch>
        </Router>
    );
}

export default App;