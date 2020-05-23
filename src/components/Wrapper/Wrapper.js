import React from 'react';
import styles from './Wrapper.module.css';
import { CSSTransition } from 'react-transition-group';
import Transition from '../TransitionCss/TransitionLogo.module.css';

const Wrapper = ({ children, tittle }) => (
  <div className={styles.wrapper_block}>
    <CSSTransition in={true} timeout={500} classNames={Transition}>
      <h1 className={styles.tittle_PhBook}>{tittle}</h1>
    </CSSTransition>
    {children}
  </div>
);

export default Wrapper;
