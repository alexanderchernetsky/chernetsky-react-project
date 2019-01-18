import React from 'react';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component {
  renderOrder = key => {
    const dish = this.props.dishes[key];
    const count = this.props.order[key];
    if (!dish || this.props.dishes[key].status === 'unavailable') {
      return null;
    }
    return (
        <CSSTransition classNames="order__item" key={key} timeout={{enter:250, exit:250}}>
          <li key={key} className="order__item">
            <TransitionGroup component="span" className="order__count-wrapper">
              <CSSTransition classNames="order__count" key={count} timeout={{enter:300, exit:300}}>
                <span className="order__count">{count}</span>
              </CSSTransition>
            </TransitionGroup>
            {dish.name}
            <span className="order__price">{formatPrice(dish.price)}</span>
            <button className="order__delete" onClick={() => this.props.removeFromOrder(key)}>&times;</button>
          </li>
        </CSSTransition>
    )
  };

  render() {
    const orderKeys = Object.keys(this.props.order);
    const orderPrices = orderKeys.map((key) => {
      if (!this.props.dishes[key] || this.props.dishes[key].status === 'unavailable') {
        return 0;
      }
      return this.props.dishes[key].price*this.props.order[key];
    });
    const total = orderPrices.reduce((sum, current) => sum + current , 0);
    return (
        <div className="store-division order">
          <h2 className="store-division__header">Заказ</h2>
          <TransitionGroup component="ul">
            {orderKeys.map(this.renderOrder)}
          </TransitionGroup>
          <strong className="order__total">Итого: {formatPrice(total)}</strong><br/>
          <button className="order__confirm" onClick={()=> alert('to be continued...')}>Оформить заказ</button>
        </div>
    )
  }
}

export default Order;