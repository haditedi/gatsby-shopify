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
  align-items: baseline;
  padding: 1.45rem 1.45rem 0.5rem;
  margin: 0 auto;

  max-width: 960px;
`

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  max-width: 700px;
  @media (max-width: ${breakpoints.s}px) {
    align-self: flex-start;
  }
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
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
