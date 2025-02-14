import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
      <button onClick={props.fetchApi}>Click to generate a joke</button>
    </>
  );
}

Button.propTypes = {
  fetchApi: PropTypes.func.isRequired,
};

export default Button;
