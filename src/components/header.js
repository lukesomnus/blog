import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => (
  <header
    style={{
      // background:`url(${HeadImg}) no-repeat 100% 100%`,
      // backgroundSize:'100%',
      // height:'20rem',

      color: "#fff",
      marginBottom: `4rem`,
      marginTop:'4rem'
      // filter: `blur(5px)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: "flex",
        flexDirection: "row",
        height:'2.8rem'
      }}
    >
      <div
        style={{
          margin: 0,
          textAlign: "right",
          flex: 1,
          lineHeight:'2.8rem'
        }}
      >
        <span style={{ backgroundColor: "var(--themeColor)",display:'inline-block',height:'100%',padding:'0 1rem' }}>
          Luuuuke's Blog
        </span>
      </div>
      <div
        style={{
          fontSize: "1rem",
          color: "var(--themeColor)",
          flex: 1,
          marginLeft: ".4rem",
        }}
      >
        <div> 编程/滑雪/电影</div>
        <div> code more, feel more</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
