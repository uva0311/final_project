import React from 'react'

export default class Car extends React.Component {

  render(){
    console.log(this.props)

    let newCar = []
    this.props.data.cars.forEach((car) => {
      this.props.match.params.id.forEach((i) => {
        if(car.id == i) {
          newCar.push(<h3>{car.year} {car.make} {car.model}</h3>)
        }
      })
    })

    let newPic = []
    this.props.data.newPictures.forEach((pic) => {
      this.props.match.params.id.forEach((i) => {
        if(pic.id == i) {
          newPic .push(<img className='image' style={{width:'100%', height: 'auto'}} src={pic.url} alt={pic.id}/>)
        }
      })
    })

    let newFuel = []
    this.props.data.newFuels.forEach((fuel) => {
      this.props.match.params.id.forEach((i) => {
        if(fuel.id == i) {
          newFuel.push(<form>
              <p>Fuel economy:</p>
              <p>auto(city): {fuel.auto_city}</p>
              <p>auto(highway): {fuel.auto_highway}</p>
              <p>manual(city): {fuel.manual_city}</p>
              <p>manual(highway): {fuel.manual_highway}</p>
          </form>
          )
        }
      })
    })

    let newWarranty = []
    this.props.data.newWarranties.forEach((warranty) => {
      this.props.match.params.id.forEach((i) => {
        if(warranty.id == i) {
          newWarranty.push(<form>
            <p>Warranties:</p>
            <p>Bumper: {warranty.bumper}</p>
            <p>Powertrain: {warranty.powertrain}</p>
            <p>Roadside: {warranty.roadside}</p>
            <p>Rust: {warranty.rust}</p>
          </form>
          )
        }
      })
    })

    let newPrice = []
    this.props.data.newPrices.forEach((price) => {
      this.props.match.params.id.forEach((i) => {
        if(price.id == i) {
          newPrice.push(<p>Price: {price.vehicle_price}</p>)
        }
      })
    })

    const containerStyle = {
      position: 'relative',
      'margin-top': '50%',
    }

    const imgSize = {
      'width': 320,
      'height': 240
    }

    const display = {
      display: 'inline-block',
      'line-height': 0.5
    }


    let displayCars = [];
    if(this.props.moreCars > 0){
      for(let i = 0; i < this.props.moreCars; i++)
        displayCars.push(
          <div style={containerStyle}>
            <form>
              <div>{newCar[i]}</div>
              <div>{newPrice[i]}</div>
              <div style={display}>{newFuel[i]}</div>
              <div style={display}>{newWarranty[i]}</div>
              <div className='imgContainer' style={imgSize}>
              <div style={display}>{newPic[i]}</div>
              </div>
            </form>
          </div>
        )
      }

    return (
      <div>
        {displayCars}
      </div>
    )
  }
}


