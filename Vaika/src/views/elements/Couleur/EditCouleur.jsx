import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { getCouleur, updateCouleur } from "../../../services/CouleurService";
import { useParams } from "react-router-dom/dist";
  
function EditCouleur(){
    const { id } =useParams()
    const [couleurDetails, setCouleurDetails] = useState({ idCouleur: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      getCouleur(id).then((response) => {
        setCouleurDetails(response.data);
        console.log(response.data);
        console.log(couleurDetails);
      }).catch(error => {
        console.error(error);
      })
    },[couleurDetails, id]);

    function modifCouleur(e){
        e.preventDefault();
        updateCouleur(couleurDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setCouleurDetails((prevDetails) => ({
          ...prevDetails,
          intitule: e.target.value,
        }));
    }
  
    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Modification
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Couleur</Label>
                  <Input
                    id="exampleEmail"
                    name="Couleur"
                    placeholder="Couleur"
                    type="text"
                    value={couleurDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifCouleur} color="primary">Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/couleur" />}
      </Row>
    );
  };
  
export default EditCouleur;
  