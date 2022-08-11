/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  ServerComponent,
  ServerHero,
  Servers,
  Server,
  Buttons,
  CopyTipContainer,
  CopyButton,
  SteamButton,
  IconLink,
} from './ServidoresElements';

// Components
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';
import Loading from '../../Components/Loading';

// Assets
import mirageImg from '../../Assets/images/mirage_02.jpg';

function Servidores() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const copyServerId = () => {
    navigator.clipboard.writeText('Servidor teste');
    const tooltip = document.getElementById('tip');
    tooltip.innerHTML = 'Kopyalandı!';
  };

  // setIsLoading(false);

  return (
    <div id="servidores">
      <Loading isLoading={isLoading} />
      <Navbar toggle={toggle} />;
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ServerComponent>
        <ServerHero>
          <h1>Sunucular</h1>
          <p>Hizmet Veren Sunucumuz</p>
        </ServerHero>
        <Servers>
          <Server>
            <h1>Angaralı Fun Sunucusu</h1>
            <img width="400px" src={mirageImg} alt="map_mirage" />
            <a href="https://www.gametracker.com/server_info/angarali.csgo.gen.tr:27015/" target="_blank"><img src="https://cache.gametracker.com/server_info/angarali.csgo.gen.tr:27015/b_560_95_1.png" border="0" width="560" height="95" alt=""/></a>
            <Buttons>
              <CopyTipContainer>
                <span id="tip">IP'yi Kopyala</span>
                <CopyButton type="button" onClick={copyServerId} />
              </CopyTipContainer>

              <IconLink to="steam://connect/185.193.165.90">
                <SteamButton />
              </IconLink>
            </Buttons>
          </Server>
        </Servers>
      </ServerComponent>
      <Footer />
    </div>
  );
}

export default Servidores;
