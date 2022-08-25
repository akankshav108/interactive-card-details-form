import React from "react";
import Styles from "./Card.module.scss";
import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import cardLogo from "../images/card-logo.svg";

const Card = (props) => {

  let cardNo = props.cardData.cardNo;
  let cardNumber;

  if(cardNo === undefined || cardNo === ""){
    cardNumber = '0000 0000 0000 0000'
  }
  else{
    cardNumber = cardNo.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  return (
    <div className={Styles.cardsWarapper}>
      <div>
        <div className={Styles.cardWrapper}>
          <img src={cardFront} alt="card front" />

          <div className={Styles.cardDetailsWrapper}>
            <div className={Styles.cardLogo}>
              <img src={cardLogo} alt="card logo" />
            </div>

            <div className={Styles.cardDetails}>
              <div className={Styles.cardNumber}>
                <h1>{cardNumber}</h1>
              </div>
              <div className={Styles.cardBottom}>
                <div className={Styles.cardHolderName} >
                  {props.cardData.name || 'Jane Appleseed'}
                </div>
                <div className={Styles.cardExDate}>
                  {props.cardData.month || '00'} / {props.cardData.year || '00'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={Styles.cardBackImg}>
          <img src={cardBack} alt="card Back" />
          <div className={Styles.cvc}>{props.cardData.cvc || '000'}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
