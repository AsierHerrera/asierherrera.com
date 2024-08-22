import React from 'react';
import QuickLinks from './QuickLinks/QuickLinks';
import Support from './Support/Support';
import GetInTouch from './GetInTouch/GetInTouch';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <QuickLinks />
      <Support />
      <GetInTouch />
      <div className={styles.copyright}>
        Copyright © 2020-2024 | All rights reserved. Made with ❤ by Lakshan Rukantha
      </div>
    </footer>
  );
};

export default Footer;