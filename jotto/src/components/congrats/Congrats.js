import React from "react";
import { getStringByLanguage } from "../../helpers/strings";
import { AppContext } from "../app/App.context";
import { LanguageContext } from "../language-picker/languagePicker.context";

const Congrats = () => {
  const { success } = React.useContext(AppContext);
  const { language } = React.useContext(LanguageContext);
  return (
    success && (
      <div data-test="congrats-component" className="alert alert-success">
        <span data-test="congrats-message">
          {getStringByLanguage(language, "congrats")}
        </span>
      </div>
    )
  );
};

export default Congrats;
