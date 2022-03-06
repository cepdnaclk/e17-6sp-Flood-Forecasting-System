import { Link , BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

//import components
import Home from './assets/pages/home/home';
import Report from './assets/pages/report/report';
import Signin from './assets/pages/signin/signin';
import Signup from './assets/pages/signup/signup';

//styles
import './index.css';

export default function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}


/*Homepage*/
function Homepage(){
  return(
    <Router>
      <div>
        <Nav_bar/>
      </div>
        

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Report" element={<Report/>}/>
            <Route exact path="/Signin" element={<Signin/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
          </Routes>

    </Router>
  );
}


/*navigation bar*/
function Nav_bar(){
  return(
    <div className="row main">
      <div className="col-6 brand">
          <h2>FLOOD FORCASTING SYSTEM</h2>
      </div>

        <Link to='/Home' className="tab active" id="home" onClick={()=>set_active("home")}>
          <h5>HOME</h5>
        </Link>

        <Link to='/Report' className="tab" id="report" onClick={()=>set_active("report")}>
          <h5>REPORT</h5>
        </Link>

        <Link to='/Signin' className="tab" id="signin" onClick={()=>set_active("signin")}>
          <h5>SIGN IN</h5>
        </Link>

        <Link to='/Signup' className="tab" id="signup" onClick={()=>set_active("signup")}>
          <h5>SIGN UP</h5>
        </Link>

    </div>
  );


/*function that makes tab be active*/
function set_active(id){

  //make all tabs be unactive
  document.getElementById("home").classList.remove("active");
  document.getElementById("report").classList.remove("active");
  document.getElementById("signin").classList.remove("active");
  document.getElementById("signup").classList.remove("active");

  //new active tab
  document.getElementById(id).className += " active";  

}

}
