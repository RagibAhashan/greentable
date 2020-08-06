import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footerPage.css'


const FooterPage = () => {
  return (
    <MDBFooter color="blue" id='footer'>
      <MDBContainer fluid className="text-center text-md-left" >
        <MDBRow>
          <MDBCol md="3">
          
          </MDBCol>
          <MDBCol md="2" style={{color:'white', fontSize:'30px', marginTop:'30px' }}>
            Home
          </MDBCol>

          <MDBCol md="2" style={{color:'white', fontSize:'30px', marginTop:'30px' }}>
            Terms of Service
          </MDBCol>

          <MDBCol md="1" style={{color:'white', fontSize:'30px', marginTop:'30px' }}>
            Contact us
          </MDBCol>
          
        </MDBRow>


      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <h2 style={{color:'black'}}> SevenMeal </h2>
        <MDBContainer fluid style={{color:'black'}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="/" style={{color:'black'}}> SevenMeal.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;