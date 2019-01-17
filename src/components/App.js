import React from 'react';
import Menu from './Menu';
import Order from './Order';
import Inventory from './Inventory';
import sampleDishes from '../sample-dishes';

class App extends React.Component {
  state = {
    dishes: sampleDishes,
    order: {}
  };

  updateDish = (newDish, index) => {
    const dishes = {...this.state.dishes};
    dishes[index] = newDish;
    this.setState({dishes})
  };

  addDish = dish => {
    const dishes = { ...this.state.dishes };
    dishes[`dish${Date.now()}`] = dish;
    this.setState({dishes});
  };

  deleteDish = dish => {
    const dishes = {...this.state.dishes};
    delete dishes[dish];
    this.setState({dishes});
  };

  addToOrder = key => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1 ;
    this.setState({order});
  };

  removeFromOrder = key => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order});
  };

  render() {
    return (
        <div className="page-wrapper">
          <div className="store-wrapper">
            <Menu dishes={this.state.dishes} addToOrder={this.addToOrder}/>
            <Order order={this.state.order} dishes={this.state.dishes} removeFromOrder={this.removeFromOrder}/>
            <Inventory addDish={this.addDish} dishes={this.state.dishes} deleteDish={this.deleteDish} updateDish={this.updateDish}/>
          </div>
        </div>
    )
  }
}

export default App;