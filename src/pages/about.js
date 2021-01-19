import React from 'react'
import {HeroHeaderImage,Header,Footer,LeftImageRightTextAboutTop,LeftImageRightTextAboutTop2,LeftImageRightTextAboutTop3,Map,MainMessage} from 'components';
const About = () => {
  return (
    <>
    <Header/>
      <HeroHeaderImage>
        韓国料理どやじについて
      </HeroHeaderImage>
       <MainMessage>
          <p>【関内】話題のチーズタッカルビも！肉厚な黒豚のサムギョプサルを味わえる本格韓国料理店『どやじ』<br/>
             関内駅から徒歩2分にある本場韓国の家庭料理や焼肉を提供しているお店『韓国焼肉どやじ』<br/>
             九州の高級豚である黒豚を使用した「サムギョプサル」や天然素材の「スンデュブチゲ」など気軽に楽しめます。<br/>
             韓国屋台を彷彿させる店内で本場韓国の雰囲気をお楽しみください。<br/>
        </p>
      </MainMessage>
      <LeftImageRightTextAboutTop/>
      <LeftImageRightTextAboutTop2/>
      <LeftImageRightTextAboutTop3/>
      <Map/>
    <Footer/>
    </>
  )
}

export default About
