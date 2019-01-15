import React from 'react';

class Card extends React.Component {
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
