import React from "react";
import { Languages } from "../../helpers/strings";

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: Languages.en, symbol: "English" },
    { code: Languages.es, symbol: "Spanish" },
  ];

  return (
    <div data-test="component-language-picker">
      {languages.map((lang) => (
        <span
          data-test="language-icon"
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.symbol}
        </span>
      ))}
    </div>
  );
};

export default LanguagePicker;
