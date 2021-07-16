import React from 'react';
import Styles from './FAQs.module.scss';

const FAQs = () => {
   const Array = [
      {
         question:
            'Tempor ut enim adipisicing do exercitation. Laborum ad labore nulla elit ea adipisicing in sunt commodo consequat. Laboris id eiusmod reprehenderit dolor laborum consectetur sint mollit elit nisi dolor. Do amet proident laboris laboris voluptate ea minim elit nulla ut duis nulla dolor. Ut officia aliquip do esse ea cupidatat aliqua magna. Excepteur elit adipisicing ipsum amet ut. Esse nisi aliqua ullamco reprehenderit aliqua enim est. Mollit pariatur laborum est ad nulla ea anim ullamco non do cupidatat ut. Nisi adipisicing ea irure aliquip quis magna dolore reprehenderit et commodo id voluptate ea Lorem. Nostrud sint mollit incididunt ipsum elit sint eiusmod ullamco ut dolor. Excepteur amet ipsum eiusmod est do anim cupidatat. Reprehenderit ea esse ullamco tempor veniam ad tempor exercitation mollit culpa ut incididunt. Minim ut in exercitation officia labore sunt dolor adipisicing officia esse reprehenderit laboris.',
         answer: 'God knows',
      },
      {
         question: 'What is life',
         answer:
            'Do laboris reprehenderit velit ex laboris eu dolore ullamco laboris. Aliqua magna ea sint sunt consequat labore cupidatat fugiat cillum reprehenderit anim. Aliquip Lorem quis est incididunt voluptate tempor adipisicing commodo irure voluptate anim esse adipisicing consequat. Ex consequat cillum amet veniam et irure aliquip cillum aliquip commodo voluptate esse mollit. Occaecat do in ipsum quis amet consectetur ullamco consectetur quis exercitation mollit irure aute. Magna adipisicing aliquip sunt velit.Exercitation ex consectetur irure ut sunt est anim ullamco nisi consequat in non. Nulla laboris in ullamco non officia velit mollit Lorem anim incididunt sint. Lorem deserunt cillum magna aliqua ad labore ex. Aliqua ullamco minim elit proident consectetur ut nostrud veniam sint qui. Pariatur minim ad et velit proident amet incididunt et enim eu pariatur aliqua pariatur ex.Velit id veniam incididunt cillum ea eu aute. Amet voluptate quis labore laborum ullamco irure do officia proident quis adipisicing. Eiusmod ea exercitation eu labore cillum pariatur mollit ullamco ea adipisicing qui ex ipsum nostrud. Laborum veniam cupidatat Lorem eiusmod nostrud minim excepteur. Aute reprehenderit anim ut duis elit proident exercitation velit consequat. Esse consequat labore adipisicing cupidatat do ex magna tempor ullamco velit veniam. Commodo ex in tempor do eiusmod.Excepteur mollit cillum non ad proident proident irure ut sunt tempor velit excepteur sint fugiat. Velit et voluptate laboris incididunt elit qui consectetur incididunt mollit ut anim. Mollit minim tempor ut laboris aliquip irure dolore deserunt pariatur officia ad.Quis eu sunt laboris fugiat cupidatat magna aliqua in enim occaecat commodo incididunt. Est excepteur occaecat Lorem officia. Officia ut velit et exercitation est tempor incididunt dolor nulla incididunt velit mollit. Ipsum id velit aliquip mollit cupidatat enim sint veniam fugiat ipsum nostrud velit. Non veniam anim proident eiusmod dolor nostrud labore. Veniam quis proident aliquip Lorem. Occaecat deserunt reprehenderit id Lorem labore aliquip occaecat reprehenderit officia incididunt sunt sint.In dolore quis reprehenderit dolore et occaecat. Eu consectetur id veniam commodo. Ea magna tempor amet qui velit quis elit nostrud irure nulla minim ad.Lorem exercitation dolore fugiat commodo aute esse ipsum commodo magna eiusmod laborum irure. Do eiusmod enim sunt esse aliqua commodo nisi et Lorem. Aute ex excepteur cupidatat ut tempor duis consequat et elit ullamco laboris cillum. Duis mollit eiusmod duis sint.Magna in sit incididunt minim. Consequat id ea duis quis in est cillum consequat proident irure adipisicing. Amet culpa elit veniam ad magna in culpa exercitation reprehenderit. Nulla dolor Lorem consequat aliquip magna. Et enim in aute velit reprehenderit fugiat ullamco ipsum sint.Pariatur aute cupidatat laboris aute ut in consequat ad. Proident Lorem commodo deserunt laboris nulla aliquip sit aliquip enim quis. Lorem anim est esse in eu nisi. Elit cupidatat in adipisicing nulla ex culpa pariatur cupidatat culpa dolor. Est amet ipsum incididunt Lorem sint laborum elit pariatur sint in. Occaecat eiusmod veniam proident eu ex est officia aliquip deserunt et. Velit minim qui ut incididunt.Aliqua esse voluptate fugiat proident veniam sit ea. Cillum aliquip ullamco eu exercitation commodo esse pariatur elit et proident voluptate ea exercitation. Irure et ex amet sunt duis incididunt ipsum culpa non amet quis. In dolore laborum irure laborum anim proident dolore qui tempor. Nisi veniam cillum consectetur duis tempor incididunt. Do pariatur excepteur do commodo.',
      },
      { question: 'What is life', answer: 'God knows' },
      { question: 'What is life', answer: 'God knows' },
      { question: 'What is life', answer: 'God knows' },
      { question: 'What is life', answer: 'God knows' },
      { question: 'What is life', answer: 'God knows' },
      { question: 'What is life', answer: 'God knows' },
   ];

   function Accordion(e) {
      let content =
         e.target.parentElement.parentElement.parentElement.nextElementSibling;
      if (content.style.maxHeight) {
         e.target.parentElement.style.transform = 'rotate(0deg)';
         content.style.maxHeight = null;
      } else {
         e.target.parentElement.style.transform = 'rotate(-180deg)';
         content.style.maxHeight = content.scrollHeight + 'px';
      }
   }
   return (
      <div className={Styles.container}>
         <h1
            style={{
               height: '64px!important',
               fontFamily: 'Roboto, sans-serif',
               fontWeight: 'lighter',
            }}
         >
            FAQs
         </h1>
         {Array.map(value => (
            <>
               <div className={Styles.accordion} key={value}>
                  <h4 style={{ fontWeight: 'lighter' }}>
                     {value.question}
                     <svg
                        onClick={Accordion}
                        width="69"
                        height="47"
                        viewBox="0 0 69 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect
                           className={Styles.svg}
                           y="47"
                           width="47"
                           height="69"
                           rx="23.5"
                           transform="rotate(-90 0 47)"
                           fill="black"
                        />
                        <line
                           x1="22.433"
                           y1="12.75"
                           x2="35.2099"
                           y2="34.8803"
                           stroke="white"
                        />
                        <line
                           x1="34.4557"
                           y1="34.9453"
                           x2="47.2326"
                           y2="12.815"
                           stroke="white"
                        />
                     </svg>
                  </h4>
               </div>
               <div className={Styles.accordionContent}>
                  <p>{value.answer}</p>
               </div>
            </>
         ))}
      </div>
   );
};

export default FAQs;
