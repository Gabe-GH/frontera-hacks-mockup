import { memo, Fragment, useState } from "react";
import Image from "next/image";

import { SelectInputType } from "@/app/types/FormTypes";

import styles from "@/app/views/FormField/FormField.module.css";

const SelectInputComponent = memo(function SelectDisplayName(
  props: SelectInputType
) {
  const [choice, setChoice] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [specifiedInput, setSpecifiedInput] = useState("");
  const [showAdditionalField, setShowAdditionalField] = useState(false);

  const handleSelect = (userChoice: string) => {
    setChoice(userChoice);
    setShowDropdown(false);
    // props.onChange({
    //   target: {
    //     value: userChoice, // Ensure value is a string
    //     name: props.name,
    //   } as HTMLInputElement, // Typecast target to match HTMLInputElement
    // } as unknown as React.ChangeEvent<HTMLInputElement>);

    userChoice.toLowerCase().includes("please specify")
      ? setShowAdditionalField(true)
      : setShowAdditionalField(false);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const additionalInput = event.target.value;
    setSpecifiedInput(additionalInput);
    // props.onChange({
    //   target: {
    //     value: `${props.value}: ${specifiedInput}`, // Ensure value is a string
    //     name: props.name,
    //   } as HTMLInputElement, // Typecast target to match HTMLInputElement
    // } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleBlur = () => {
    const value = specifiedInput ? `${choice} ${specifiedInput}` : `${choice}`;

    props.onChange({
      target: {
        value: value.trim(), // Ensure value is a string
        name: props.name,
      } as HTMLInputElement, // Typecast target to match HTMLInputElement
    } as unknown as React.ChangeEvent<HTMLInputElement>);
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const labelStyle = props.isQuestionLong
    ? "form-label"
    : "form-label capitalize";

  return (
    <div className="form-field relative">
      <label className={labelStyle} htmlFor={props.name}>
        {props.question}
      </label>

      <div
        className={`${styles.dropdownContainer} dropdown hover:cursor-pointer`}
      >
        <input
          type="text"
          className="input input-block hover:cursor-pointer text-ellipsis"
          id={props.name}
          value={choice}
          readOnly // Make input non-editable
          onFocus={() => setShowDropdown(true)} // Toggle dropdown visibility
          onBlur={handleBlur} // Delay to allow click event on dropdown items
          placeholder={props.placeholderText}
        />

        {!choice && (
          <div
            className={`${styles.dropdownArrowClickThrough} absolute inset-y-0 right-4 inline-flex items-center flex-col`}
          >
            <Image
              src={"angle-down-solid.svg"}
              width={5}
              height={5}
              alt=""
              className={`${styles.iconArrows} h-5 w-5 pb-1 mt-3`}
            />
          </div>
        )}

        {showDropdown && (
          <div
            className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-top-center gap-1 max-h-60 overflow-y-auto w-full`}
          >
            {props.inputList.map((answer: string, index: number) => (
              <Fragment key={index}>
                {index > 0 && (
                  <div className="dropdown-divider" role="separator"></div>
                )}
                <div
                  className="dropdown-item text-sm"
                  onMouseDown={() => handleSelect(answer)}
                >
                  {answer}
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Additional Field when other option is chosen */}
      {showAdditionalField && (
        // Other Field
        <input
          type="text"
          className="input max-w-full"
          placeholder="Specify here"
          value={specifiedInput}
          onChange={handleInput}
          onBlur={handleBlur}
        />
      )}

      <label className="form-label">
        <span className="form-label-alt first-letter:capitalize"></span>
      </label>
    </div>
  );
});

export default SelectInputComponent;
