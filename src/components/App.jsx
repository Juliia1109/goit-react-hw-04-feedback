 import React from 'react';
 import FeedbackOptions from './FeedbackOptions';
 import Notification from './Notification';
 import Section from './Section'
 import Statistics from './Statistics';
 import { useState } from 'react';



 export function App () {

  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);


  const countTotalFeedback = () => {
    const totalFeedback = good + neutral +bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =  Math.round((good * 100) / countTotalFeedback());
    return positiveFeedbackPercentage;
  };
   
  const handleClick = e => {
    const variety = e.target.name;
    switch (variety) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };


  const options = ['good', 'neutral', 'bad'];
  const onLeaveFeedback = handleClick;
  const total = countTotalFeedback();
  const positivePercentage= countPositiveFeedbackPercentage();
  return (
    <>
     <Section 
   title="Please live feedback"
   >
    <FeedbackOptions 
    options= { options } 
    onLeaveFeedback={ onLeaveFeedback } 
    />
    </Section>
    <Section title="Statistics">
      {total === 0 ?(
    <Notification 
    message="There is no feedback" 
    />
      ) : (
    <Statistics 
    good={ good } 
    neutral={ neutral } 
    bad={ bad } 
    total={ total } 
    positivePercentage={ positivePercentage} 
    />
      )}
    </Section>
    </>
  );
}

