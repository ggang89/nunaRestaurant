import React, { useState } from "react";
import "./App.css";
import Store from "./store";
import { Restaurant,Address } from "./model/restaurant";

let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: { city: "incheon", detail: "somewhere", zipCode: 2345 },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address)=>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  return (
    <div>
      <Store info={myRestaurant} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
