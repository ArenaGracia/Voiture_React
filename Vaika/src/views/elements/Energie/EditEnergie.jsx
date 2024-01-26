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
import { getEnergie, updateEnergie } from "../../../services/EnergieService";
import { useParams } from "react-router-dom/dist";
  
function EditEnergie(){
    const { id } =useParams()
    const [energyDetails, setEnergieDetails] = useState({ idEnergie: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      getEnergie(id).then((response) => {
        setEnergieDetails(response.data);
        console.log(response.data);
        console.log(energyDetails);
      }).catch(error => {
        console.error(error);
      })
    },[energyDetails, id]);

    function modifEnergie(e){
        e.preventDefault();
        updateEnergie(energyDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setEnergieDetails((prevDetails) => ({
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
                  <Label for="exampleEmail">Energie</Label>
                  <Input
                    id="exampleEmail"
                    name="energie"
                    placeholder="Energie"
                    type="text"
                    value={energyDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifEnergie} color="primary">Modifier</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/energie" />}
      </Row>
    );
  };
  
  export default EditEnergie;
  