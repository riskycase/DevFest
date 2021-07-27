import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Navbar.module.scss';
import menu from '../../assets/img/Vector.png';
import Offcanvas from '../../../node_modules/bootstrap/js/src/offcanvas';

const Navbar = () => {
   useEffect(() => {
      let myOfcanvas = document.getElementById('offcanvasRight');
      let bsOffcanvas = new Offcanvas(myOfcanvas);
      document.getElementById('open').addEventListener('click', e => {
         e.preventDefault();
         e.stopPropagation();
         bsOffcanvas.toggle();
      });
   });

   return (
      <div className={Styles.fixed}>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <div className={Styles.logo}>
                  <div>Developer&apos;s Society BITS Goa</div>
                  <div>
                     <img src={logo} alt="Devsoc logo" />
                  </div>
               </div>
               <button
                  className="navbar-toggler"
                  style={{
                     boxShadow: 'none',
                  }}
                  type="button"
                  id="open"
               >
                  <img src={menu} style={{ height: '1rem' }} alt="Menu" />
               </button>
               <div
                  className="collapse navbar-collapse w-auto"
                  style={{ marginLeft: '10rem' }}
               >
                  <ul className="navbar-nav mb-2 mb-lg-0 w-100">
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           aria-current="page"
                           href="#about"
                        >
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           aria-current="page"
                           href="#technology"
                        >
                           Technologies
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           aria-current="page"
                           href="#sponsors"
                        >
                           Sponsors
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           aria-current="page"
                           href="#team"
                        >
                           Teams
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-nowrap" href="#devfest">
                           DevFest 1.0
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           aria-current="page"
                           href="#devsocbitsgoa"
                        >
                           Devsoc
                        </a>
                     </li>
                     {/* <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Speakers
                        </a>
                     </li> */}
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#FAQ">
                           FAQs
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRight"
            style={{
               backgroundColor: '#181818',
               color: 'white',
            }}
         >
            <div className="offcanvas-header">
               <h5 id="offcanvasRight" className={Styles.navLinks}>
                  DevFest 2.0
               </h5>
               <button
                  type="button"
                  className="btn-close bg-light text-reset"
                  style={{
                     boxShadow: 'none',
                  }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
               />
            </div>
            <div className="offcanvas-body">
               <nav className="navbar">
                  <ul className="navbar-nav">
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           className={Styles.mobileLinks}
                           aria-current="page"
                           href="#about"
                        >
                           About
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           className={Styles.mobileLinks}
                           aria-current="page"
                           href="#technology"
                        >
                           Technologies
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           href="#sponsors"
                           aria-current="page"
                           className={Styles.mobileLinks}
                        >
                           Sponsors
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           aria-current="page"
                           href="#team"
                           className={Styles.mobileLinks}
                        >
                           Team
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           aria-current="page"
                           href="#devfest"
                           className={Styles.mobileLinks}
                        >
                           DevFest 1.0
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           aria-current="page"
                           href="#boxs"
                           className={Styles.mobileLinks}
                        >
                           DevSoc
                        </a>
                     </li>
                     {/* <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           Speakers
                        </a>
                     </li> */}
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a
                           aria-current="page"
                           href="#FAQ"
                           className={Styles.mobileLinks}
                        >
                           FAQs
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
