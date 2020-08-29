import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Button } from 'antd'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  console.log(checkout)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      {lineItems}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
        }}
      >
        <h2>Subtotal</h2>
        <p>£ {checkout.subtotalPrice}</p>
        <br />
        <h2>Taxes</h2>
        <p>£ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>£ {checkout.totalPrice}</p>
        <br />
        <Button
          shape="round"
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </Button>
      </section>
    </div>
  )
}

export default Cart
