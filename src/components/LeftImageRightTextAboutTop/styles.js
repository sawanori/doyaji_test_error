import styled from 'styled-components'


export const LeftImageRightTextAboutTopWrapper = styled.div`
display:flex;
justify-content: center;
flex-direction:row-reverse;


background-color:#000;
font-family: 'Noto Serif JP', serif;
color:#fff;
font-weight:bold;

@media (min-width:384px) {
  flex-direction:column;
 
 }

 @media (min-width:768px) {
  flex-direction:row;
 }

 @media (min-width:1024px) {
  flex-direction:row;
 }


`

export const LeftImage = styled.div`
flex: 2;

max-height:700px;
@media (max-width:384px) {
  max-width:15px;
 }
`

export const RightText = styled.div`
flex: 2;
text-align:center;
line-height:2.1;
align-self:center;
h3{
    font-size:25px;
    line-height:1.5;
    margin:10px;
  }
  p{
    font-size:auto;
  }
@media (max-width:384px) {
  h3{
    font-size:25px;
    line-height:1.5;
    margin:0;
  }
  p{
    font-size:10px;
  }
 }
`

