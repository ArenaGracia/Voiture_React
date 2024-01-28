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
import { createModeTransmission, listModeTransmissions } from "../../../services/ModeTransmissionService";

function ModeTransmission(){
const [intitule,setIntitule] = useState('')
const [modeTransmissions,setModeTransmissions] = useState([])

function saveModeTransmission(e){
    e.preventDefault();
    const ModeTransmission={intitule}
    createModeTransmission(ModeTransmission).then((response)=>{
      setModeTransmissions([...modeTransmissions,response.data]);
    }).catch(error => {
      console.log(error);
    });
  }

useEffect(() => {
    listModeTransmissions().then((response) => {
    setModeTransmissions(response.data);
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
                <Label for="exampleEmail">ModeTransmission</Label>
                <Input
                id="exampleEmail"
                name="modeTransmission"
                placeholder="ModeTransmission"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveModeTransmission} style={{backgroundColor:'blue', borderColor:'blue'}}>Valider</Button>
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
                        modeTransmissions.map(modeTransmission => 
                            <tr key={modeTransmission.idModeTransmission} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {modeTransmission.intitule}
                                </div>
                                </div>
                            </td>
                            
                            <td><Link to={`/modeTransmission/edit/${modeTransmission.idModeTransmission}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/modeTransmission/delete/${modeTransmission.idModeTransmission}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default ModeTransmission;
