import classes from "./Card.module.css";

function Card({ product }) {
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={product.images[1]}
        alt={`${product.title}`}
      />
      {/*<div className={classes.brand}>
      <div>{product.brand}</div>
  </div> */}
      <div className={classes.title}>{product.title}</div>
      <div>
        <div className={classes.price}>
          <div>{`$ ${product.price}`}</div>
        </div>
      </div>
      <div className={classes.description}>{product.description}</div>
    </div>
  );
}

export default Card;
