import React from 'react';
import Dish from './Dish';

class Menu extends React.Component {
  render() {
    return (
        <div className="store-division dishes">
          <h2 className="store-division__header">Меню</h2>
          <ul>
            {Object.keys(this.props.dishes).map(key => <Dish key={key} details={this.props.dishes[key]}/>)}
          </ul>
        </div>
    )
  }
}

export default Menu;