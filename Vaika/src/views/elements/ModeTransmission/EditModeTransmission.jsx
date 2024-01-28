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
import { getModeTransmission, updateModeTransmission } from "../../../services/ModeTransmissionService";
import { useParams } from "react-router-dom/dist";
  
function EditModeTransmission(){
    const { id } =useParams();
    const [load, setLoad] = useState(false);
    const [modeTransmissionDetails, setModeTransmissionDetails] = useState({ idModeTransmission: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      if(!load){
        getModeTransmission(id).then((response) => {
          setModeTransmissionDetails(response.data);
          setLoad(true);
          console.log(response.data);
          console.log(modeTransmissionDetails);
        }).catch(error => {
          console.error(error);
        })
      }
    });

    function modifModeTransmission(e){
        e.preventDefault();
        updateModeTransmission(modeTransmissionDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setModeTransmissionDetails((prevDetails) => ({
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
                    name="ModeTransmission"
                    placeholder="ModeTransmission"
                    type="text"
                    value={modeTransmissionDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifModeTransmission} style={{backgroundColor:'blue', borderColor:'blue'}}>Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/modeTransmission" />}
      </Row>
    );
  };
  
export default EditModeTransmission;
  