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
import { createSpecification, listSpecifications } from "../../../services/SpecificationService";

function Specification(){
const [intitule,setIntitule] = useState('')
const [Specifications,setSpecifications] = useState([])

function saveSpecification(e){
    e.preventDefault();
    const Specification={intitule}
    createSpecification(Specification);
}

useEffect(() => {
    listSpecifications().then((response) => {
    setSpecifications(response.data);
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
            Ajouter une specification
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
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveSpecification} style={{backgroundColor:'blue', borderColor:'blue'}}>Valider</Button>
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
                        Specifications.map(Specification => 
                            <tr key={Specification.idSpecification} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {Specification.intitule}
                                </div>
                                </div>
                            </td>
                            
                            <td><Link to={`/specification/edit/${Specification.idSpecification}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/specification/delete/${Specification.idSpecification}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Specification;
