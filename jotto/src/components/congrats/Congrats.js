import React from "react";
import { CONGRATULATIONS_MESSAGE } from "../../utils";
import { AppContext } from "../app/App.context";

const Congrats = () => {
  const { success } = React.useContext(AppContext);
  return (
    success && (
      <div data-test="congrats-component" className="alert alert-success">
        <span data-test="congrats-message">{CONGRATULATIONS_MESSAGE}</span>
      </div>
    )
  );
};

export default Congrats;
