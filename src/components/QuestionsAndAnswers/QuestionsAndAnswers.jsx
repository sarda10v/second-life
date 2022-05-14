import React from "react";
import style from "../QuestionsAndAnswers/questionsAndAnswers.module.css";
import Accordion from "react-bootstrap/Accordion";

const QuestionsAndAnswers = () => {
  const questionsAndAnswers = [
    {
      questions: "Сколько лет должно быть, чтобы взять питомца из приюта?",
      answer:
        "Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним.",
    },
    {
      questions: "Сколько лет должно быть, чтобы взять питомца из приюта?",
      answer:
        "Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним.",
    },
    {
      questions: "Сколько лет должно быть, чтобы взять питомца из приюта?",
      answer:
        "Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним. Что бы стать потенциальных хозяином наших питомцев, вы должны быть совершеннолетним.",
    },
  ];
  return (
    <div className={style.questionsAndAnswersBackground}>
      <div className={style.questionsAndAnswersPosition}>
        <div className={style.questionsAndAnswersTitle}>Вопросы и ответы</div>
        <div className={style.questionsAndAnswersContainer}>
          {questionsAndAnswers.map((item, index) => {
            return (
              <Accordion defaultActiveKey="1" key={index}>
                <Accordion.Item
                  eventKey="0"
                  bsPrefix={style.questionsAndAnswersItem}
                >
                  <Accordion.Header>
                    <div className={style.questionText}> {item.questions}</div>
                  </Accordion.Header>
                  <Accordion.Body bsPrefix={style.questionsAndAnswersBody}>
                    <div className={style.answerText}> {item.answer}</div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
