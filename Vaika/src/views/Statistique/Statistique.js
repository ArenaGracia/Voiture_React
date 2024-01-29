import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import TopCards from "../../components/dashboard/TopCards";
import { useEffect, useState } from "react";
import { statElelemnt } from "../../services/StatistiquesService";

function Statistique (){
  const[element,setElement]=useState({});
  const[data,setData]=useState([]);

  useEffect(() => {
    statElelemnt().then((response) => {
        setElement(response.data);
        const transformedData = response.data.marque.map(item => ({
          name: item.intitule,
          uv: item.nbVente
        }));
        setData(transformedData);
    }).catch(error => {
    console.error(error);
    })
}, [])

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Marque"
            earning={element.nbMarque}
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Categorie"
            earning={element.nbCategorie}
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Transmission"
            earning={element.nbModeTransmission}
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Specification"
            earning={element.nbSpecification}
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Energie"
            earning={element.nbEnergie}
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Couleur"
            earning={element.nbCouleur}
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="4" xl="7" xxl="8">
          <Card>
          <CardBody>
            <CardTitle tag="h5">Marque la plus vendue</CardTitle>
            <br />
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistique;
