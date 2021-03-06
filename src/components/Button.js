import PropTypes from 'prop-types'

const Button = ({ color, text, showForm }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' onClick={showForm}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button