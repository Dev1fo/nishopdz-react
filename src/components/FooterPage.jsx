import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Plus d'informations</h5>
            <p>
              Nos partenaires
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contacts</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Nous contacter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Newsletter</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Liani Samy
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;