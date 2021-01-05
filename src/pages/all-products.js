import React,{useContext} from 'react'
import {AllProductLayout,Filters} from 'components'
import ProductContext from 'context/ProductContext'
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const {products,collections} = useContext(ProductContext)
  console.log(products)
  return(
    <AllProductLayout>
      <h4>{products.length}テーマ</h4>
      {/* <div>
        {collections.map(collection => <div key={collection.shopifyId}>{collection.title}</div>)}
      </div> */}
      <Content>
      <Filters/>
      <div>商品</div>
      </Content>
    </AllProductLayout>
  )
}