import React from 'react';

class CartItem extends React.Component {
  constructor(){ //Creating the constructor
    super();//calling the parent constructor which is Component
    this.state={
      price:1999,
      title:'Mobile Phone',
      qty:'1',
      img:''
    }
  }
  increaseQuantity = ()=>{
    console.log('this.state',this.state);
  }
  render () {
    const {price,title,qty} = this.state; //Accessing the constructor.
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price}</div>
        <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick = {this.increaseQuantity}
            />
            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828906.svg"/>
            <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>
          </div>
        </div>
      </div>
    );
  }
}
//Object to add styles
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;