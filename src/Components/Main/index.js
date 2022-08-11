import React from 'react';

import {
  MainContainer,
  MainTitle,
  MainContent,
  Signal,
  Meter,
  Hat,
  Headset,
  Emoji,
} from './MainElements';

function Main() {
  return (
    <MainContainer>
      <MainTitle name="main">
        <h1>Sobre Nós</h1>
        <p>
          Angaralı Fun Sunucusu, Yaklaşık 3 yıldır oyunculara eğlenceli bir oyun deneyimi yaşatmaya çalışan bir oyuncu topluluğudur.
          Bu sunucudaki amacımız, sizlere sıcak bir oyuncu ortamı sunup, oyunu daha eğlenceli bir hale getirmektir.
        </p>
      </MainTitle>
      <MainContent>
        <div>
          <Signal />
          <h1>Düşük Ping</h1>
          <p>Sunucumuz İstanbul merkezli düşük gecikme oranlı bir sunucudur.</p>
        </div>

        <div>
          <Meter />
          <h1>64 Tickrate</h1>
          <p>Sunucumuz 64 Tickrate ile, gerçek rekabetçi maç deneyimi sunar.</p>
        </div>

        <div>
          <Hat />
          <h1>Bedava Skinler</h1>
          <p>
            !ws ve !kf komutlarıyla oyundaki bütün skinlere ücretsiz erişebilirsiniz.
          </p>
        </div>

        <div>
          <Emoji />
          <h1>Yetkili Olun!</h1>
          <p>Sunucumuzda düşük fiyatlarla yetki sahibi olabilirsiniz.</p>
        </div>

        <div>
          <Headset />
          <h1>Destek alın</h1>
          <p>
            Discord sunucumuza gelip yetkililerimizden her daim yardım ve destek alabilirsiniz.
          </p>
        </div>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
