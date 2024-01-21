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
import { createCategorie, listCategories } from "../../../services/CategorieService";

function Categorie(){
const [intitule,setIntitule] = useState('')
const [categories,setCategories] = useState([])

function saveCategorie(e){
    e.preventDefault();
    const categorie={intitule}
    createCategorie(categorie);
}

useEffect(() => {
    listCategories().then((response) => {
    setCategories(response.data);
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
            Ajouter une catégorie
        </CardTitle>
        <CardBody>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Categorie</Label>
                <Input
                id="exampleEmail"
                name="Categorie"
                placeholder="Categorie"
                type="text"
                onChange={handleIntitule}
                />
            </FormGroup>
            <Button onClick={saveCategorie} color="primary">Valider</Button>
            </Form>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-list me-2"> </i>
            Liste des catégories
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
                    {
                        categories.map(categorie => 
                            <tr key={categorie.idCategorie} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {categorie.intitule}
                                </div>
                                </div>
                            </td>
                            <td><Link to={`/categorie/edit/${categorie.idCategorie}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/categorie/delete/${categorie.idCategorie}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Categorie;
