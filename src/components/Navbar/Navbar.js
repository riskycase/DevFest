import React from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Navbar.module.scss';
import menu from '../../assets/img/menu.png';

const Navbar = () => {
   return (
      <div className={Styles.fixed}>
         <nav className={Styles.desktop}>
            <ul className={Styles.Navbar}>
               <li className={Styles.navLinks}>
                  <div className={Styles.logo}>
                     <p>Developer&apos;s Society BITS Goa</p>
                     <img src={logo} alt="Devsoc logo" />
                  </div>
               </li>
               <li style={{ marginTop: '1%', marginLeft: '30px' }}>
                  <a href="#" className={Styles.navLinks}>
                     About
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     DevFest 1.0
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     DevSoc
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     Technologies
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     Speakers
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     Sponsors
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     FAQs
                  </a>
               </li>
               <li style={{ marginTop: '1%' }}>
                  <a href="#" className={Styles.navLinks}>
                     Team
                  </a>
               </li>
            </ul>
         </nav>
         <nav className={Styles.mobile}>
            <ul className={Styles.Navbar}>
               <li className={Styles.navLinks}>
                  <div className={Styles.logo}>
                     Developer&apos;s Society BITS Goa
                  </div>
                  <img src={logo} alt="Devsoc logo" />
               </li>
               <li style={{ marginTop: '1%' }}>
                  <button
                     className="btn"
                     type="button"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasRight"
                     aria-controls="offcanvasRight"
                     style={{ outline: 'none', boxShadow: 'none' }}
                  >
                     <img src={menu} alt="Menu" />
                  </button>
               </li>
            </ul>
         </nav>
         <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRight"
            style={{ backgroundColor: '#181818', color: 'white' }}
         >
            <div className="offcanvas-header">
               <h5 id="offcanvasRight" className={Styles.navLinks}>
                  <div
                     className={Styles.logo}
                     style={{ display: 'inline', marginRight: '4px' }}
                  >
                     Developer&apos;s Society BITS Goa
                  </div>
                  <img
                     src={logo}
                     alt="Devsoc logo"
                     style={{ marginTop: '1%', height: '40px' }}
                  />
               </h5>
               <button
                  type="button"
                  className="btn-close bg-light text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
               ></button>
            </div>
            <div className="offcanvas-body">
               <nav className="navbar">
                  <ul className="navbar-nav">
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           About
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           DevFest 1.0
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           DevSoc
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           Technologies
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           Speakers
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           Sponsors
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           FAQs
                        </a>
                     </li>
                     <li style={{ marginTop: '30%', marginLeft: '30px' }}>
                        <a href="#" className={Styles.mobileLinks}>
                           Team
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
