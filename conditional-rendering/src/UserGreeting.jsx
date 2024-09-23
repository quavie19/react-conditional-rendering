import PropTypes from 'prop-types';

function UserGreeting(props) {
    const greeting = <h2>Welcome {props.username}</h2>
    const logIN = <h2>Please Log in to continue</h2>

    return (props.isLoggedIn ? greeting : logIN);


}
UserGreeting.Proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting