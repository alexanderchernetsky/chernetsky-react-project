import React from 'react';
import AddDishForm from './AddDishForm';
import EditDishForm from './EditDishForm';

class Inventory extends React.Component {

  render() {
    return (
        <div className="store-division inventory">
          <h2 className="store-division__header">Инвентаризация</h2>
          {Object.keys(this.props.dishes).map(key =>
              <EditDishForm key={key} index={key} dishes={this.props.dishes} deleteDish={this.props.deleteDish} updateDish={this.props.updateDish}/>)}
          <AddDishForm addDish={this.props.addDish}/>
        </div>
    )
  }
}

export default Inventory;