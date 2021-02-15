import React from 'react';
import {Header} from '../Header'
import {Footer} from '../Footer'
import {Container} from '../Container'
import {TopImage} from '../TopImage'
import {MainMessage} from '../MainMessage'
import {TitleBlock} from '../TitleBlock'
import {TitleBlock2} from '../TitleBlock2'
import {TitleBlock3} from '../TitleBlock3'
import {TileImage} from '../TileImage'
import {LeftImageRightText} from '../LeftImageRightText'
import {LeftImageRightText2} from '../LeftImageRightText2'
import {LeftImageRightText3} from '../LeftImageRightText3'
import {LeftCardRightImage} from '../LeftCardRightImage'


import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
      <Header/>
       <TopImage/>
       <TitleBlock/>
       <TileImage/>
       <MainMessage>
       <p>どやじは黒豚で有名な韓国の済州島方言で豚の意味。<br/>
   韓国では焼肉でいただく定番のサムギョプサルは淡白な味と<br/>
   コラゲン、ビタミン、ミネラルがたくさん含まれていて、豚の美味しさ、魅力を味わえます！<br/>
   本場同様の肉厚の豚をキムチや薬味をサンチュで包む口の中で広がる美味しさ！<br/>
　　そんな当店人気のサムギョプサルをもっと色々な人に広めたいとの想いで<br/>
　　この度、ECショップを開く決断をしました。<br/>
　　このコロナ禍において、なかなか外食をしづらい世の中ではございます<br/>
　　そんな中、より多くの”美味しい”をみなさまにお届けできればと思います。<br/>
    </p>
         </MainMessage>
       <TitleBlock2/>
       <LeftImageRightText/>
       <LeftImageRightText2/>
       <LeftImageRightText3/>     
       {/* <TitleBlock3/> */}
       {/* <LeftCardRightImage/> */}
        <Container>
        <main>{children}</main>
        </Container>
        <Footer/>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
