import React from 'react'
import {LeftImageRightTextAboutTopWrapper2,LeftImage,RightText} from './styles'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
export function LeftImageRightTextAboutTop2 (){
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "middle_6.jpg" }) {
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
      <h3>本場のメニュー<br/>韓国で食されるメニューを多数</h3>
     <p>
     あえて日本人の嗜好性に合わせず<br/>
     本当に韓国で食事をしているのかと錯覚するような<br/>
     メニューの数々<br/>
       </p> 
     </RightText>   
     <LeftImage>
      <Img fluid={image5}/>
    </LeftImage> 
  </LeftImageRightTextAboutTopWrapper2>
  )
}