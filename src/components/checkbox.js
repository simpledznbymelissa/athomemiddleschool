import React from "react"
import "../styles/styles.css"

const ToggleSwitch = ({
                        checked,
                        label,
                        id,
                        disabled,
                        ariaInvalid,
                        ariaLabelledby,
                        onChange,
                      }) => {
  return (
    <>

      <label htmlFor={id} className="ToggleSwitch ToggleSwitch_label checkcontainer">
        {label}
        <span className="ToggleSwitch_switch checkmark">
          <input
            type="checkbox"
            checked={checked}
            id={id}
            className="ToggleSwitch_checkbox"
            disabled={disabled}
            onChange={onChange}
            aria-invalid={ariaInvalid}
            aria-labelledby={ariaLabelledby}
          />
          <span className="checkmark" />
        </span>
      </label>
    </>
  );
};


export default ToggleSwitch
