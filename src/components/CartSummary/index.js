import {withRouter} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      for (let i = 0; i < cartList.length; i++) {
        totalPrice = totalPrice + cartList[i].price * cartList[i].quantity
      }
      const totalItem = cartList.length
      const onClickCheckout = () => {
        const {history} = props
        history.replace('/products')
      }

      return (
        <div className="order-total-container">
          <h1>
            Order Total:Rs <span>{totalPrice}/-</span>
          </h1>
          <p>{totalItem} items in cart</p>
          <button
            className="checkout-button"
            type="button"
            onClick={onClickCheckout}
          >
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default withRouter(CartSummary)
