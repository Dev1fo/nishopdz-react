import React, { Component } from "react";
import FormPage from "./FormPage";
import CarouselPage from "./CarouselPage";
import Gallery from "./Gallery";
import Nathan from "./Nathan";
// import LightboxPage from "./LightboxPage";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

class TabsDefault extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    //e.preventDefault();
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
      /*if (document.getElementById(tab)) {
        // e.target.style.fontWeight = "bold";
        document.getElementById(tab).classList.add("selection");
      } else {
        document.getElementById(tab).classList.remove("selection");
      }*/
    }
    if (document.getElementById(tab).id === tab) {
      document.getElementById(tab).classList.add("selection");
    }
    document.getElementById(tab).classList.add("selection");
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          {/* Item 1 */}
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
              id="1"
            >
              Accueil
            </MDBNavLink>
          </MDBNavItem>
          {/* Item 2 */}
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
              id="2"
            >
              Passer commande
            </MDBNavLink>
          </MDBNavItem>
          {/* Item 3 */}

          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
              id="3"
            >
              Notre shop
            </MDBNavLink>
          </MDBNavItem>

          {/* Item 4 */}

          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "4"}
              onClick={this.toggle("4")}
              role="tab"
              id="4"
            >
              Mes images
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>

        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            {/* Page 1 */}

            {/* composant 1 */}
            <Nathan />
            <p className="h1 mt-10">Nos offres du black friday</p>

            <CarouselPage />
            <p className="h1 mt-10">Toutes nos activités/sorties 2019</p>
            <Gallery />
          </MDBTabPane>

          {/* Page 2 */}

          <MDBTabPane tabId="2" role="tabpanel">
            <FormPage />

            {/* Page 3 google map */}
          </MDBTabPane>

          <MDBTabPane tabId="3" role="tabpanel">
            <p className="h1 mt-10">Nous nous trouvons à cette adresse</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8482745473066!2d2.236576151019392!3d48.84203270971104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67adc67fefb3f%3A0xfaeb993fddebdde6!2sBoulogne%20-%20Jean%20Jaur%C3%A8s!5e0!3m2!1sfr!2sfr!4v1574945511824!5m2!1sfr!2sfr"
              width="600"
              height="450"
              title="map nishopdz"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </MDBTabPane>

          {/* Page 4 */}

          <MDBTabPane tabId="4" role="tabpanel">
            {/* <LightboxPage /> */}
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;
