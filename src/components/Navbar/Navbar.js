import React from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Navbar.module.scss';
import menu from '../../assets/img/menu.png';

const Navbar = () => {
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
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <img src={menu} alt="Menu" />
               </button>
               <div className="collapse navbar-collapse ms-5 w-auto">
                  <ul className="navbar-nav mb-2 mb-lg-0 w-100">
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-nowrap" href="#">
                           DevFest 1.0
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Devsoc
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Technologies
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Speakers
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Sponsors
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           FAQs
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                           Teams
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
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
                  style={{
                     boxShadow: 'none',
                  }}
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
