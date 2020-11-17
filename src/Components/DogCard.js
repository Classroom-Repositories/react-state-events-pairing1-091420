import React from "react";
function handleButton(){
  return <h2>"Bark"</h2>
}
function DogCard({name, img, breed}) {
  
  return (
    <div className="card">
      <span className="content">
  <h2 >{name}</h2>
        <img alt={name} src={img} />
      </span>
      <span className="bark">
        <button onClick={handleButton}>Bark</button>
      </span>
    </div>
  );
}

export default DogCard;
