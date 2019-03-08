import React from 'react';
import {Doughnut} from 'react-chartjs-2';

// Cost composition = Depreciation + Taxes & Fees + Financing + Fuel + (Insurance) + Maintenance + (Repairs)
// ****************************************************************
// Depreciation >> from database (newDepreciation on App.js)
// Taxes & Fees >> from calculator component (price * tax rate)
// Financing >> from calculator component ((price - down payment) * (1+interest rate)^period )
// Fuel >> build-in formula: (Fuel efficiency * mileage)
// Mainenance >> from database
// repairs >> from database


let getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getState = () => ({
  labels: [
    'Depreciation',
    'Maintenance',
    'Fuel'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});

export default class PieChart extends React.Component {

  componentWillMount() {
    this.setState(getState());
  }

  render() {

    let depiData = [];
    if(this.props.depi.length > 0) {
      depiData = this.props.depi.map((data) =>
        [data.first, data.second, data.third, data.fourth, data.fifth]
      );
    }

    let mainData = [];
    if(this.props.maintenances.length > 0) {
      mainData = this.props.maintenances.map((data) =>
        [data.first, data.second, data.third, data.fourth, data.fifth]
      );
    }

    let fuelData = [];
    if(this.props.fuels.length > 0) {
      fuelData = this.props.fuels.map((data) =>
        [data.auto_combined, data.manual_combined]
      );
    }


    return (
      <div style={{width: 768, height: 768}}>
        <h2>Cost Composition</h2>
        <Doughnut data={this.state} redraw/>
      </div>
    );
  }
}