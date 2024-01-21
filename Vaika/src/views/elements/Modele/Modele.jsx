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
import { createModele, listModeles } from "../../../services/ModeleService";

function Modele(){
const [intitule,setIntitule] = useState('')
const [modeles,setModeles] = useState([])

function saveModele(e){
    e.preventDefault();
    const modele={intitule}
    createModele(modele);
}

useEffect(() => {
    listModeles().then((response) => {
    setModeles(response.data);
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
                <Label for="exampleEmail">Modele</Label>
                <Input
                id="exampleEmail"
                name="modele"
                placeholder="Modele"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveModele} color="primary">Valider</Button>
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
                        modeles.map(modele => 
                            <tr key={modele.idModele} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {modele.intitule}
                                </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {modele.vinNum}
                                </div>
                                </div>
                            </td>
                            <td><Link to={`/modele/edit/${Modele.idModele}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/modele/delete/${Modele.idModele}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Modele;
