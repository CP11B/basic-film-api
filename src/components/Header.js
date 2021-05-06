import PropTypes from 'prop-types';

const Header = ({ text }) => <h1>{text}</h1>;

export default Header;

Header.propTypes = {
  text: PropTypes.string.isRequired,
};