import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footerPage.css'


const FooterPage = () => {
  return (
      
      <div class='row' style={{
        backgroundColor:'black',
        paddingBottom:'300px',
        paddingTop:'300px',
        color:'white'
      }}
      >
        <div class='col'> 
          <div class="d-flex justify-content-center">
            <h1 style={{fontSize:'80px'}}> Nasta </h1> 
          </div>
        </div>

        <div class='col'> 
          <div class="d-flex justify-content-center">
            <a href='/' style={{fontSize:'20px', color:'white', padding:'10px'}}> FAQ </a>
          </div>
          <div class="d-flex justify-content-center">
            <a href='/' style={{fontSize:'20px', color:'white', padding:'10px'}}> Contact us </a>
          </div>
          <div class="d-flex justify-content-center">
            <a href='/' style={{fontSize:'20px', color:'white', padding:'10px'}}> About us </a>
          </div>
          <div class="d-flex justify-content-center">
            <a href='/' style={{fontSize:'20px', color:'white', padding:'10px'}}> Terms and Service </a>
          </div>
        </div>

        <div class='col'> 
          <div class="d-flex justify-content-left">
            Placeholder for social media links 
          </div>
        </div>


      </div>
  );
}

export default FooterPage;