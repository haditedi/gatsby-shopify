import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Button } from 'antd'
import { Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }}
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        <section>{variantImage}</section>
      </Link>
      <p>
        {item.title}
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
      </p>
      {selectedOptions}
      {item.quantity}
      <Button style={{ margin: '10px' }} shape="round" onClick={handleRemove}>
        Remove
      </Button>
    </Wrapper>
  )
}

export default LineItem
