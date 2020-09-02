import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Button } from 'antd'

const align = { padding: '5px 20px 0 0' }

const Cart = () => {
  const {
    store: { checkout },
    clearCheckOut,
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
    clearCheckOut()
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
          alignItems: 'baseline',
          flexWrap: 'wrap',
        }}
      >
        {/* <h2 style={align}>Subtotal</h2>
        <p style={align}>£ {checkout.subtotalPrice}</p> */}

        {/* <h2 style={align}>Taxes</h2>
        <p style={align}>£ {checkout.totalTax}</p> */}

        <h2 style={align}>Total</h2>
        <p style={align}>£ {checkout.totalPrice}</p>

        <Button
          type="primary"
          shape="round"
          style={{ marginBottom: '50px' }}
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
