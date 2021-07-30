import React from 'react';
import Styles from './Sponsors.module.scss';
import Logos from '../../components/Logos/Logos';
import DevFolio from '../../assets/img/sponsors/Devfolio_Logo-White.svg';
import Celo from '../../assets/img/sponsors/Celo Logo Color Reverse.svg';
import Polygon from '../../assets/img/sponsors/Polygon_Logo-White.svg';
import Tezos from '../../assets/img/sponsors/Tezos_Logo-Colored.svg';
import DigitalOcean from '../../assets/img/sponsors/DO_Logo_horizontal_blue.svg';
import Replit from '../../assets/img/sponsors/Replit_dark-full.svg';
import Autonise from '../../assets/img/sponsors/Autonise/autonise-removebg-preview.png';
import Balsamiq from '../../assets/img/sponsors/Balsamiq/balsamiq-logo-screen.png';
import EggHead from '../../assets/img/sponsors/EggHead/Egghead-Logo-White.png';
import Figma from '../../assets/img/sponsors/Figma/figma-1-logo-png-transparent.png';
import InterviewCake from '../../assets/img/sponsors/Interview Cake/cake_logo_white.png';
import Qoohoo from '../../assets/img/sponsors/Qoohoo/qoohoo-logo.png';
import StreamYard from '../../assets/img/sponsors/StreamYard/StreamYard_text+logo.png';
import Zeta from '../../assets/img/sponsors/Zeta/zeta_textlogo.png';

function Sponsors() {
   return (
      <div className={`${Styles.brands} container`} id="sponsors">
         <h2 className={Styles.sponsorheading}>Sponsors</h2>
         <h4 className={Styles.sponsorsubheading}>Meet our amazing Sponsors</h4>
         <div className={Styles.sponsors1}>
            <Logos
               array={[
                  {
                     name: 'DevFolio',
                     image: DevFolio,
                     link: 'https://devfolio.co/',
                  },
                  {
                     name: 'Celo',
                     image: Celo,
                     link: 'https://celo.org/',
                  },
                  {
                     name: 'Polygon',
                     image: Polygon,
                     link: 'https://polygon.technology/',
                  },
                  {
                     name: 'Tezos',
                     image: Tezos,
                     link: 'https://tezos.com/',
                  },
                  {
                     name: 'DigitalOcean',
                     image: DigitalOcean,
                     link: 'https://www.digitalocean.com/',
                  },
                  {
                     name: 'Replit',
                     image: Replit,
                     link: 'https://replit.com/',
                  },
                  {
                     name: 'Autonise',
                     image: Autonise,
                     link: 'https://www.autonise.com/',
                  },
                  {
                     name: 'Balsamiq',
                     image: Balsamiq,
                     link: 'https://balsamiq.com/',
                  },
                  {
                     name: 'EggHead',
                     image: EggHead,
                     link: 'https://egghead.io/',
                  },
                  {
                     name: 'Figma',
                     image: Figma,
                     link: 'https://www.figma.com/',
                  },
                  {
                     name: 'InterviewCake',
                     image: InterviewCake,
                     link: 'https://www.interviewcake.com/',
                  },
                  {
                     name: 'Qoohoo',
                     image: Qoohoo,
                     link: 'https://qoohoo.in/',
                  },
                  {
                     name: 'StreamYard',
                     image: StreamYard,
                     link: 'https://streamyard.com/',
                  },
                  {
                     name: 'Zeta',
                     image: Zeta,
                     link: 'https://www.zeta.tech/',
                  },
               ]}
            />
         </div>
      </div>
   );
}

export default Sponsors;
