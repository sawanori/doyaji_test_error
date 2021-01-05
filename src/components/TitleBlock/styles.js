import styled from 'styled-components'
import "typeface-gfs-didot"
export const TitleBlockWrapper = styled.div`
height:90px;
display:flex;
align-items:center;
background-color:#fff;
font-family: 'Noto Serif JP', serif;
color:#000;
font-weight:bold;
 >span{
   flex-basis:10%;
   text-align:center;

 }
 >h1{
  flex-basis:100%;
  font-size:25px;

 }
 @media(min-width:651px) {
  height:230px;
  >h1{
  flex-basis:80%;
  font-size:40px;

 }
}
`