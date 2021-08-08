import React from 'react';
import './App.css';
import Sponsors from './sections/Sponsors/Sponsors';
import Hackathon from './components/Hackathon/Hackathon';
import Homepage from './sections/Homepage/Homepage';
import Devfest from './sections/devfest1/devfest1';
import Devsoc from './sections/devsoc/devsoc';
import Technology from './sections/Technology/Technology';
import Footer from './sections/Footer/Footer';
import Team from './sections/Team/Team';
import FAQ from './sections/FAQ/FAQ';
import { Bg } from './sections/Homepage/Bg';
import { Timeline } from './sections/Timeline/Timeline';
import Prizes from './sections/Prizes/Prizes';
// import Speakers from './sections/Speakers/Speakers';

function App() {
   return (
      <div>
         <style>
            @import url(`&apos;`, `&lsquo;`, `&#39;`,
            `&rsquo;`https://fonts.googleapis.com/css2?family=Roboto&apos;family=Roboto+Mono&apos;display=swap`&apos;`,
            `&lsquo;`, `&#39;`, `&rsquo;`);
         </style>
         <Homepage />
         <div style={{ position: 'sticky', top: 0 }}>
            <Bg />
         </div>
         <div
            style={{ position: 'relative', zIndex: 2, background: '#181818' }}
         >
            <Timeline />
            <Technology />
            <Prizes />
            <Sponsors />
            <Team />
            <Devfest />
            {/* <Speakers /> */}
            <Hackathon />
            <FAQ />
            <Devsoc />
            <Footer />
         </div>
      </div>
   );
}

export default App;
