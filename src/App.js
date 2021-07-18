import React from 'react';
import './App.css';
import Homepage from './sections/Homepage/Homepage';
import Footer from './sections/Footer/Footer';
import Team from './sections/Team/Team';
import Testimonial from './sections/Testimonials/Testimonials';

function App() {
   return (
      <div>
         <Homepage />
         <Testimonial
            people={[
               {
                  name: 'Mayank Mathur',
                  designation: 'Web dev',
                  photo: 'the url to the photo',
                  testimonial:
                     'Dolore ea ea adipisicing occaecat commodo ex aute consequat deserunt. Occaecat do eu mollit irure voluptate laboris. Dolore voluptate nulla dolor dolor magna reprehenderit mollit laboris culpa cillum ex tempor. Ad incididunt esse sit officia voluptate dolor sint laboris cillum aliquip aliquip duis. Exercitation ullamco qui quis nulla voluptate duis Lorem cupidatat tempor fugiat id deserunt. In tempor pariatur sint ex laboris dolor pariatur eiusmod. Pariatur officia veniam fugiat et amet. Magna aliqua aliqua aute Lorem duis id minim tempor. Esse duis ea aliqua minim minim occaecat reprehenderit enim consectetur ea Lorem occaecat voluptate. Consectetur nostrud qui reprehenderit incididunt dolore quis magna ut. Est id in Lorem nisi laboris magna irure nulla duis velit adipisicing esse consectetur. Amet reprehenderit officia adipisicing esse ad Lorem voluptate fugiat veniam commodo. Excepteur eu sunt Lorem aliquip duis. In consequat eiusmod esse consectetur dolor ea esse magna aliqua sit commodo velit. Ad consectetur commodo consequat incididunt laborum proident irure pariatur ex officia incididunt laborum ad aute. Labore culpa ad est mollit consectetur et est dolore sit elit dolor velit. Irure magna ea reprehenderit exercitation velit irure excepteur qui aliquip do nisi sunt. Consequat ea ipsum ad exercitation labore proident pariatur ut nostrud nulla dolore ut nisi labore. Aliquip consectetur voluptate adipisicing voluptate irure ut culpa ea pariatur mollit pariatur. Ex aliquip aliqua irure ut. Eu ipsum dolore Lorem laboris ut in culpa officia dolor. Reprehenderit excepteur ex qui nisi deserunt pariatur magna sit deserunt veniam ad nisi fugiat laborum. Elit laborum et do nulla aliqua nulla. Elit sunt ullamco id nostrud cillum id. Elit non deserunt est ad amet esse sunt enim commodo voluptate aute deserunt ullamco labore. Commodo consectetur duis nulla amet mollit amet aliquip excepteur adipisicing. Commodo irure id sunt esse dolor ipsum cillum ad esse incididunt irure velit nulla cillum.',
               },
               {
                  name: 'Mayank Mathur',
                  designation: 'Web dev',
                  photo: 'the url to the photo',
                  testimonial:
                     'Dolore ea ea adipisicing occaecat commodo ex aute consequat deserunt. Occaecat do eu mollit irure voluptate laboris. Dolore voluptate nulla dolor dolor magna reprehenderit mollit laboris culpa cillum ex tempor. Ad incididunt esse sit officia voluptate dolor sint laboris cillum aliquip aliquip duis. Exercitation ullamco qui quis nulla voluptate duis Lorem cupidatat tempor fugiat id deserunt. In tempor pariatur sint ex laboris dolor pariatur eiusmod. Pariatur officia veniam fugiat et amet. Magna aliqua aliqua aute Lorem duis id minim tempor. Esse duis ea aliqua minim minim occaecat reprehenderit enim consectetur ea Lorem occaecat voluptate. Consectetur nostrud qui reprehenderit incididunt dolore quis magna ut. Est id in Lorem nisi laboris magna irure nulla duis velit adipisicing esse consectetur. Amet reprehenderit officia adipisicing esse ad Lorem voluptate fugiat veniam commodo. Excepteur eu sunt Lorem aliquip duis. In consequat eiusmod esse consectetur dolor ea esse magna aliqua sit commodo velit. Ad consectetur commodo consequat incididunt laborum proident irure pariatur ex officia incididunt laborum ad aute. Labore culpa ad est mollit consectetur et est dolore sit elit dolor velit. Irure magna ea reprehenderit exercitation velit irure excepteur qui aliquip do nisi sunt. Consequat ea ipsum ad exercitation labore proident pariatur ut nostrud nulla dolore ut nisi labore. Aliquip consectetur voluptate adipisicing voluptate irure ut culpa ea pariatur mollit pariatur. Ex aliquip aliqua irure ut. Eu ipsum dolore Lorem laboris ut in culpa officia dolor. Reprehenderit excepteur ex qui nisi deserunt pariatur magna sit deserunt veniam ad nisi fugiat laborum. Elit laborum et do nulla aliqua nulla. Elit sunt ullamco id nostrud cillum id. Elit non deserunt est ad amet esse sunt enim commodo voluptate aute deserunt ullamco labore. Commodo consectetur duis nulla amet mollit amet aliquip excepteur adipisicing. Commodo irure id sunt esse dolor ipsum cillum ad esse incididunt irure velit nulla cillum.',
               },
               {
                  name: 'Mayank Mathur',
                  designation: 'Web dev',
                  photo: 'the url to the photo',
                  testimonial:
                     'Dolore ea ea adipisicing occaecat commodo ex aute consequat deserunt. Occaecat do eu mollit irure voluptate laboris. Dolore voluptate nulla dolor dolor magna reprehenderit mollit laboris culpa cillum ex tempor. Ad incididunt esse sit officia voluptate dolor sint laboris cillum aliquip aliquip duis. Exercitation ullamco qui quis nulla voluptate duis Lorem cupidatat tempor fugiat id deserunt. In tempor pariatur sint ex laboris dolor pariatur eiusmod. Pariatur officia veniam fugiat et amet. Magna aliqua aliqua aute Lorem duis id minim tempor. Esse duis ea aliqua minim minim occaecat reprehenderit enim consectetur ea Lorem occaecat voluptate. Consectetur nostrud qui reprehenderit incididunt dolore quis magna ut. Est id in Lorem nisi laboris magna irure nulla duis velit adipisicing esse consectetur. Amet reprehenderit officia adipisicing esse ad Lorem voluptate fugiat veniam commodo. Excepteur eu sunt Lorem aliquip duis. In consequat eiusmod esse consectetur dolor ea esse magna aliqua sit commodo velit. Ad consectetur commodo consequat incididunt laborum proident irure pariatur ex officia incididunt laborum ad aute. Labore culpa ad est mollit consectetur et est dolore sit elit dolor velit. Irure magna ea reprehenderit exercitation velit irure excepteur qui aliquip do nisi sunt. Consequat ea ipsum ad exercitation labore proident pariatur ut nostrud nulla dolore ut nisi labore. Aliquip consectetur voluptate adipisicing voluptate irure ut culpa ea pariatur mollit pariatur. Ex aliquip aliqua irure ut. Eu ipsum dolore Lorem laboris ut in culpa officia dolor. Reprehenderit excepteur ex qui nisi deserunt pariatur magna sit deserunt veniam ad nisi fugiat laborum. Elit laborum et do nulla aliqua nulla. Elit sunt ullamco id nostrud cillum id. Elit non deserunt est ad amet esse sunt enim commodo voluptate aute deserunt ullamco labore. Commodo consectetur duis nulla amet mollit amet aliquip excepteur adipisicing. Commodo irure id sunt esse dolor ipsum cillum ad esse incididunt irure velit nulla cillum.',
               },
               {
                  name: 'Mayank Mathur',
                  designation: 'Web dev',
                  photo: 'the url to the photo',
                  testimonial:
                     'Dolore ea ea adipisicing occaecat commodo ex aute consequat deserunt. Occaecat do eu mollit irure voluptate laboris. Dolore voluptate nulla dolor dolor magna reprehenderit mollit laboris culpa cillum ex tempor. Ad incididunt esse sit officia voluptate dolor sint laboris cillum aliquip aliquip duis. Exercitation ullamco qui quis nulla voluptate duis Lorem cupidatat tempor fugiat id deserunt. In tempor pariatur sint ex laboris dolor pariatur eiusmod. Pariatur officia veniam fugiat et amet. Magna aliqua aliqua aute Lorem duis id minim tempor. Esse duis ea aliqua minim minim occaecat reprehenderit enim consectetur ea Lorem occaecat voluptate. Consectetur nostrud qui reprehenderit incididunt dolore quis magna ut. Est id in Lorem nisi laboris magna irure nulla duis velit adipisicing esse consectetur. Amet reprehenderit officia adipisicing esse ad Lorem voluptate fugiat veniam commodo. Excepteur eu sunt Lorem aliquip duis. In consequat eiusmod esse consectetur dolor ea esse magna aliqua sit commodo velit. Ad consectetur commodo consequat incididunt laborum proident irure pariatur ex officia incididunt laborum ad aute. Labore culpa ad est mollit consectetur et est dolore sit elit dolor velit. Irure magna ea reprehenderit exercitation velit irure excepteur qui aliquip do nisi sunt. Consequat ea ipsum ad exercitation labore proident pariatur ut nostrud nulla dolore ut nisi labore. Aliquip consectetur voluptate adipisicing voluptate irure ut culpa ea pariatur mollit pariatur. Ex aliquip aliqua irure ut. Eu ipsum dolore Lorem laboris ut in culpa officia dolor. Reprehenderit excepteur ex qui nisi deserunt pariatur magna sit deserunt veniam ad nisi fugiat laborum. Elit laborum et do nulla aliqua nulla. Elit sunt ullamco id nostrud cillum id. Elit non deserunt est ad amet esse sunt enim commodo voluptate aute deserunt ullamco labore. Commodo consectetur duis nulla amet mollit amet aliquip excepteur adipisicing. Commodo irure id sunt esse dolor ipsum cillum ad esse incididunt irure velit nulla cillum.',
               },
            ]}
         />
         <Team />
         <Footer
            linkColumns={[
               {
                  header: 'Fingertips',
                  link: [
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                  ],
               },
               {
                  header: 'Fingertips',
                  link: [
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                  ],
               },
               {
                  header: 'Fingertips',
                  link: [
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                     {
                        text: 'Home',
                        url: 'wassup',
                     },
                  ],
               },
            ]}
            textsWithIcon={[
               {
                  text: 'Some fancy text',
                  icon: ['fab', 'github'],
               },
               {
                  text: 'Some fancy text',
                  icon: 'some fontawesome icon',
               },
            ]}
            socialIcons={[
               {
                  link: 'Github',
                  icon: ['fab', 'github'],
               },
               {
                  link: '  Instagram',
                  icon: 'Insta',
               },
               {
                  link: 'Facebook',
                  icon: 'facebook',
               },
            ]}
         />
      </div>
   );
}

export default App;
