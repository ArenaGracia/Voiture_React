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
import { getCategorie, updateCategorie } from "../../../services/CategorieService";
import { useParams } from "react-router-dom/dist";

function EditCategorie(){
  const { id } =useParams()
  const [categorieDetails, setCategorieDetails] = useState({ idCategorie: '', intitule: '', etat:'' });
  const [redirect, setRedirect] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if(!load){
      getCategorie(id).then((response) => {
        setCategorieDetails(response.data);
        setLoad(true);
        console.log(response.data);
        console.log(categorieDetails);
      }).catch(error => {
        console.error(error);
      })
    }
  });

  function modifCategorie(e){
      e.preventDefault();
      updateCategorie(categorieDetails);
      setRedirect(true);
    }

  function handleIntitule(e){
      setCategorieDetails((prevDetails) => ({
        ...prevDetails,
        intitule: e.target.value,
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
                <Label for="exampleEmail">Categorie</Label>
                <Input
                  id="exampleEmail"
                  name="Categorie"
                  placeholder="Categorie"
                  type="text"
                  value={categorieDetails.intitule}
                  onChange={handleIntitule}
                />
              </FormGroup>
              <Button onClick={modifCategorie} style={{backgroundColor:'blue', borderColor:'blue'}}>Modifer</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      { redirect && <Navigate to="/categorie" />}
    </Row>
  );
};

export default EditCategorie;
