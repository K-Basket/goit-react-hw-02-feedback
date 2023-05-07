// import css from './FeedbackOptions.module.css'
export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button onClick={onLeaveFeedback} type="button" data-action="good">
        Good
      </button>
      <button onClick={onLeaveFeedback} type="button" data-action="neutral">
        Neutral
      </button>
      <button onClick={onLeaveFeedback} type="button" data-action="bad">
        Bad
      </button>
    </div>
  );
}
