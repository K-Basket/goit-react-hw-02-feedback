import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    console.log(evt.target.dataset.action);

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

  countTotalFeedback = () => {};

  render() {
    console.log('Result: ', this.countTotalFeedback());

    return (
      <div>
        <h1>Please leave Feedback</h1>
        <button onClick={this.handleIncrement} type="button" data-action="good">
          Good
        </button>
        <button
          onClick={this.handleIncrement}
          type="button"
          data-action="neutral"
        >
          Neutral
        </button>
        <button onClick={this.handleIncrement} type="button" data-action="bad">
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: value</p>
        <p>Positive feedback: value %</p>
      </div>
    );
  }
}
