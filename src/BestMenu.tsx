import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Menu {
  showBestMenuName(name:string):string;
}

 const BestMenu:React.FC<OwnProps> = ({name, price, category,showBestMenuName}) => {
  return (
    <>
      <p>name:{name}</p>
      <p>price:{price}</p>
      <p>category:{category}</p>
    </>
  );
}

export default BestMenu