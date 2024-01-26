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
import { getModele, updateModele } from "../../../services/ModeleService";
import { useParams } from "react-router-dom/dist";
  
function EditModele(){
    const { id } =useParams()
    const [modeleDetails, setModeleDetails] = useState({ idModele: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      getModele(id).then((response) => {
        setModeleDetails(response.data);
        console.log(response.data);
        console.log(modeleDetails);
      }).catch(error => {
        console.error(error);
      })
    },[id, modeleDetails]);

    function modifModele(e){
        e.preventDefault();
        updateModele(modeleDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setModeleDetails((prevDetails) => ({
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
                  <Label for="exampleEmail">Modèle</Label>
                  <Input
                    id="exampleEmail"
                    name="Modele"
                    placeholder="Modele"
                    type="text"
                    value={modeleDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifModele} color="primary">Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/Modele" />}
      </Row>
    );
  };
  
export default EditModele;
  