import React from 'react'
import {LeftImageRightTextAboutTopWrapper2,LeftImage,RightText} from './styles'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
export function LeftImageRightTextAboutTop2 (){
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
    <LeftImageRightTextAboutTopWrapper2>

    <RightText>
      <h3>ご自宅で楽しめる<br/>本場韓国サムギョプサル体験</h3>
     <p>
     サムギョプサルの豚肉は、九州黒豚を使用。<br/>
     また、当店では、韓国伝統を踏襲し、鉄板釜の蓋で肉や野菜を焼くスタイル。<br/>
     野菜、キムチなどもおかわり自由！<br/>
       </p> 
     </RightText>   
     <LeftImage>
      <Img fluid={image5}/>
    </LeftImage> 
  </LeftImageRightTextAboutTopWrapper2>
  )
}