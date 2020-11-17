import React, { Component } from "react";
import apiResponse from '../api';
import DogCard from '../Components/DogCard'

class DogsList extends Component {
  
  

  renderDogs = () => {
    apiResponse.map((dogObj) => {
      const dogName = dogObj.name
      const dogImg = dogObj.img
      const dogBreed = dogObj.breed
      const dogId = dogObj.id

    })
  }
  
  render() {
    return <div className="list">
      <DogCard name={this.renderDogs.dogName} img={this.renderDogs.dogImg} breed={this.renderDogs.dogBreed} key={this.renderDogs.dogId}/>
    </div>;
  }
}

export default DogsList;
