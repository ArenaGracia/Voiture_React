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
import { createCouleur, listCouleurs } from "../../../services/CouleurService";

function Couleur(){
const [intitule,setIntitule] = useState('')
const [couleurs,setCouleurs] = useState([])

function saveCouleur(e){
    e.preventDefault();
    const couleur={intitule}
    createCouleur(couleur);
}

useEffect(() => {
    listCouleurs().then((response) => {
    setCouleurs(response.data);
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
            Ajouter une couleur
        </CardTitle>
        <CardBody>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Couleur</Label>
                <Input
                id="exampleEmail"
                name="Couleur"
                placeholder="Couleur"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveCouleur} color="primary">Valider</Button>
            </Form>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-list me-2"> </i>
            Liste des couleurs
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
                    {
                        couleurs.map(couleur => 
                            <tr key={couleur.idCouleur} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {couleur.intitule}
                                </div>
                                </div>
                            </td>
                            <td><Link to={`/couleur/edit/${couleur.idCouleur}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/couleur/delete/${couleur.idCouleur}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Couleur;
