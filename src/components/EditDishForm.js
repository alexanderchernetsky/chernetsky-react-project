import React from 'react';

class EditDishForm extends React.Component {
  deleteDish = (event) => {
        event.preventDefault();
        this.props.deleteDish(this.props.index);
  };

  handleChange = (event) => {
    const changedValue = event.currentTarget.value;
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