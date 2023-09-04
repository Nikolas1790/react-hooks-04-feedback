import { ButtonClick } from "components/App.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>            
            {options.map(option => 
                <ButtonClick key={option} name={option}  onClick={onLeaveFeedback}>{option}</ButtonClick>
            )}
            
        </div>

    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

