import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showForm, showAddText }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname === '/' && (< Button color={showAddText ? 'green' : 'red'} text={showAddText ? 'Add' : 'Close'} showForm={showForm} /> )}
        </header>
    )
}

// Set default props like below
Header.defaultProps = {
    title: 'Default Title',
}

// Prop types are a good way to check if the data being set is of the correct type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header