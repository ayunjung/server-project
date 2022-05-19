import React, { useState } from 'react'
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
import axios from 'axios'

function App() {

    const [LoginEmail,setLoginEmail] = useState("");

    axios.defaults.withCredentials = true;

    axios.post('http://localhost:3001/login', {
        }).then(response => {
            setLoginEmail(response.data.session.sid)
    })

    return (
        <Router>
            <Switch>
                <Route exact path="/CommunityPage"><CommunityPage/></Route>
                <Route exact path="/CommunityView/:communum"><CommunityView LoginEmail={LoginEmail} /></Route>
                <Route exact path="/CommunityWrite"><CommunityWrite/></Route>
                <Route exact path="/LectureList"><LectureList/></Route>
                <Route exact path="/LectureMain"><LectureMain/></Route>
                <Route exact path="/LectureVidio"><LectureVidio/></Route>
                <Route exact path="/LectureView"><LectureView/></Route>
                <Route exact path="/LoginPage"><LoginPage/></Route>
                <Route exact path="/MainPage"><MainPage/></Route>
                <Route exact path="/ModifyInfoPage"><ModifyInfoPage/></Route>
                <Route exact path="/Mypage"><Mypage LoginEmail={LoginEmail} /></Route>
                <Route exact path="/QuestionPage"><QuestionPage/></Route>
                <Route exact path="/QuestionView/:quesnum"><QuestionView LoginEmail={LoginEmail} /></Route>
                <Route exact path="/QuestionWrite"><QuestionWrite/></Route>
                <Route exact path="/RegisterPage"><RegisterPage/></Route>
                <Route path="/"><LoginPage/></Route>
            </Switch>
        </Router>
    );
}

export default App;