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
import { getMarque, updateMarque } from "../../../services/MarqueService";
import { useParams } from "react-router-dom/dist";
  
function EditMarque(){
    const { id } =useParams()
    const [marqueDetails, setMarqueDetails] = useState({ idMarque: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      getMarque(id).then((response) => {
        setMarqueDetails(response.data);
        console.log(response.data);
        console.log(marqueDetails);
      }).catch(error => {
        console.error(error);
      })
    },[id, marqueDetails]);

    function modifMarque(e){
        e.preventDefault();
        updateMarque(marqueDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setMarqueDetails((prevDetails) => ({
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
                  <Label for="exampleEmail">Marque</Label>
                  <Input
                    id="exampleEmail"
                    name="Marque"
                    placeholder="Marque"
                    type="text"
                    value={marqueDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifMarque} color="primary">Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/marque" />}
      </Row>
    );
  };
  
export default EditMarque;
  