import React, { useState } from 'react';
import { VipComponent, VipHero, Vip } from './VipElements';

// Components
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

function Servidores() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="vip">
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <VipComponent>
        <VipHero>
          <h1>Yetkili Olmak</h1>
          <p>Sunucumuzda Yetki Sahibi Olun</p>
        </VipHero>
        <Vip>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Vip>
      </VipComponent>
      <Footer />
    </div>
  );
}

export default Servidores;
