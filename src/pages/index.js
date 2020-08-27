import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import HeroImage from '~/components/heroimage'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{ textAlign: 'center' }}>Awesome Tank Tops Made For You</h1>

    <HeroImage />
    <ProductGrid />
  </>
)

export default IndexPage
