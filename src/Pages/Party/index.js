import { PartyImage } from "./styles";
import { ContainerEvent, RemoveButton } from "../Graduation/styles";
import {
  BeerDescription,
  BeerName,
  Container,
  Image,
  ProductBox,
} from "../Home/styles";
import { Paper } from "@material-ui/core";
import { useCart } from "../../Providers/cart";

const Party = () => {
  const { cart, setCart } = useCart();
  const removeBeer = (index) => {
    const { wedding, graduation, party } = cart;
    const newCart = party.filter((_item, itemIndex) => itemIndex !== index);
    setCart(newCart);
    setCart({
      wedding,
      graduation,
      party: newCart,
    });
  };

  return (
    <ContainerEvent>
      <PartyImage>
        <h1>Confraternização</h1>
      </PartyImage>
      <h2>Lista de bebidas</h2>
      <Container>
        {cart.party.map((beer, index) => (
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

export default Party;
