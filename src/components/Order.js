import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const dish = this.props.dishes[key];
    const count = this.props.order[key];
    return (
        <li key={key} className="order__item">
          <span className="order__count">{count}</span>
          {dish.name}
          <span className="order__price">{formatPrice(dish.price)}</span>
          <button className="order__delete" onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
    )
  };

  render() {
    const orderKeys = Object.keys(this.props.order);
    const orderPrices = orderKeys.map((key) => this.props.dishes[key].price*this.props.order[key]);
    const total = orderPrices.reduce((sum, current) => sum + current , 0);
    return (
        <div className="store-division order">
          <h2 className="store-division__header">Заказ</h2>
          <ul>
            {orderKeys.map(this.renderOrder)}
          </ul>
          <strong className="order__total">Итого: {formatPrice(total)}</strong><br/>
          <button className="order__confirm" onClick={()=> alert('to be continued...')}>Оформить заказ</button>
        </div>
    )
  }
}

export default Order;