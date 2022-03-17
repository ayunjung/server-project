// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

const Login = () => {

    const Loginform = styled.div`
      width: 600px;
      font-size: 25px;
    `

    const Userinput = styled.input`
      margin: 10px 0;
      width: 100%;
      height: 70px;
      border: 1px solid #999;
      border-radius: 5px;
      font-size: 30px;
    `

    const Checkbox = styled.input`
      margin: 3px;
    `

  return (
    <Formik>
      <Loginform>
        <Userinput placeholder='Username' />
        <Userinput placeholder='password' />
        <Checkbox type="checkbox" id="checkbox" /><label for="checkbox">로그인 유지</label>
      </Loginform>
    </Formik>
  )
}

export default Login


// import styled from 'styled-components';
// import React from 'react'

// const magnifyStyle = {
//     marginTop : '9',
//     marginLeft : '10',
//     marginRight : '10',
//     height : '30',
//   }

//   const Manidiv = styled.div`
//     background : #cacaca;
//     height : 100%;
//     width : 50px;
//     border-radius : 5px 0 0 5px;
//   `

//   const SMainSearchbar = styled.div`
//     width : 373px;
//     height : 50px;
//     border-radius : 5px;
//     border : 1px solid gray;
//     margin : 5px;
//     display : flex;
//   `

//   const Input = styled.input`
//     width : 320px;
//     font-size : 20px;
//     padding : 7px;
//   `

// const MainSearchbar = () => {
//   return (
//     <div>
//         <SMainSearchbar>
//             <Manidiv>
//             </Manidiv>
//             <Input></Input>
//         </SMainSearchbar>
//     </div>
//   )
// }

// export default MainSearchbar