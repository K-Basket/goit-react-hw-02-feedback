import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';

export class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
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
    let sum = this.props.total;
    Object.values(this.state).map(el => (sum += el));
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const valueGood = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    let percentage = Math.round((valueGood / totalFeedback) * 100);

    if (!totalFeedback) {
      return this.props.positivePercentage;
    }

    return percentage;
  };

  render() {
    return (
      <div>
        <h1>Please leave Feedback</h1>

        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
