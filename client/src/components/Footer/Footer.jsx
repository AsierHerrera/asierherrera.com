import React from 'react';
import QuickLinks from './QuickLinks/QuickLinks';
import Support from './Support/Support';
import GetInTouch from './GetInTouch/GetInTouch';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <QuickLinks />
        <Support />
        <GetInTouch />
      </div>
      <div className={styles.copyright}>
        Copyright © 2024 | All rights reserved. Made with ❤ by Asier Herrera
      </div>
    </footer>
  );
};

export default Footer;