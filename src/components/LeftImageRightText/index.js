import React from 'react'
import {LeftImageRightTextWrapper,LeftImage,RightText} from './styles'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
export function LeftImageRightText(){
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
   <LeftImageRightTextWrapper>
     <LeftImage>

       <Img fluid={image5}/>
     </LeftImage>
     <RightText>
       <h3>最高級九州黒豚を味わう！<br/>絶品の食感＆肉汁</h3>
      <p>
          当店名物のサムギョプサルをご家庭で！！ <br/>
          厳選された九州黒豚を使用した絶品の味わい<br/>
          肉の中から滴る肉汁を余す事なく楽しんでいただければ幸いです。<br/>
          今までにないサムギョプサル体験をあなたにお届け！<br/>

        </p> 
      </RightText>    
   </LeftImageRightTextWrapper>
 )
}