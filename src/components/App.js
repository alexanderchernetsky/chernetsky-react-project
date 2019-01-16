import React from 'react';
import Dishes from './Dishes';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  addDish = dish => {
    const dishes = { ...this.state.dishes };
    dishes[`dish${Date.now()}`] = dish;
    this.setState({dishes});
  };

  render() {
    return (
        <div className="page-wrapper">
          <div className="store-wrapper">
            <Dishes/>
            <Order/>
            <Inventory addDish={this.addDish}/>
          </div>
        </div>
    )
  }
}

export default App;