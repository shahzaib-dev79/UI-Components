function PriceCard({ img, name, desc, price, rating }) {
  return (
    <div className="card flex flex-col items-center jsutify-center w-90">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
}

export default PriceCard;
