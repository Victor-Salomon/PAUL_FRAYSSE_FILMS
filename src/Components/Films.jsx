import { Container, Row } from "reactstrap";
import { bulit } from "./Images/MainCarousel/Images";

const Films = () => {
  const Movies = [
    {
      src: bulit,
      alt: "film-lancement-nouvelle-collection-gant-film-textile",
      title: "BULIT",
    },
    {
      src: bulit,
      alt: "film-lancement-nouvelle-collection-gant-film-textile",
      title: "BULIT",
    },
  ];

  return (
    <Container>
      <Row>
        {Movies.map((m) => {
          return (
            <div>
              <img src={m.src} alt={m.alt} />
              <h3>{m.title}</h3>
            </div>
          );
        })}
        ;
      </Row>
    </Container>
  );
};

export default Films;
