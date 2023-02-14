import React, { useState } from "react";
import Styles from "./App.module.scss";
import Card from "./Card/Card";
import Form from "./Form/Form";
import CardAddedConfirm from "./Form/CardAddedConfirm";

function App() {
  const [cardData, setCardData] = useState({});
  const [isValid, setIsValid] = useState(true)


  const onAddCardHandler = (cardValues, valid) => {
    setCardData(cardValues);
    setIsValid(valid);
  };

  const onContinueHandler = (valid) =>{
    setIsValid(valid);
  }

  return (
    <main className={Styles.main}>
      <Card cardData={cardData} />
      {isValid? <Form onAddCard={onAddCardHandler}/> :  <CardAddedConfirm onContinue ={onContinueHandler}/>}
    </main>
  );
}

export default App;
