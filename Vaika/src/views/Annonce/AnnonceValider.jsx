import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
    CardSubtitle,
  } from "reactstrap";
import { listAnnonceValider } from "../../services/AnnonceService";
import { useState,useEffect } from "react";
  
function AnnonceValider(){
    const [annonces,setAnnonceValider] = useState([])

    function validerAnnonce(e,annonceId){
      e.preventDefault();
      
    }

    useEffect(() => {
      listAnnonceValider().then((response) => {
      setAnnonceValider(response.data);
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
                  <CardImg alt="Card image cap" src={`/images/${annonce.voiture.images[0]}`} />
                  <CardBody className="p-4">
                    <CardTitle tag="h5">{annonce.description}</CardTitle>
                    <CardSubtitle>{annonce.prix}</CardSubtitle>
                    <CardText className="mt-3">{annonce.voiture.modele}</CardText>
                    <Button color="success" onClick={(e) => validerAnnonce(e, annonce.idAnnonce)}>Valider</Button>
                  </CardBody>
            </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default AnnonceValider;
  