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
import { createModeleTransmission, listModeleTransmissions } from "../../../services/ModeleTransmissionService";

function ModeleTransmission(){
const [intitule,setIntitule] = useState('')
const [modeleTransmissions,setModeleTransmissions] = useState([])

function saveModeleTransmission(e){
    e.preventDefault();
    const modeleTransmission={intitule}
    createModeleTransmission(modeleTransmission);
}

useEffect(() => {
    listModeleTransmissions().then((response) => {
    setModeleTransmissions(response.data);
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
            Ajouter un modèle
        </CardTitle>
        <CardBody>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">ModeleTransmission</Label>
                <Input
                id="exampleEmail"
                name="modeleTransmission"
                placeholder="ModeleTransmission"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveModeleTransmission} color="primary">Valider</Button>
            </Form>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-list me-2"> </i>
            Liste des modèles
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
                    {
                        modeleTransmissions.map(modeleTransmission => 
                            <tr key={modeleTransmission.idModeleTransmission} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {modeleTransmission.intitule}
                                </div>
                                </div>
                            </td>
                            
                            <td><Link to={`/modeleTransmission/edit/${modeleTransmission.idModeleTransmission}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/modeleTransmission/delete/${modeleTransmission.idModeleTransmission}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default ModeleTransmission;
