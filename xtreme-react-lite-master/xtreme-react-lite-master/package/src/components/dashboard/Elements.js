import { Card, CardBody, CardTitle, Table } from "reactstrap";

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Liste des éléments</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Elements</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
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
    </div>
  );
};

export default ProjectTables;
