import React from 'react';
import {formatPrice} from '../helpers';

class Dish extends React.Component {
  render() {
    const isAvailable = this.props.details.status === 'available';
    return (
        <li className="dish">
          <img className="dish-image" src={this.props.details.image} alt={this.props.details.image}/>
          <h3 className="dish-header">
            {this.props.details.name}
            <span className="dish-price">{formatPrice(this.props.details.price)}</span>
          </h3>
          <p className="dish-description">{this.props.details.description}</p>
          <button disabled={!isAvailable} className="dish-addButton" onClick={() => this.props.addToOrder(this.props.index)}>
            {(isAvailable)?'Добавить в заказ':'Распродано'}
          </button>
        </li>
    )
  }
}

export default Dish;