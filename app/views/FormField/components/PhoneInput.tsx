import { memo, useState } from "react";

import { GeneralFormType } from "@/app/types/FormTypes";

const PhoneInput = memo(function PhoneInputDisplayName(props: GeneralFormType) {
  const [inputValue, setInputValue] = useState("");

  /*
  // this function is how the input gets auto formatted
  // high overview, the input gets added to the string of input
  // and gets sliced and formatted depending on how many numbers have been entered
  */
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber: string = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} - ${phoneNumber.slice(6, 10)}`;
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setInputValue(formattedPhoneNumber);
    props.onChange({
      ...event,
      target: {
        ...event.target,
        name: props.name,
        value: formattedPhoneNumber,
      },
    });
  };

  return (
    <div className="form-field">
      <label className="form-label capitalize">phone number</label>
      <input
        placeholder="(555) 555 - 5555"
        type="tel"
        className="input max-w-full"
        name="phone"
        onChange={(event) => handleInput(event)}
        value={inputValue}
      />
    </div>
  );
});

export default PhoneInput;
