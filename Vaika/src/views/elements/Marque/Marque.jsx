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
import { createMarque, listMarques } from "../../../services/MarqueService";

function Marque(){
const [intitule,setIntitule] = useState('')
const [marques,setMarques] = useState([])

function saveMarque(e){
    e.preventDefault();
    const marque={intitule}
    createMarque(marque);
}

useEffect(() => {
    listMarques().then((response) => {
    setMarques(response.data);
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
            Ajouter une marque
        </CardTitle>
        <CardBody>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Marque</Label>
                <Input
                id="exampleEmail"
                name="marque"
                placeholder="Marque"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveMarque} color="primary">Valider</Button>
            </Form>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-list me-2"> </i>
            Liste des marques
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
                    {
                        marques.map(marque => 
                            <tr key={marque.idMarque} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {marque.intitule}
                                </div>
                                </div>
                            </td>
                            <td><Link to={`/marque/edit/${Marque.idMarque}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/marque/delete/${Marque.idMarque}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Marque;
