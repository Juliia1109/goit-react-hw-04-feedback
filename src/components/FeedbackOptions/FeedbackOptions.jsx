import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
    {options.map(option => (
      <li key={option}>
    <button 
    type="button" 
    name= {option}
    onClick={onLeaveFeedback}
    className={css.buttonList} >
        {option}
    </button> 
    </li>
    ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
}
