import React from "react";
import { Link } from "react-router-dom"; // hint, you may want to use this
import DisconnectedAllCats from "./AllCats";
// You have a bunch of freedom here to write this how you want
// This is not really tested, other than what props you use here
// Check AllCats specs for what is being checked

export const CatCard = ({ id, name }) => {
  console.log(
    "=============================================================",
    id,
    name
  );
  console.log("from space", this);

  return <div>{id}</div>;
};

export default CatCard;
