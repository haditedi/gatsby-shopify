import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Heroimage = () => {
  const data = useStaticQuery(graphql`
    query {
      positive: file(relativePath: { eq: "positivitytank.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      embroidery: file(relativePath: { eq: "embroiderytank.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whitetank: file(relativePath: { eq: "whitetank2.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
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
    </>
  )
}

export default Heroimage
