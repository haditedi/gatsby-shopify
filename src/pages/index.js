import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import HeroImage from '~/components/heroimage'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
      style={{ textAlign: 'center' }}
    >
      Awesome Tank Tops Made For You
    </h1>

    <HeroImage />
    <ProductGrid />
  </>
)

export default IndexPage
