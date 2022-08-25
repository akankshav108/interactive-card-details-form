import React from 'react'
import Styles from './CardAddedConfirm.module.scss';
import CompleteImg from '../images/icon-complete.svg';
const CardAddedConfirm = () => {
  return (
    <div className={Styles.cardAddedWrapper}>
        <div className={Styles.cardAddedBlock}><img src={CompleteImg} alt="Complete icon"/></div>
        <div className={Styles.cardAddedBlock}>
            <div className={Styles.cardAddedHead}>THANK YOU!</div>
            <div className={Styles.cardAddedText}>We've added your card details</div>
        </div>
        <div className={Styles.cardAddedBlock}><button>Continue</button></div>
    </div>
  )
}

export default CardAddedConfirm