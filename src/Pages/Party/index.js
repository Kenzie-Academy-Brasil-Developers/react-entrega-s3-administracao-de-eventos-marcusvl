import "./index.css";
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
    <div className="container-party">
      <div className="party">
        <h1>Confraternização</h1>
      </div>
      <h2>Lista de bebidas</h2>
      <div className="container">
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
            <div className="product-box">
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p className="beer-description">{beer.description}</p>
              <button
                className="remove-button"
                onClick={() => removeBeer(index)}
              >
                Remover produto
              </button>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Party;
