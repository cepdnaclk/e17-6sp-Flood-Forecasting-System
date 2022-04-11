import './styles.css';

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">

    {/*
      <div className="about">
        <h5>Flood Forecasting Project</h5>
        <p>Floods are the most destructive form of natural hazards in both local and global context. This is true in terms of both loss of life and property damage. Early flood forecasting can be used to identify potential areas of flooding in order to develop mitigatory planning and evacuation programs to remove people from such areas during flooding and also to implement suitable preventive measures to avoid damage to properties.</p>
      </div>
    */}
      <div className="social row">
          <div className="icon"><FaGithub style={{color: '#766262', fontSize: '30px'}} /> </div> 
          <div className="icon"><FaFacebook style={{color: '#766262', fontSize: '30px'}} /> </div>
          <div className="icon"><FaLinkedin style={{color: '#766262', fontSize: '30px'}} /> </div>

      </div>
      <div className="copyright">
        <small>&copy; 2022 Group 15, All Right Reserved</small>
      </div>
    </div>
  );
}