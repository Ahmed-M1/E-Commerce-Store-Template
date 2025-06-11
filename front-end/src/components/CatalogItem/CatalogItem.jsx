import "./CatalogItem.css";

export default function CatalogItem(props) {
  const style = {
    backgroundImage: `url(${props.product.image})`,
  };
  return (
    <a href={`/product/${props.product.id}`} className="catalog-item-link">
      <div className="catalog-item">
        <div className="catalog-item-image" style={style}></div>
        <div className="catalog-item-details">
          <h1>{props.product.title}</h1>
          <h2>Rs{props.product.price}</h2>
        </div>
      </div>
    </a>
  );
}
