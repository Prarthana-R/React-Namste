import React from "react";
import ReactDOM from "react-dom/client";

/*****
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *      - RestaurantCards
 * Footer
 *   - Copyright
 *   - Links
 *   - Adress
 *   - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-conatainer">
        <img
          className="logo-img"
          alt="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const resObj = [
  {
    id: "1",
    name: "KFC",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: "4.2",
    deliveryTime: 30,
    image: "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg",
  },
  {
    id: "2",
    name: "McDonald's",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: "4.0",
    deliveryTime: 28,
    image: "https://images.pexels.com/photos/1615193/pexels-photo-1615193.jpeg",
  },
  {
    id: "3",
    name: "Pizza Hut",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.1",
    deliveryTime: 35,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    id: "4",
    name: "Burger King",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: "3.9",
    deliveryTime: 27,
    image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
  },
  {
    id: "5",
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Fast Food"],
    avgRating: "4.3",
    deliveryTime: 33,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    id: "6",
    name: "Subway",
    cuisines: ["Healthy", "Sandwiches"],
    avgRating: "4.0",
    deliveryTime: 25,
    image: "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg",
  },
  {
    id: "7",
    name: "Punjabi Dhaba",
    cuisines: ["North Indian"],
    avgRating: "4.5",
    deliveryTime: 22,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    id: "8",
    name: "Biryani House",
    cuisines: ["Biryani", "Indian"],
    avgRating: "4.6",
    deliveryTime: 40,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    id: "9",
    name: "Sushi Palace",
    cuisines: ["Japanese", "Sushi"],
    avgRating: "4.8",
    deliveryTime: 45,
    image: "https://images.pexels.com/photos/3577565/pexels-photo-3577565.jpeg",
  },
  {
    id: "10",
    name: "Taco Bell",
    cuisines: ["Mexican", "Tacos"],
    avgRating: "4.1",
    deliveryTime: 30,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    id: "11",
    name: "Cafe Coffee Day",
    cuisines: ["Cafe", "Beverages"],
    avgRating: "4.3",
    deliveryTime: 20,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  },
  {
    id: "12",
    name: "Starbucks",
    cuisines: ["Cafe", "Coffee"],
    avgRating: "4.5",
    deliveryTime: 22,
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  },
  {
    id: "13",
    name: "Chai Sutta Bar",
    cuisines: ["Tea", "Snacks"],
    avgRating: "4.2",
    deliveryTime: 15,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
  },
  {
    id: "14",
    name: "The Chinese Wok",
    cuisines: ["Chinese"],
    avgRating: "4.4",
    deliveryTime: 36,
    image: "https://images.pexels.com/photos/3577567/pexels-photo-3577567.jpeg",
  },
  {
    id: "15",
    name: "Italiano Pizza",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.2",
    deliveryTime: 32,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    id: "16",
    name: "Green Salad Bar",
    cuisines: ["Healthy", "Salads"],
    avgRating: "4.6",
    deliveryTime: 18,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: "17",
    name: "Gelato Ice Cream",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: "4.7",
    deliveryTime: 28,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
