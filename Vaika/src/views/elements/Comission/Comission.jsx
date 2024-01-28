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
import { createComission, listComissions } from "../../../services/ComissionService";

function Comission(){
const [valeur,setValeur] = useState('')
const [date,setDate] = useState('')
const [comissions,setComissions] = useState([])

function saveComission(e){
    e.preventDefault();
    const comission={valeur,date}
    console.log(comission);
    createComission(comission).then((response)=>{
        setComissions([...comissions,response.data]);
    }).catch(error => {
        console.log(error);
    });
}

useEffect(() => {
    listComissions().then((response) => {
        setComissions(response.data);
    }).catch(error => {
    console.error(error);
    })
}, [])

function handleValeur(e){
    setValeur(e.target.value);
}
function handleDate(e){
    setDate(e.target.value);
}

return (
    <Row>
    <Col>
        <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Ajouter une comission
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
                onChange={handleValeur}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">date</Label>
                <Input
                id="exampleEmail"
                name="date"
                placeholder="date"
                type="date"
                onChange={handleDate}
                />
            </FormGroup>
            <Button onClick={saveComission} style={{backgroundColor:'blue', borderColor:'blue'}}>Valider</Button>
            </Form>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-list me-2"> </i>
            Liste des comissions
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
                    {
                        comissions.map(comission => 
                            <tr key={comission.idComission} className="border-top">
                            
                            <td>
                                <div className="d-flex align-items-center p-2">
                                <div className="ms-3">    
                                    {comission.valeur}
                                </div>
                                <div className="ms-3">    
                                    {comission.date}
                                </div>
                                </div>
                            </td>
                            <td><Link to={`/comission/edit/${comission.idCommission}`}><i class="bi bi-pencil-square me-2" style={{fontSize:25}}></i></Link></td>
                            <td><Link to={`/comission/delete/${comission.idCommission}`}><i class="bi bi-trash me-2" style={{fontSize:25, color:'red'}}></i></Link></td>
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

export default Comission;
