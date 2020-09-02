import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: #e15f41;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.45rem 1.45rem 0.5rem;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 960px;
  @media (max-width: ${breakpoints.s}px) {
    padding: 0.5rem;
  }
`

export const Section = styled.section`
  display: flex;

  order: 2;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
    display: block;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
