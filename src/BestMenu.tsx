import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Omit<Menu,'price'> {
  showBestMenuName(name:string):string;
}

 const BestMenu:React.FC<OwnProps> = ({name, category,showBestMenuName}) => {
  return (
    <>
      <p>name:{name}</p>

      <p>category:{category}</p>
    </>
  );
}

export default BestMenu