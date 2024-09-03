import { memo } from "react";

import { TextFormType } from "@/app/types/FormTypes";

const GeneralTextInput = memo(function FormFieldDisplayName(
  props: TextFormType
) {
  return (
    <div className="form-field">
      <label className="form-label capitalize">{props.labelText}</label>

      <input
        placeholder="Type here"
        className="input max-w-full"
        type={props.inputType}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />

      {props.labelSubtext && (
        <label className="form-label">
          <span className="form-label-alt first-letter:capitalize mb-1">
            {props.labelSubtext}
          </span>
        </label>
      )}
    </div>
  );
});

export default GeneralTextInput;
