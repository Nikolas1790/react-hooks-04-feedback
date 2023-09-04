import { NotificationTitle } from "components/App.styled"
import PropTypes from 'prop-types';

export const Notification =({message}) => {
    return (
        <div>            
            <NotificationTitle>{message}</NotificationTitle>
        </div>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired
}