import React from 'react';
import './App.css';
import Store from './store';
import { Restaurant } from './model/resturant';

let data:Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: { city: "incheon", detail: "somewhere", zipCode: 2345 },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
  ],
};

const App:React.FC=()=> {
  return (
    <div >
      <Store info={data} />
    </div>
  );
}

export default App;
