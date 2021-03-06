import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  margin-top: 15px;
  min-height: 200px;
  max-height: 100%;
  flex-direction: column;
  border: 1px solid gray;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  display: block;
`

export const PriceTag = styled.span`
  display: block;
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  padding-bottom: 15px;
`
