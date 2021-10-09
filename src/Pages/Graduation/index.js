import "./index.css";
import { Paper } from "@material-ui/core";
import { useCart } from "../../Providers/cart";

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
    <div className="container-graduation">
      <div className="graduation">
        <h1>Graduação</h1>
      </div>
      <h2>Lista de bebidas</h2>
      <div className="container">
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

export default Graduation;
