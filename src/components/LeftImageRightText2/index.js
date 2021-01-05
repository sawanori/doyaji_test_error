import React from 'react'
import {LeftImageRightTextWrapper,LeftImage,RightText} from './styles'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
export function LeftImageRightText2(){
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "middle_2.jpg" }) {
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
       <h3>本場ならではの多彩な薬味を楽しむ</h3>
      <p>
      　長ネギやスライスされたにんにく、青唐辛子やキムチを<br/>
        乗せて、本場ならではのきな粉をふりかけて包んで<br/>
        ごま油とタレをつけてそのまま口に放り込んで下さい<br/>
        通常では味わえない多彩な薬味のハーモニーを楽しむ事ができます。
        </p> 
      </RightText>    
   </LeftImageRightTextWrapper>
 )
}