import React from 'react';
import PropTypes from 'prop-types';

class EditDishForm extends React.Component {
  static propTypes = {
    deleteDish: PropTypes.func,
    index: PropTypes.string,
    updateDish: PropTypes.func,
    dishes: PropTypes.object,
  };

  deleteDish = (event) => {
    event.preventDefault();
    this.props.deleteDish(this.props.index);
  };

  handleChange = (event) => {
    let changedValue;
    if (event.currentTarget.name === 'price') {
      changedValue = Number(event.currentTarget.value);
      if (isNaN(changedValue)) {
        return
      }
    } else {
      changedValue = event.currentTarget.value
    }
    const dish = this.props.dishes[this.props.index];
    dish[event.currentTarget.name] = changedValue;
    this.props.updateDish(dish, this.props.index)
  };

  render() {
    const dish = this.props.dishes[this.props.index];
    return (
        <form className="addDishForm" onSubmit={this.deleteDish}>
          <input className="addDishForm__input--small" type="text" name="name" placeholder="название" value={dish.name} onChange={this.handleChange}/>
          <input className="addDishForm__input--small" type="text" name="price" placeholder="цена" value={dish.price} onChange={this.handleChange}/>
          <select className="addDishForm__select" name="status" id="" value={dish.status} onChange={this.handleChange}>
            <option value="available">В наличии</option>
            <option value="unavailable">Нет в наличии</option>
          </select>
          <textarea className="addDishForm__textarea" name="description" id="" placeholder="описание" value={dish.description} onChange={this.handleChange}></textarea>
          <input className="addDishForm__input--big" type="text" placeholder="фото" name="image" value={dish.image} onChange={this.handleChange}/>
          <button className="addDishForm__button--big">удалить блюдо</button>
        </form>
    )
  }
}

export default EditDishForm;