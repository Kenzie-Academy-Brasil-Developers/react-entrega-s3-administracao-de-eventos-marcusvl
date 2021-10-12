import { Paper } from "@material-ui/core";
import { useState } from "react";
import { useList } from "../../Providers/list";
import {
  Container,
  ProductBox,
  Image,
  BeerName,
  BeerDescription,
  ProductButton,
  BeerDetails,
  ContainerButton,
  ModalButton,
} from "./styles";
import Modal from "../../components/Modal";
import { useCart } from "../../Providers/cart";

const Home = () => {
  const { beerList } = useList();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState({});
  const { cart, setCart } = useCart();

  return (
    <>
      <h2>Lista de Cervejas</h2>
      <Container>
        {beerList.map((beer, index) => (
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
              <ProductButton
                onClick={() => {
                  setIsModalVisible(true);
                  setSelectedBeer(beer);
                }}
              >
                Ver produto
              </ProductButton>
            </ProductBox>
          </Paper>
        ))}
        {isModalVisible && (
          <Modal onClose={() => setIsModalVisible(false)}>
            <div className="beer-title">
              <h2>{selectedBeer.name}</h2>
              <BeerDetails>{selectedBeer.first_brewed}</BeerDetails>
            </div>
            <BeerDetails>{selectedBeer.description}</BeerDetails>
            <BeerDetails>
              <strong>Volume:</strong>
              {selectedBeer.volume.value} {selectedBeer.volume.unit}
            </BeerDetails>
            <BeerName>Lista de eventos:</BeerName>
            <ContainerButton>
              <ModalButton
                onClick={() => {
                  const { wedding, graduation, party } = cart;
                  setCart({
                    wedding: [...wedding, selectedBeer],
                    graduation,
                    party,
                  });
                }}
              >
                adicionar casamento
              </ModalButton>
              <ModalButton
                onClick={() => {
                  const { wedding, graduation, party } = cart;
                  setCart({
                    wedding,
                    graduation,
                    party: [...party, selectedBeer],
                  });
                }}
              >
                adicionar confraternização
              </ModalButton>
              <ModalButton
                onClick={() => {
                  const { wedding, graduation, party } = cart;
                  setCart({
                    wedding,
                    graduation: [...graduation, selectedBeer],
                    party,
                  });
                }}
              >
                adicionar graduação
              </ModalButton>
            </ContainerButton>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Home;
