import React from "react";

export const InputField = React.forwardRef(
  (
    {
      type,
      error,
      label,
      placeholder,
      prefix,
      prefixWidget,
      suffix,
      suffixWidget,
      setQuery,
      name: preName,
      capitalize = "off",
      autoComplete,
      value,
      theme,
    },
    ref
  ) => {
    const name =
      preName || (label ? label.toString().toLowerCase().replace(" ", "") : "");

    // console.log(error);

    return (
      <div className="inputField">
        <div className="inputField__container">
          <div className="inputField__container--leading">
            <div
              className={
                error && error[name]
                  ? "inputField--label error"
                  : "inputField--label"
              }
            >
              {label}
            </div>
          </div>
          <div className="inputField__container--main">
            <div
              className={
                error && error[name]
                  ? "inputField--input error"
                  : "inputField--input"
              }
            >
              {prefix && <div>Prefix</div>}
              {prefixWidget && <div>PrefixWidget</div>}
              <input
                className={theme == "light" ? theme : ""}
                {...ref}
                name={name}
                defaultValue={value && value}
                autoCapitalize={capitalize}
                placeholder={placeholder || ""}
                type={type || "text"}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    setQuery(e.target.value);
                  }
                }}
              />
              {suffix && (
                <div className="inputField--input--suffix">{suffix}</div>
              )}
              {suffixWidget && (
                <div className="inputField--input--suffixWidget">
                  {suffixWidget}
                </div>
              )}
            </div>
          </div>
          <div className="inputField__container--actions">
            {error && error[name] && (
              <div className="inputField--errorLabel">
                {error[name].message}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
