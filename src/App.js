import React from 'react';
import './App.css';
import Sponsors from './sections/Sponsors/Sponsors';
import Hackathon from './components/Hackathon/Hackathon';
import Homepage from './sections/Homepage/Homepage';
import Technology from './sections/technology/Technology';
import Footer from './sections/Footer/Footer';
import Team from './sections/Team/Team';
import Speakers from './sections/Speakers/Speakers';

function App() {
   return (
      <div>
         <Homepage />
         <Speakers
            people={[
               {
                  name: 'Tyler',
                  photo: '../../assets/img/logo.png',
                  designation: 'From Webd',
                  about: 'Minim velit pariatur exercitation voluptate. Ullamco incididunt ut irure enim minim incididunt nulla mollit cillum. Labore commodo tempor elit incididunt consequat sunt anim esse nostrud consequat aute. Anim et reprehenderit veniam non non commodo ea amet tempor amet reprehenderit. Enim quis non Lorem eiusmod do quis Lorem ut commodo reprehenderit anim eu amet. Amet ut magna cillum ullamco deserunt quis veniam enim pariatur ipsum ex irure. Aliquip veniam cupidatat id non sint.Labore nulla minim Lorem nulla veniam adipisicing do anim labore. Consectetur dolore irure veniam non laboris Lorem nisi aliqua. Dolore id eiusmod nisi ut eiusmod. Nisi culpa dolore enim mollit. Occaecat enim Lorem duis velit veniam anim amet minim ea Lorem.',
               },
               {
                  name: 'Tyler',
                  photo: '../../assets/img/logo.png',
                  designation: 'From Webd',
                  about: 'Magna velit ipsum eu ullamco. Non nostrud quis eiusmod exercitation amet labore sunt tempor sint adipisicing. Sunt nulla amet minim consectetur exercitation ullamco officia esse pariatur pariatur proident.Do ex exercitation in irure adipisicing fugiat occaecat. Consequat ad eiusmod consequat ipsum consectetur ad excepteur quis eu fugiat et commodo Lorem. Laboris in non fugiat do reprehenderit aute duis culpa aliquip mollit velit Lorem deserunt. Quis occaecat nulla minim sint cupidatat voluptate veniam.',
               },
               {
                  name: 'Tyler',
                  photo: '../../assets/img/logo.png',
                  designation: 'From Webd',
                  about: 'Exercitation id laborum magna consequat exercitation minim ut. Ea culpa adipisicing sint sunt cillum et mollit sint ex consequat duis eu. Reprehenderit do irure nulla non voluptate non est mollit. Commodo ipsum velit esse est officia ex ipsum adipisicing do aliquip ex. Esse in dolore sunt occaecat reprehenderit. Reprehenderit Lorem laboris pariatur dolor Lorem cillum nulla id cupidatat amet adipisicing consectetur. Sint pariatur enim magna amet et quis incididunt in aliquip.Pariatur veniam magna nulla proident eiusmod deserunt laboris ad cillum. Quis occaecat ullamco aliqua cupidatat anim dolore pariatur magna consequat. Enim elit et adipisicing do duis velit anim consequat veniam anim excepteur ex labore. Dolor esse ea ullamco sunt do qui pariatur nulla ullamco velit consectetur. In mollit aute in ut commodo ut dolore elit enim minim id.',
               },
            ]}
         />
         <Technology />
         <Sponsors />
         <Team />
         <Hackathon />
         <Footer
            linkColumns={[
               {
                  header: 'Fingertype',
                  link: [
                     {
                        text: 'Home',
                        url: '/home',
                     },
                     {
                        text: 'Examples',
                        url: '/example',
                     },
                     {
                        text: 'Pricing',
                        url: '/pricing',
                     },
                     {
                        text: 'Updates',
                        url: '/update',
                     },
                  ],
               },
               {
                  header: 'Resources',
                  link: [
                     {
                        text: 'Home',
                        url: '/home',
                     },
                     {
                        text: 'Examples',
                        url: '/example',
                     },
                     {
                        text: 'Pricing',
                        url: '/pricing',
                     },
                     {
                        text: 'Updates',
                        url: '/update',
                     },
                  ],
               },
               {
                  header: 'About',
                  link: [
                     {
                        text: 'Home',
                        url: '/home',
                     },
                     {
                        text: 'Examples',
                        url: '/example',
                     },
                     {
                        text: 'Pricing',
                        url: '/pricing',
                     },
                     {
                        text: 'Updates',
                        url: '/update',
                     },
                  ],
               },
            ]}
            textsWithIcon={[
               {
                  text: 'Adress',
                  icon: 'Adress',
               },
               {
                  text: 'Phone',
                  icon: 'Call',
               },
            ]}
            socialIcons={[
               {
                  link: 'https://www.instagram.com/devsocbitsgoa/',
                  icon: 'Instagram',
               },
               {
                  link: 'https://github.com/Devsoc-BPGC/',
                  icon: 'Github',
               },
            ]}
         />
      </div>
   );
}

export default App;
