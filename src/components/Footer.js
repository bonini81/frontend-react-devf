import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <React.Fragment>
 
              <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
  <a className="navbar-brand" href="#">MyPocket Links</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <a className="nav-link" href="/linkupload">Upload a Link</a>
      </li>
      
    </ul>
  </div>
</nav>
            
      </React.Fragment>
    );
  }
   
  export default Footer;