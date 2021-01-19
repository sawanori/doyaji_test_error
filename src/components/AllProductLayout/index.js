import React from 'react'
import {Header} from '../Header'
import {Footer} from '../Header'
import {AllProductLayoutWrapper} from './styles'
const AllProductLayout = ({children}) => {
 return(
 <AllProductLayoutWrapper>
 <Header/>
  <main>{children}</main>
  <Footer/>
 </AllProductLayoutWrapper>
 )
}

export {AllProductLayout}