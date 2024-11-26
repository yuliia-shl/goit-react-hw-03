import s from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className="wrapper">
      <ul className={s.feedbackList}>
        <li className={s.feedbackItem}>Good: {good}</li>
        <li className={s.feedbackItem}>Neutral: {neutral}</li>
        <li>Bad: {bad} </li>
        <li>Total: {totalFeedback} </li>
        <li>Positive: {positiveFeedback}% </li>
      </ul>
    </div>
  );
};

export default Feedback;
