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
import { getComission, updateComission } from "../../../services/ComissionService";
import { useParams } from "react-router-dom/dist";

function EditComission(){
  const { id } =useParams()
  const [comissionDetails, setComissionDetails] = useState({ idComission: '', valeur: '', etat:'' });
  const [redirect, setRedirect] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if(!load){
      getComission(id).then((response) => {
        setComissionDetails(response.data);
        setLoad(true);
        console.log(response.data);
        console.log(comissionDetails);
      }).catch(error => {
        console.error(error);
      })
    }
  });

  function modifComission(e){
      e.preventDefault();
      updateComission(comissionDetails);
      setRedirect(true);
    }

  function handleValeur(e){
      setComissionDetails((prevDetails) => ({
        ...prevDetails,
        valeur: e.target.value,
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
                <Label for="exampleEmail">Comission</Label>
                <Input
                  id="exampleEmail"
                  name="Comission"
                  placeholder="Comission"
                  type="text"
                  value={comissionDetails.valeur}
                  onChange={handleValeur}
                />
              </FormGroup>
              <Button onClick={modifComission} style={{backgroundColor:'blue', borderColor:'blue'}}>Modifer</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      { redirect && <Navigate to="/comission" />}
    </Row>
  );
};

export default EditComission;
