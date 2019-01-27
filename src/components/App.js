import React from 'react';
import Menu from './Menu';
import Order from './Order';
import Inventory from './Inventory';
import sampleDishes from '../sample-dishes';
import base from '../base';

class App extends React.Component {
  state = {
    dishes: {},
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
    /*delete dishes[dish];*/
    dishes[dish] = null; // it is the feature of the firebase, simple delete dishes[dish] doesn't work with firebase!!!
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

  componentDidMount() {
    const localStorageRef = localStorage.getItem('pizza-store-order');
    if (localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }

    this.ref = base.syncState(`${this.props.match.params.store}/dishes`, {
      context: this,
      state: "dishes"
    });
  };

  loadSampleDishes = () => {
    this.setState({dishes: sampleDishes});
  };

  componentDidUpdate() {
    localStorage.setItem('pizza-store-order', JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  render() {
    return (
        <div className="page-wrapper">
          <div className="store-wrapper">
            <Menu dishes={this.state.dishes} addToOrder={this.addToOrder}/>
            <Order order={this.state.order} dishes={this.state.dishes} removeFromOrder={this.removeFromOrder}/>
            <Inventory addDish={this.addDish} dishes={this.state.dishes} deleteDish={this.deleteDish} updateDish={this.updateDish} loadSampleDishes={this.loadSampleDishes}/>
          </div>
        </div>
    )
  }
}

export default App;