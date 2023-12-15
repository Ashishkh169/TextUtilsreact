
import './App.css';

import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
// import About from './Component/about';
import React, {useState} from 'react';

// import {
//    BrowserRouter as Router,
//    Route,
//    Routes
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const  showAlert = (message, type)=>{
        setAlert({
           msg : message,
           type :type
        })

        setTimeout(() => {
            setAlert(null);
        }, 1500);
  }
  const toggleMode = ()=>{
       
   if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#03083b';
      showAlert('Dark mode has been enabled', "success");
   }
   else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled', "success");
   }
  }

 
  return (
    <>
      
      {/* <Router> */}
     <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3" >
     
   
          {/* <Route exact path="/about" element={<About/>}></Route> */}
        <TextForm showAlert={showAlert} heading={`Enter Text For Change In To Uppercase`} mode={mode}/>
             
        
         </div>
        {/* </Router> */}
    </>
  );
}

export default App;
