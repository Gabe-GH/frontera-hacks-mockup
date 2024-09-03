export interface GeneralFormType {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MlhCheckboxType {
  name: string[];
  value: boolean[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextFormType extends GeneralFormType {
  labelText: string;
  inputType: string;
  labelSubtext?: string;
}

export interface SelectInputType extends GeneralFormType {
  inputList: string[];
  question: string;
  placeholderText: string;
  isQuestionLong: boolean;
}
