const RestaurantCards = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, image } = resData;

  return (
    <div className="res-cards">
      <img className="res-logo" src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} ⭐</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCards;
