/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CarmraImg from "../images/camera.jpeg"
import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '42rem',
          padding: `2.625rem 1.3125rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
      <div
        style={{
          position: "fixed",
          right: "-5rem",
          bottom: "-16rem",
          zIndex: -1000,
        }}
      >
        <img src={CarmraImg} alt="camera" style={{ width: "40rem" }} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
