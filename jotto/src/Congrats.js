import PropTypes from "prop-types";
import { CONGRATULATIONS_MESSAGE } from "./utils";

const Congrats = ({ success }) => {
  return (
    <div data-test="congrats-component" className="alert alert-success">
      {success && (
        <span data-test="congrats-message">{CONGRATULATIONS_MESSAGE}</span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
