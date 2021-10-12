import { ContainerEvent, GraduationImage, RemoveButton } from "./styles";
import { Paper } from "@material-ui/core";
import { useCart } from "../../Providers/cart";
import {
  BeerDescription,
  BeerName,
  Container,
  Image,
  ProductBox,
} from "../Home/styles";

const Graduation = () => {
  const { cart, setCart } = useCart();
  const removeBeer = (index) => {
    const { wedding, graduation, party } = cart;
    const newCart = graduation.filter(
      (_item, itemIndex) => itemIndex !== index
    );
    setCart(newCart);
    setCart({
      wedding,
      graduation: newCart,
      party,
    });
  };

  return (
    <ContainerEvent>
      <GraduationImage>
        <h1>Graduação</h1>
      </GraduationImage>
      <h2>Lista de bebidas</h2>
      <Container>
        {cart.graduation.map((beer, index) => (
          <Paper
            elevation={20}
            key={index}
            style={{
              margin: "10px 0",
              width: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductBox>
              <Image src={beer.image_url} alt={beer.name} />
              <BeerName>{beer.name}</BeerName>
              <BeerDescription>{beer.description}</BeerDescription>
              <RemoveButton onClick={() => removeBeer(index)}>
                Remover produto
              </RemoveButton>
            </ProductBox>
          </Paper>
        ))}
      </Container>
    </ContainerEvent>
  );
};

export default Graduation;
