import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    AnnonceValiderubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import Blog from "../../components/dashboard/Blog";
  import bg1 from "../../assets/images/bg/bg1.jpg";
  import bg2 from "../../assets/images/bg/bg2.jpg";
  import bg3 from "../../assets/images/bg/bg3.jpg";
  import bg4 from "../../assets/images/bg/bg4.jpg";
  
  const BlogData = [
    {
      image: bg1,
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg2,
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg3,
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: bg4,
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  
    {
      image: bg4,
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  ];
  
  const AnnonceValider = () => {
    return (
      <div>
        <h5 className="mb-3">Liste des annonces à valider</h5>
        <Row>
          {BlogData.map((blg, index) => (
            <Col sm="6" lg="6" xl="4" key={index}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default AnnonceValider;
  