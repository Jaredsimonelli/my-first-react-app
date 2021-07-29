import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showForm }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' showForm={showForm} />
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