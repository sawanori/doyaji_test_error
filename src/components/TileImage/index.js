import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import TileImageWrapper from './styles'
export function  TileImage() {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "top_message.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  const image3 = data.placeholderImage.childImageSharp.fluid
  return(
    <div>
       <Img fluid={image3}/>
    </div>
  )
}