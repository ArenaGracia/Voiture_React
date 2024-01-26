import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
const elements = [
  {
    nom: "Catégorie",
    href: "/categorie"
  },
  {
    nom: "Transmission",
    href: "/modeletransmission"
  },
  {
    nom: "Energie",
    href: "/energie"
  },
  {
    nom: "Marque",
    href: "/marque"
  },
  {
    nom: "Couleur",
    href: "/couleur"
  }
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Liste des éléments</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
              {
                elements.map(element => 
                  <tr className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                            <div className="ms-3">
                                {element.nom}
                            </div>
                        </div>
                      </td>
                      <td><Link to={element.href}><i class="bi bi-eye me-2" style={{fontSize:25}}></i></Link></td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
