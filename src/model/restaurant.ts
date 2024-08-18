// let data = {
//   name: "누나네 식당",
//   category: "western",
//   address: { city: "incheon", detail: "somewhere", zipcode: 2345 },
//   menu: [
//     { name: "rose pasta", price: 2000, category: "PASTA" },
//     { name: "garlic steak", price: 3000, category: "STEAK" },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[]
}
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type AddressWithoutZip = Omit<Address,'zipCode'>

export type Menu = {
  name: string;
  price: number;
  category: string;
};

//API호출할 때 제네릭 사용하는 법
export type ApiResponse<T>={
  data: T[],
  totalPage: number,
  page:number
}

export type RestaurantResponse = ApiResponse<Restaurant>;
//