import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  handleClick = () => {
    this.props.history.push('/store');
  };

  render() {
    return (
        <div className="card" onClick={this.handleClick}>
          <div className="card__picture"></div>
          <span className="card__caption">Посмотреть меню</span>
          <p className="card__caption">Сделать заказ</p>
        </div>
    )
  }
}

export default Card;
