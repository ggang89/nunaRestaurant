import React from "react";
import { Restaurant } from "./model/restaurant";

interface OwnProps {
  info: Restaurant;
}
const Store: React.FC<OwnProps> = ({info}) => {
  return (<>
  {info.name}
  </>);
};
export default Store;


// props도 사용할 때 타입을 지정해줘야 한다
// info라는 props를 interface를 사용해서 
// 이름이 OwnProps라는 타입으로 만들어줌