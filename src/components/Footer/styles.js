import styled from 'styled-components'

export const FooterWrapper = styled.footer`
 margin-top:auto;
 display:flex;
 justify-content:space-around;
 align-items:center;
 width:100%;
 height:50px;
 background-color:#000;
 color:#fff;
      
 .LinkStyles{
   color:"fff";
 }

  @media (min-width:384px) {
  ul{
   display:flex;
   flex-direction:row;
   text-decoration:none;
   width:100vw;
   justify-content:space-around;
   li{
     color:#fff;
     list-style:none;
     font-size:10px;
   }
  }

  @media (min-width:768px) {
    ul{
   display:flex;
   flex-direction:row;
   text-decoration:none;
   width:50vw;
   justify-content:space-around;
   li{
     color:#fff;
     list-style:none;
     font-size:15px;
   }
  }

  @media (min-width:1024px) {
    ul{
   display:flex;
   flex-direction:row;
   text-decoration:none;
   width:50vw;
   justify-content:space-around;
   li{
     color:#fff;
     list-style:none;
     font-size:20px;
   }
  }


 }
`