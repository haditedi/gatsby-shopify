import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import favicon from '~/images/logo.png'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  flex-grow: 1;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Helmet>
              <link rel="icon" href={favicon} />
            </Helmet>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <Wrapper>{children}</Wrapper>
            <footer
              style={{
                alignSelf: 'baseline',
                margin: '0 auto',
                padding: '15px 15px',
                textAlign: 'center',
                background: '#e15f41',
                width: '100%',
                color: 'white',
              }}
            >
              © {new Date().getFullYear()}, created by{' '}
              <a
                href="https://www.tedi.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tedi Web Development
              </a>
            </footer>
          </div>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
