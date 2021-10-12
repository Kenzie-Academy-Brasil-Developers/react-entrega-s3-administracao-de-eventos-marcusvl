import { useCart } from "../../Providers/cart";
import { Paper } from "@material-ui/core";
import { WeddingImage } from "./styles";
import {
  BeerDescription,
  BeerName,
  Container,
  Image,
  ProductBox,
} from "../Home/styles";
import { ContainerEvent, RemoveButton } from "../Graduation/styles";

const Wedding = () => {
  const { cart, setCart } = useCart();
  const removeBeer = (index) => {
    const { wedding, graduation, party } = cart;
    const newCart = wedding.filter((_item, itemIndex) => itemIndex !== index);
    setCart(newCart);
    setCart({
      wedding: newCart,
      graduation,
      party,
    });
  };

  return (
    <ContainerEvent>
      <WeddingImage>
        <h1>Casamento</h1>
      </WeddingImage>
      <h2>Lista de bebidas</h2>
      <Container>
        {cart.wedding.map((beer, index) => (
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
                Ver produto
              </RemoveButton>
            </ProductBox>
          </Paper>
        ))}
      </Container>
    </ContainerEvent>
  );
};

export default Wedding;
