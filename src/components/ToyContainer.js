import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({onToys, onHandleDonateClick}) {

const displayToy = onToys.map((toy)=>{
  return <ToyCard 
  key={toy.id} 
  toyObj={toy} 
  handleDonateClick={onHandleDonateClick}
  />
})

  return (
    <div id="toy-collection">{displayToy}</div>
  );
}

export default ToyContainer;
