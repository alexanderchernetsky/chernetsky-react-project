import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {

  render() {
    return (
        <div className="store-division inventory">
          <h2 className="store-division__header">Инвентаризация</h2>
          <AddDishForm addDish={this.props.addDish}/>
        </div>
    )
  }
}

export default Inventory;