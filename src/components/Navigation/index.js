import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import Logo from '~/images/logo.png'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Section } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = () => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <Container>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: '70px', margin: '5px ' }}
          />{' '}
          <h1 style={{ color: 'white', margin: '0', paddingRight: '20px' }}>
            YouTanks
          </h1>
        </Link>

        <Section>
          <Link
            to="/about"
            activeClassName="active"
            style={{ margin: '5px 15px', fontWeight: 'bold' }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{
              margin: '5px 0px',
              fontWeight: 'bold',
              paddingRight: '20px',
            }}
            activeClassName="active"
          >
            Contact Us
          </Link>
        </Section>

        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          <ShoppingCartOutlined
            style={{ fontSize: '40px', paddingRight: '10px' }}
          />
        </MenuLink>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: `YouTanks`,
}

export default Navigation
