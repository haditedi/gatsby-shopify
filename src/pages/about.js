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
      <h1>About</h1>
      <section>
        <Img fluid={data.file.child.fluid} alt="company" />
        <p style={{ padding: '20px' }}>
          We are energetic, stylish and passionate driven company. We start
          small but we will grow to meet the market demand.
        </p>
      </section>
    </div>
  )
}

export default About
