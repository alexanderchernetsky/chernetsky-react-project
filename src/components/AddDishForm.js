import React from 'react';
import PropTypes from 'prop-types';

class AddDishForm extends React.Component {
  static propTypes = {
    addDish: PropTypes.func,
  };

  state = {
    valid: true,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();

  createDish = (event) => {
    event.preventDefault();
    if (this.priceRef.current.value.search(/\D/) !== -1) {
      this.setState({valid: false});
      return
    }
    const dish = {
      name: this.nameRef.current.value,
      price: Number(this.priceRef.current.value),
      status: this.statusRef.current.value,
      description: this.descriptionRef.current.value,
      image: this.imageRef.current.value,
    };
    this.setState({valid: true});
    this.props.addDish(dish);
  };

  render() {
    return (
        <form className="addDishForm" onSubmit={this.createDish}>
          {!this.state.valid&&<div className="addDishForm__prompt">Поле цена должно содержать только цифры!</div>}
          <input className="addDishForm__input--small" type="text" placeholder="название" ref={this.nameRef}/>
          <input className="addDishForm__input--small" type="text" placeholder="цена" ref={this.priceRef}/>
          <select className="addDishForm__select" name="status" id="" ref={this.statusRef}>
            <option value="available">В наличии</option>
            <option value="unavailable">Нет в наличии</option>
          </select>
          <textarea className="addDishForm__textarea" name="description" id="" placeholder="описание" ref={this.descriptionRef}></textarea>
          <input className="addDishForm__input--big" type="text" placeholder="фото" ref={this.imageRef}/>
          <button className="addDishForm__button--big">+ добавить блюдо</button>
        </form>
    )

  }
}

export default AddDishForm;