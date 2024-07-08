import './App.css';
import Navbar from './Components/Navbar.mjs';
import TextForms from './Components/TextForms.js';
import React, { useState } from 'react'
import Alert from './Components/Alert.mjs';
import About from './Components/About.js';
import {createBrowserRouter , RouterProvider}from 'react-router-dom'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171717';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title='Install Now'
      // },1500);

    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 ">
      <TextForms heading="Try TextUtils - Word Counter,Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>
      </div>
      </>,
    },
    {
      path: "/about",
      element: <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 ">
      <About mode={mode}/>
      </div>
      </>,
    }
  ])
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils"/> */}
       <RouterProvider router={router}/>
    </>
  );
}

export default App;
