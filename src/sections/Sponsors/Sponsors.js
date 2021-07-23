import React from 'react';
import Styles from './Sponsors.module.scss';
import Logos from '../../components/Logos/Logos';
import DevFolio from '../../assets/img/sponsors/Devfolio_Logo-White.svg';
import Celo from '../../assets/img/sponsors/Celo Logo Color Reverse.svg';
import Polygon from '../../assets/img/sponsors/Polygon_Logo-White.svg';
import Portis from '../../assets/img/sponsors/Portis_Logo-Colored_White.svg';
import Tezos from '../../assets/img/sponsors/Tezos_Logo-Colored.svg';
import DigitalOcean from '../../assets/img/sponsors/DO_Logo_horizontal_blue.svg';
import Replit from '../../assets/img/sponsors/Replit_dark-full.svg';

function Sponsors() {
   return (
      <div className={`${Styles.brands} container`}>
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
                     name: 'Portis',
                     image: Portis,
                     link: 'https://www.portis.io/',
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
               ]}
            />
         </div>
      </div>
   );
}

export default Sponsors;
