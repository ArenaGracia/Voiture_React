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
import { getSpecification, updateSpecification } from "../../../services/SpecificationService";
import { useParams } from "react-router-dom/dist";
  
function EditSpecification(){
    const { id } =useParams();
    const [load, setLoad] = useState(false);
    const [SpecificationDetails, setSpecificationDetails] = useState({ idSpecification: '', intitule: '', etat:'' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      if(!load){
        getSpecification(id).then((response) => {
          setSpecificationDetails(response.data);
          setLoad(true);
          console.log(response.data);
          console.log(SpecificationDetails);
        }).catch(error => {
          console.error(error);
        })
      }
    });

    function modifSpecification(e){
        e.preventDefault();
        updateSpecification(SpecificationDetails);
        setRedirect(true);
      }
  
    function handleIntitule(e){
        setSpecificationDetails((prevDetails) => ({
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
                  <Label for="exampleEmail">Specification</Label>
                  <Input
                    id="exampleEmail"
                    name="Specification"
                    placeholder="Specification"
                    type="text"
                    value={SpecificationDetails.intitule}
                    onChange={handleIntitule}
                  />
                </FormGroup>
                <Button onClick={modifSpecification} style={{backgroundColor:'blue', borderColor:'blue'}}>Modifer</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        { redirect && <Navigate to="/Specification" />}
      </Row>
    );
  };
  
export default EditSpecification;
  