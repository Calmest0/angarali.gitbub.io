import React from 'react';
import { FaqContainer, FaqTitle, Faq } from './FaqElements';

function FAQ() {
  return (
    <div id="SSS">
      <FaqContainer>
        <FaqTitle>
          <h1>FAQ</h1>
          <p>Sorular Ve Cevaplar</p>
        </FaqTitle>
        <Faq>
          <h2>Sunucuda Yetki Nasıl Satın Alınır?</h2>
          <p>Bu adımları izleyiniz: </p>
          <h2>Nasıl Destek Veya Yardım Alabilirim_</h2>
          <p>Discord Sunucumuza Geliniz: </p>
        </Faq>
      </FaqContainer>
    </div>
  );
}

export default FAQ;
