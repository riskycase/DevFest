import React from 'react';
import Styles from './FAQ.module.scss';
import chevron from '../../assets/img/chevron.svg';

class FAQ extends React.Component {
   constructor(props) {
      super(props);
   }
   state = {
      visible: -1,
   };
   toggleFAQ = index => {
      this.setState({ visible: index === this.state.visible ? -1 : index });
   };
   render() {
      const questions = [
         {
            question: 'Who can Participate?',
            answer: (
               <p>
                  Everyone is welcome to apply, be it students, professionals or
                  turing-test certified androids. If you are under 18 years of
                  age, we&apos;ll need a parental consent form.
               </p>
            ),
         },
         {
            question: 'How does the application process work?',
            answer: (
               <p>
                  We&apos;re looking for people who &#34;do&#34;! Folks who are
                  passionate enough to work on crazy world-changing ideas. Tell
                  us what makes you apply to DevFest, what excites you,
                  accomplishments you are proud of and whatever else you think
                  can strengthen your chances of acceptance. We’ll get to know
                  more about your abilities from the past projects, GitHub
                  profile, participation/awards in other hackathons.
               </p>
            ),
         },
         {
            question: 'How much does it cost?',
            answer: (
               <p>
                  Zero. Zip. Zilch. Nada. Nothing. Admission to DevFest is
                  completely free, thanks to our sponsors!
               </p>
            ),
         },
         {
            question: 'Can we participate as a team?',
            answer: (
               <p>
                  Yes! We believe that you&apos;re stronger as a team. To apply
                  as a team, the team leader will have to submit the application
                  of the team.
               </p>
            ),
         },
         {
            question: 'How big can a team be?',
            answer: (
               <p>
                  You can form teams of up to 4 people. Most teams aim to have a
                  mix of people with both design and developer skills.
               </p>
            ),
         },
         {
            question: 'How does judging work?',
            answer: (
               <p>
                  A panel of some of the biggest names in tech will evaluate
                  hacks based on creativity, technical difficulty, design, and
                  usefulness. The top 5 overall projects will demo what they
                  have built in front of all of DevFest during our closing
                  ceremonies. New judges will be announced on a rolling basis on
                  Twitter and Facebook, so make sure to follow us!
               </p>
            ),
         },
         {
            question: 'What do I get by attending DevFest?',
            answer: (
               <p>
                  Pretty much everything, from socializing with fellow hacker
                  community to internship/job offers from the coolest tech
                  companies. And yeah we&apos;ll have prizes for finalist teams
                  and many other sponsored prizes.
                  <br />
                  The prizes include cash prizes upto ₹60000 and other credits
                  worth a total of ₹20 lacs
               </p>
            ),
         },
         {
            question:
               'I am just a begineer without experience, should I participate?',
            answer: (
               <p>
                  Definitely yes! This would be a great opportunity to explore
                  and learn something new!
               </p>
            ),
         },
         {
            question: 'Who do I contact for more details?',
            answer: (
               <p>
                  Mail us at{' '}
                  <a href="mailto:devsocbpgc@gmail.com">devsocbpgc@gmail.com</a>{' '}
                  for any doubts, queries or suggestions.
               </p>
            ),
         },
      ].map((question, index) => (
         <div className={Styles.questionAnswer} key={index}>
            <div
               className={Styles.questionWrapper}
               onClick={() => this.toggleFAQ(index)}
            >
               <span className={Styles.question}>{question.question}</span>
               <img
                  className={`${Styles.chevron} ${
                     this.state.visible === index ? Styles.chevronExpanded : ''
                  }`}
                  src={chevron}
               />
            </div>
            <div
               className={`${Styles.answerWrapper} ${
                  this.state.visible === index ? '' : Styles.hidden
               }`}
            >
               <div className={Styles.answer}>{question.answer}</div>
            </div>
         </div>
      ));
      return (
         <div className={`container ${Styles.faqContainer}`} id="FAQ">
            <h1>FAQs</h1>
            <div className={Styles.faq}>{questions}</div>
         </div>
      );
   }
}

export default FAQ;
