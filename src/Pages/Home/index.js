import { Paper } from "@material-ui/core";
import { useState } from "react";
import { useList } from "../../Providers/list";
import "./index.css";
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
      <div className="container">
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
            <div className="product-box">
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p className="beer-description">{beer.description}</p>
              <button
                className="product-button"
                onClick={() => {
                  setIsModalVisible(true);
                  setSelectedBeer(beer);
                }}
              >
                Ver produto
              </button>
            </div>
          </Paper>
        ))}
        {isModalVisible && (
          <Modal onClose={() => setIsModalVisible(false)}>
            <div className="beer-title">
              <h2>{selectedBeer.name}</h2>
              <p className="beer-details">{selectedBeer.first_brewed}</p>
            </div>
            <p className="beer-details">{selectedBeer.description}</p>
            <p className="beer-details">
              <strong>Volume:</strong>
              {selectedBeer.volume.value} {selectedBeer.volume.unit}
            </p>
            <h3>Lista de eventos:</h3>
            <div className="container-button">
              <button
                className="modal-button"
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
              </button>
              <button
                className="modal-button"
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
              </button>
              <button
                className="modal-button"
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
              </button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Home;
