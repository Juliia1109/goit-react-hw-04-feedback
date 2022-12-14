 import React, { Component } from 'react';
 import FeedbackOptions from './FeedbackOptions';
 import Notification from './Notification';
 import Section from './Section'
 import Statistics from './Statistics';



export class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
  const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
  return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =  Math.round((this.state.good * 100) / this.countTotalFeedback());
    return positiveFeedbackPercentage;
  };
   
  handleClick = e => {
    const variety = e.target.name;
    this.setState(prevState => ({[variety]: prevState[variety] + 1}));
  };

render() {
  const options= Object.keys(this.state);
  const onLeaveFeedback = this.handleClick;
  const { good, neutral, bad, }  = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage= this.countPositiveFeedbackPercentage();
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
  );}
};
