import React from 'react'
import {LeftImageRightTextAboutTopWrapper3,LeftImage,RightText} from './styles'
import {graphql,useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
export function LeftImageRightTextAboutTop3 (){
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "middle_7.jpg" }) {
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
      <h3>無添加にこだわる<br/>採算どがえしの逸品</h3>
     <p>
         できるだけ無添加にこだわり、自然の食材から<br/>
        　旨味をだす手間暇は惜しみません。<br/>
         正直、利益率は下がる一方ですが、<br/>
         皆様の美味しかったの一言を励みに日々営業しております。
       </p> 
     </RightText>    
  </LeftImageRightTextAboutTopWrapper3>
  )
}