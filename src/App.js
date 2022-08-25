import React, { useState } from "react";
import Styles from "./App.module.scss";
import Card from "./Card/Card";
import Form from "./Form/Form";
import CardAddedConfirm from "./Form/CardAddedConfirm";

function App() {
  const [cardData, setCardData] = useState({});
  // const [warning, setWarning] = useState({});
  const onAddCardHandler = (cardValues) => {
    setCardData(cardValues);
    console.log(cardValues)
  };

  

  return (
    <main className={Styles.main}>
      <Card cardData={cardData} />
      <Form onAddCard={onAddCardHandler} /> 
      {/* <CardAddedConfirm />

      {/* {isValidDetail? <Form onAddCard={onAddCardHandler}/> :  <CardAddedConfirm />} */}
    </main>
  );
}

export default App;
