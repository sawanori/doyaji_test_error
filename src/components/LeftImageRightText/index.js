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
          当店名物の自然薯鍋をご家庭で！！ <br/>
          古来より健康を助ける食材として日本人に愛されてきた山芋。<br/>
          当店では『自然薯』『大和芋』『長芋』の3種の山芋の美味しさ<br/>
          を味わっていただけるよう様々なお料理に仕立て、<br/>

        </p> 
      </RightText>    
   </LeftImageRightTextWrapper>
 )
}