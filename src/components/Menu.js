import React from 'react';
import Dish from './Dish';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  static propTypes = {
    dishes: PropTypes.object,
    addToOrder: PropTypes.func,
  };

  render() {
    return (
        <div className="store-division dishes">
          <h2 className="store-division__header">Меню</h2>
          <ul>
            {Object.keys(this.props.dishes).map(key => <Dish key={key} index={key} details={this.props.dishes[key]} addToOrder={this.props.addToOrder}/>)}
          </ul>
        </div>
    )
  }
}

export default Menu;