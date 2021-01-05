import React from 'react'
import {TopImageWrapper} from './styles'
import {useStaticQuery,graphql} from 'gatsby'
import DogVideo from "../../images/doyaji_movie_mini.mp4"
export const TopImage = () => {
  const {allFile} = useStaticQuery(graphql`
    query {
      allFile{
      edges{
        node{
          relativePath
          name
          childImageSharp{
            fluid(maxWidth:800){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
return( 
  <TopImageWrapper>
      <video  width="100%" autoPlay muted　loop>
         <source src={DogVideo} type="video/mp4" />
       </video>
  </TopImageWrapper>
)
}