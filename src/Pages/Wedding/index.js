import { useCart } from "../../Providers/cart";
import { Paper } from "@material-ui/core";
import "./index.css";

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
    <div className="container-wedding">
      <div className="wedding">
        <h1>Casamento</h1>
      </div>
      <h2>Lista de bebidas</h2>
      <div className="container">
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
            <div className="product-box">
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p className="beer-description">{beer.description}</p>
              <button
                className="remove-button"
                onClick={() => removeBeer(index)}
              >
                Ver produto
              </button>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Wedding;
