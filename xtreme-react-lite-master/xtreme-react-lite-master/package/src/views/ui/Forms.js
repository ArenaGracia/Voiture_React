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

const Forms = () => {
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
                  name="email"
                  placeholder="Energie"
                  type="email"
                />
              </FormGroup>
              <Button className="btn btn-success">Submit</Button>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-list me-2"> </i>
              Liste des éléments
            </CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <tbody>
                  <tr className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                            Catégorie
                        </div>
                      </div>
                    </td>
                      
                    <td>Aaaa</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                            Energie
                        </div>
                      </div>
                    </td>
                      
                    <td>Aaaa</td>
                  </tr>
                  <tr className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                            Modèle
                        </div>
                      </div>
                    </td>
                      
                    <td>Aaaa</td>
                  </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
