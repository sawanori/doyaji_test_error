import React from 'react'
import {LeftImageRightTextAboutTopWrapper3,LeftImage,RightText} from './styles'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
export function LeftImageRightTextAboutTop3 (){
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "middle_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const image5 = data.placeholderImage.childImageSharp.fluid
  return(
    <LeftImageRightTextAboutTopWrapper3>
    <LeftImage>
      <Img fluid={image5}/>
    </LeftImage>
    <RightText>
      <h3>ご自宅で楽しめる<br/>本場韓国サムギョプサル体験</h3>
     <p>
         みなさまの美味しいを聞きたくて、当店のサムギョプサルは<br/>
        　利益度返しのお値打ち価格で打ち出しています。<br/>
         またあのサムギョプサルが食べたいと思っていただけるよう<br/>
         日々、飲食店舗とECショプの運営を意識しております。
       </p> 
     </RightText>    
  </LeftImageRightTextAboutTopWrapper3>
  )
}