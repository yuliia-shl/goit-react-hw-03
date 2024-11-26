import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, reset }) => {
  return (
    <div className="wrapper">
      <div className={s.optionsList}>
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
        {totalFeedback > 0 && (
          <button type="button" onClick={reset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
