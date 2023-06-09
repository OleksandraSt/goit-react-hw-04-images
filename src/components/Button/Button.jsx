import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return <LoadMore onClick={onClick}>Load More</LoadMore>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;