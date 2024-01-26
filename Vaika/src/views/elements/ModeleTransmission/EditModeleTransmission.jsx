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
import { getModeleTransmission, updateModeleTransmission } from "../../../services/ModeleTransmissionService";
import { useParams } from "react-router-dom/dist";
  
function EditModeleTransmission(){
    const { id } =useParams()
    const [modeleTransmissionDetails, setModeleTransmissionDetails] = useState({ idModeleTransmission: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      getModeleTransmission(id).then((response) => {
        setModeleTransmissionDetails(response.data);
        console.log(response.data);
        console.log(modeleTransmissionDetails);
      }).catch(error => {
        console.error(error);
      })
    },[id, modeleTransmissionDetails]);

    function modifModeleTransmission(e){
        e.preventDefault();
        updateModeleTransmission(modeleTransmissionDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setModeleTransmissionDetails((prevDetails) => ({
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
                    name="ModeleTransmission"
                    placeholder="ModeleTransmission"
                    type="text"
                    value={modeleTransmissionDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifModeleTransmission} color="primary">Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/modeleTransmission" />}
      </Row>
    );
  };
  
export default EditModeleTransmission;
  