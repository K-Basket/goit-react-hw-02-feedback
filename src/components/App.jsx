import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    if (evt.target.dataset.action === 'good') {
      return this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (evt.target.dataset.action === 'neutral') {
      return this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }

    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    // let sum = this.props.total;
    let sum = 0;
    Object.values(this.state).map(el => (sum += el));
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const valueGood = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    let percentage = Math.round((valueGood / totalFeedback) * 100);

    if (!totalFeedback) {
      return (percentage = 0);
    }

    return percentage;
  };

  render() {
    return (
      <>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
