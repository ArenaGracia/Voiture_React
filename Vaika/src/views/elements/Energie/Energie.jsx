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
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { createEnergie, listEnergies } from "../../../services/EnergieService";

function Energie(){
  const [intitule,setIntitule] = useState('')
  const [energies,setEnergies] = useState([])

  function saveEnergie(e){
    e.preventDefault();
    const energie={intitule}
    createEnergie(energie);
  }

  useEffect(() => {
    listEnergies().then((response) => {
      setEnergies(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])

  function handleIntitule(e){
    setIntitule(e.target.value);
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Ajouter une énergie
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
                  onChange={handleIntitule}
                />
              </FormGroup>
              <Button onClick={saveEnergie} color="primary">Valider</Button>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-list me-2"> </i>
              Liste des énergies
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <tbody>
                    {
                        energies.map(energie => 
                            <tr key={energie.idEnergie} className="border-top">
                              
                              <td>
                                <div className="d-flex align-items-center p-2">
                                  <div className="ms-3">    
                                    {energie.intitule}
                                  </div>
                                </div>
                              </td>
                              <td><Link to={`/energie/edit/${energie.idEnergie}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                              <td><Link to={`/energie/delete/${energie.idEnergie}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
                            </tr>
                        )
                    }
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Energie;
