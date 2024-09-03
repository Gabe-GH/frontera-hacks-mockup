import AgeInput from "./components/AgeInput";
import GeneralTextInput from "./components/GeneralTextInput";
import PhoneInput from "./components/PhoneInput";
import SelectInputComponent from "./components/SelectInput";
import SchoolInput from "./components/SchoolInput";
import ListInput from "./components/ListInput";

import { GeneralFormType, MlhCheckboxType } from "@/app/types/FormTypes";

import {
  countries,
  diets,
  genders,
  majors,
  orientations,
  pronouns,
  races,
  sizes,
  studyLevels,
  underrepresentedInTech,
} from "@/app/types/MlhDataTypes";

interface FormHeaderType {
  header_text: string;
}

export const FormHeader = (props: FormHeaderType) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center">
        {props.header_text}
      </h1>
    </div>
  );
};

export const FirstNameInput = (props: GeneralFormType) => {
  return (
    <GeneralTextInput
      labelText="First Name"
      inputType="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export const LastNameInput = (props: GeneralFormType) => {
  return (
    <GeneralTextInput
      labelText="Last Name"
      inputType="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export const EmailInput = (props: GeneralFormType) => {
  return (
    <GeneralTextInput
      labelText="Email"
      inputType="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export const StudyLevelInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={studyLevels}
      question="Level Of Study"
      placeholderText="Select your current level of study"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const DietaryRestrictionInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={diets}
      question="Dietary Restriction"
      placeholderText="Select your dietary restriction, if any"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const TeeSizeInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={sizes}
      question="T-Shirt Size"
      placeholderText="Select your t-shirt size"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const UnderrepresentedInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={underrepresentedInTech}
      question="Do you identify as part of an underrepresented group in the technology industry?"
      placeholderText="Select one"
      isQuestionLong={true}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const GenderInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={genders}
      question="Gender"
      placeholderText="Select your gender"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const MajorInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={majors}
      question="Major / Field of Study"
      placeholderText="Select your Major / Field of Study"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const OrientationInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={orientations}
      question="Do you consider yourself to be any of the following?"
      placeholderText="Select one"
      isQuestionLong={true}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const PronounsInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={pronouns}
      question="Pronouns"
      placeholderText="Select your Pronouns"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const RaceInput = (props: GeneralFormType) => {
  return (
    <SelectInputComponent
      inputList={races}
      question="Race / Ethnicity"
      placeholderText="Select your Race / Ethnicity"
      isQuestionLong={false}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export const MLHCheckboxes = (props: MlhCheckboxType) => {
  return (
    <>
      {/* MLH Disclaimer */}
      <div className="flex text-xs text-zinc-400 gap-2 mb-2 mt-4">
        {`*`}
        <em className="text-balance">
          We are currently in the process of partnering with MLH. The following
          3 checkboxes are for this partnership. If we do not end up partnering
          with MLH, your information will not be shared.
        </em>
      </div>

      {/* MLH Required Chceckboxes */}
      <div className="text-xs">
        <label className="flex cursor-pointer gap-3">
          <input
            type="checkbox"
            className="checkbox flex-shrink-0"
            name={props.name[0]}
            checked={props.value[0]}
            onChange={props.onChange}
          />
          <span className="text-pretty">
            I have read and agree to the{" "}
            <a
              className={`link link-underline hover:text-blue-300 text-xs`}
              href={`https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MLH Code of Conduct
            </a>
            .
          </span>
        </label>
      </div>
      <div className="text-xs">
        <label className="flex cursor-pointer gap-3">
          <input
            type="checkbox"
            className="checkbox flex-shrink-0"
            name={props.name[1]}
            checked={props.value[1]}
            onChange={props.onChange}
          />
          <span className="text-pretty">
            I authorize you to share my application/registration information
            with Major League Hacking for event administration, ranking, and MLH
            administration in-line with the{" "}
            <a
              className={`link link-underline hover:text-blue-300 text-xs`}
              href={`https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MLH Privacy Policy
            </a>
            . I further agree to the terms of both the{" "}
            <a
              className={`link link-underline hover:text-blue-300 text-xs`}
              href={`https://github.com/MLH/mlh-policies/blob/main/contest-terms.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MLH Contest Terms
            </a>{" "}
            and Conditions and the{" "}
            <a
              className={`link link-underline hover:text-blue-300 text-xs`}
              href={`https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MLH Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>
      <div className="text-xs">
        <label className="flex cursor-pointer gap-3">
          <input
            type="checkbox"
            className="checkbox flex-shrink-0"
            name={props.name[2]}
            checked={props.value[2]}
            onChange={props.onChange}
          />
          <span className="text-pretty">
            I authorize MLH to send me occasional emails about relevant events,
            career opportunities, and community announcements.
          </span>
        </label>
      </div>
    </>
  );
};

export { AgeInput, PhoneInput, SelectInputComponent, SchoolInput, ListInput };

// TODO: add componenet for countries list using countries.json
//       we could read in the raw json data and use the filtering method same as school for ease of input
//       or we could make a script where we turn the json into a json of only country names and make the componenet similar to level of study
