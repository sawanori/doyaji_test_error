import React from 'react'
import {Link} from 'gatsby'
import {FooterWrapper} from './styles'
export function Footer(){
  const LinkStyles = {
    color: 'white',
    fontWeight: "normal",
    textDecoration: "none"

}

// アクティブになった項目は色を反転させる
const ActiveStyles = {
    color: '#fff',
    fontWeight: "bold",
}
 return(
    <FooterWrapper>
      <ul className="page-link">
      <li>
        <Link to="/" style={LinkStyles} activeStyle={ActiveStyles}><a>Home</a></Link>
      </li>
      <li>
        <Link to="/about" style={LinkStyles} activeStyle={ActiveStyles}><a>どやじについて</a></Link>
      </li>
      <li>
        <Link to="/company" style={LinkStyles} activeStyle={ActiveStyles}><a>会社概要</a></Link>
      </li>
      <li>
        <Link to="/recruit" style={LinkStyles} activeStyle={ActiveStyles}><a>求人情報</a></Link>
      </li>
      </ul>
      ©️韓国料理・サムギョプサル　どやじ
    </FooterWrapper>
 )
}