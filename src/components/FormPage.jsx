import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

class FormPage extends React.Component {
  state = {
    commande: {
      nom: "",
      phoneNumber:"",
      email: "",
      ref: "",
      message: "",
      quantite: "",
      couleur: "",
      adresse: ""
    }
  };

  change = e => {
    const newCmd = { ...this.state.commande };
    newCmd[e.target.name] = e.target.value;

    this.setState({ commande: newCmd });
  };

  mail = () => {
    const {
      nom,
      phoneNumber,
      email,
      ref,
      message,
      quantite,
      couleur,
      adresse
    } = this.state.commande;
    const mailto = `mailto:samy.liani@gmail.com?subject= Produit : ${ref}&body= Le Nom complet du client: ${nom} %0D%0A
      Mon adresse mail : ${email}%0D%0A
      Numéro client: ${phoneNumber}%0D%0A
      Adresse complète: ${adresse}%0D%0A
      La référence produit : ${ref}%0D%0A
      Choix couleur(si disponible): ${couleur}%0D%0A
      Quantité: ${quantite}%0D%0A%0D%0A
      Le Message Client: ${message}`;

    window.location.href = mailto;
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="10">
            <form>
              <p className="h1  mb-4 mt-10">Paiement à la livraison</p>
              <div className="grey-text">
                <MDBInput
                  label="Votre nom complet"
                  icon="user"
                  group
                  required
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="nom"
                  value={this.state.commande.nom}
                />
                <MDBInput
                  label="Votre numéro de téléphone"
                  icon="phone"
                  group
                  required
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="phoneNumber"
                  value={this.state.commande.phoneNumber}
                />
                <MDBInput
                  label="Votre email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="email"
                  value={this.state.commande.email}
                />
               
                <MDBInput
                  label="Adresse complète"
                  icon="city"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="adresse"
                  value={this.state.commande.adresse}
                />
                
                <MDBInput
                  label="Référence produit"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="ref"
                  value={this.state.commande.ref}
                />
                  <MDBInput
                  label="Quantite du même produit"
                  icon="list-ol"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="quantite"
                  value={this.state.commande.quantite}
                />
                <MDBInput
                  label="Couleur si disponible"
                  icon="palette"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.change}
                  name="couleur"
                  value={this.state.commande.couleur}
                />

                   

                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Demande spéciale"
                  icon="pencil-alt"
                  onChange={this.change}
                  name="message"
                  value={this.state.commande.message}
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary" onClick={this.mail}>
                  Commander maintenant
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default FormPage;
