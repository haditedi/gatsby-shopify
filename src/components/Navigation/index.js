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
        <Section>
          <MenuLink to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ width: '50px', margin: '5px 0px 15px 10px' }}
            />{' '}
            YouTanks
          </MenuLink>

          <Link
            to="/about"
            activeClassName="active"
            style={{ margin: '5px 15px 15px' }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{ margin: '5px 0px 15px' }}
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
