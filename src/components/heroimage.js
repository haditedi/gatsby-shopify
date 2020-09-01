import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Heroimage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 'true',
    arrows: false,
  }
  const data = useStaticQuery(graphql`
    query {
      positive: file(relativePath: { eq: "positivitytank.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      embroidery: file(relativePath: { eq: "embroiderytank.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      whitetank: file(relativePath: { eq: "whitetank3.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Slider {...settings}>
      <div style={{ marginBottom: '30px' }}>
        <Img fluid={data.positive.child.fluid} alt="positive tank top" />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <Img fluid={data.embroidery.child.fluid} alt="embroidery tank top" />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <Img
          style={{ maxHeight: '700px' }}
          fluid={data.whitetank.child.fluid}
          alt="white tank top"
        />
      </div>
    </Slider>
  )
}

export default Heroimage
