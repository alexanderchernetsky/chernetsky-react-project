import React from 'react';
import Menu from './Menu';
import Order from './Order';
import Inventory from './Inventory';
import sampleDishes from '../sample-dishes';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  componentDidMount() {
    const dishes = sampleDishes;
    this.setState({dishes})
  }

  addDish = dish => {
    const dishes = { ...this.state.dishes };
    dishes[`dish${Date.now()}`] = dish;
    this.setState({dishes});
  };

  render() {
    return (
        <div className="page-wrapper">
          <div className="store-wrapper">
            <Menu dishes={this.state.dishes}/>
            <Order/>
            <Inventory addDish={this.addDish}/>
          </div>
        </div>
    )
  }
}

export default App;