import React, { Component } from "react";
import { apiResponse } from '../api';
import DogCard from '../Components/DogCard'

class DogsList extends Component {

  renderDogs = () => {
    return apiResponse.map(dogObj => <DogCard name={dogObj.name} img={dogObj.img} breed={dogObj.breed} key={dogObj.id}/>)
  }

  render() {
    return (
    <div className="list">
      {this.renderDogs()}
    </div>
    )
  }
}

export default DogsList;
