import React from 'react'
import axios from 'axios'

export default class CarList extends React.Component {
  state = {
    newCars: [],
    newPrices: [],
    newWarranties: [],
    newPictures: [],
    newFuels: [],
    newDepreciations: []
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/api/v1/cars/`)
      .then(res => {
        this.setState(
          {newCars: res.data.data}
        )
      });
    axios.get(`http://localhost:3001/api/v1/prices/`)
      .then(res => {
        console.log(res);
        this.setState(
          {newPrices: res.data.data}
        )
      });
    axios.get(`http://localhost:3001/api/v1/warranties/`)
      .then(res => {
        console.log(res);
        this.setState(
          {newPrices: res.data.data}
        )
      });
    axios.get(`http://localhost:3001/api/v1/pictures/`)
      .then(res => {
        console.log(res);
        this.setState(
          {newPrices: res.data.data}
        )
      });
    axios.get(`http://localhost:3001/api/v1/fuels/`)
      .then(res => {
        console.log(res);
        this.setState(
          {newPrices: res.data.data}
        )
      });
    axios.get(`http://localhost:3001/api/v1/depreciations/`)
      .then(res => {
        console.log(res);
        this.setState(
          {newPrices: res.data.data}
        )
      });
  }

  render(){

    const newCars = this.state.newCars.reverse().map(car => (
      <h2 key={car.id}>{car.year} {car.make} {car.model}</h2>
    ))

    return (
      <div>
        <ul>
          {newCars}
        </ul>
      </div>
    )
  }
}