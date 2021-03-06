import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "company.jpg" }) {
        child: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1 data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
        About
      </h1>
      <section>
        <Img fluid={data.file.child.fluid} alt="company" />
        <p
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          style={{ padding: '20px' }}
        >
          We are energetic, stylish and passionate driven company. We are
          growing to meet the market demand with high quality product and
          unrivalled customer service.
        </p>
      </section>
    </div>
  )
}

export default About
