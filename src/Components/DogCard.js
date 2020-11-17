import React from "react";

function DogCard({name, img, breed}) {

  return (
    <div className="card">
      <span className="content">
  <h2 >{name}</h2>
        <img alt={name} src={img} />
      </span>
      <span className="bark">
        <button>Bark</button>
      </span>
    </div>
  );
}

export default DogCard;
