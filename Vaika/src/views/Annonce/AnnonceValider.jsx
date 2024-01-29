import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
  } from "reactstrap";
import { listAnnonceValider, valider } from "../../services/AnnonceService";
import { useState,useEffect } from "react";
  
function AnnonceValider(){
    const [annonces,setAnnonceValider] = useState([])

    function validerAnnonce(e,annonceId){
      e.preventDefault();
      valider(annonceId);
      // window.location.reload();
    }

    useEffect(() => {
      listAnnonceValider().then((response) => {
      setAnnonceValider(response.data);
      console.log(response);
      }).catch(error => {
      console.error(error);
      })
  }, [])

    return (
      <div>
        <h5 className="mb-3">Liste des annonces à valider</h5>
        <Row>
          {annonces.map((annonce, index) => (
            <Col sm="6" lg="6" xl="4" key={index}>
              <Card>
                  <CardBody className="p-4">
                    <CardTitle tag="h5">{annonce.description}</CardTitle>
                    <ul>
                      <li className="mt-3">{annonce.immatriculation}</li>
                      <li className="mt-3">{annonce.specification}</li>
                      <li className="mt-3">{annonce.modeTransmission}</li>
                      <li className="mt-3">{annonce.energie}</li>
                      <li className="mt-3">{annonce.categorie}</li>
                      <li className="mt-3">{annonce.couleur}</li>
                      <li className="mt-3">{annonce.nbPorte} portes</li>
                      <li className="mt-3">{annonce.nbSiege} sièges</li>
                    </ul>
                    <br />
                    <CardTitle tag="h5">{annonce.prix} Ar</CardTitle>
                    <Button style={{backgroundColor:'blue', borderColor:'blue'}} onClick={(e) => validerAnnonce(e, annonce.idAnnonce)}>Valider</Button>
                  </CardBody>
            </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default AnnonceValider;
  