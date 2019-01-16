import React from 'react';

class AddDishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  photoRef = React.createRef();

  createDish = (event) => {
    event.preventDefault();
    const dish = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      description: this.descriptionRef.current.value,
      photo: this.photoRef.current.value,
    };
    this.props.addDish(dish);
    alert('it works!');
  };

  render() {
    return (
        <form className="addDishForm" onSubmit={this.createDish}>
          <input className="addDishForm__input--small" type="text" placeholder="название" ref={this.nameRef}/>
          <input className="addDishForm__input--small" type="text" placeholder="цена" ref={this.priceRef}/>
          <select className="addDishForm__select" name="status" id="" ref={this.statusRef}>
            <option value="available">В наличии</option>
            <option value="unavailable">Нет в наличии</option>
          </select>
          <textarea className="addDishForm__textarea"name="description" id="" placeholder="описание" ref={this.descriptionRef}></textarea>
          <input className="addDishForm__input--big" type="text" placeholder="фото" ref={this.photoRef}/>
          <button className="addDishForm__button--big">+ добавить блюдо</button>
        </form>
    )

  }
}

export default AddDishForm;