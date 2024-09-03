import { memo, Fragment, useState, useEffect } from "react";

import { GeneralFormType } from "@/app/types/FormTypes";
import { getListFromJsonFile } from "@/app/util/getListData";

import styles from "@/app/views/FormField/FormField.module.css";

const ListInput = memo(function ListInputDisplayName(props: GeneralFormType) {
  const [userChoice, setUserChoice] = useState("");
  const [listData, setListData] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");

  const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserChoice(value);
    setError("");
    if (value === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter((listName) =>
        listName.toLowerCase().includes(value.toLowerCase().trim())
      );
      setFilteredData(filtered);
    }
  };

  const handleSelect = (item: string) => {
    setUserChoice(item);
    setShowDropdown(false);
    setError("");

    props.onChange({
      target: {
        value: item, // Ensure value is a string
        name: props.name,
      } as HTMLInputElement, // Typecast target to match HTMLInputElement
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleBlur = () => {
    setShowDropdown(false);
    if (userChoice && !listData.includes(userChoice)) {
      setError("Please select a valid school from the list.");
    } else {
      setError(""); // Clear error if input matches a valid school
    }

    if (props.name === "school") {
      props.onChange({
        target: {
          value: userChoice === "" ? "n/a" : userChoice, // Ensure value is a string
          name: props.name,
        } as HTMLInputElement, // Typecast target to match HTMLInputElement
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    } else {
      props.onChange({
        target: {
          value: userChoice === "" ? "" : userChoice, // Ensure value is a string
          name: props.name,
        } as HTMLInputElement, // Typecast target to match HTMLInputElement
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  useEffect(() => {
    const fetchListData = async () => {
      const { data, msgErr } = await getListFromJsonFile(`${props.name}Names`);
      setListData(data);
      setFilteredData(data);
    };

    fetchListData();
  }, []);

  let LabelText: string;

  switch (props.name) {
    case "school":
      LabelText = "School Name";
      break;
    case "country":
      LabelText = "Country of Residence";
      break;
    default:
      LabelText = "Please Insert A Valid Name";
      break;
  }

  return (
    <div className="form-field">
      <label className="form-label" htmlFor="userInput">
        {LabelText}
      </label>

      <div className={`${styles.dropdownContainer} dropdown`}>
        <input
          type="text"
          className="input input-block"
          id="userInput"
          value={userChoice}
          onChange={handleSchoolChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={handleBlur} // Delay to allow click event on dropdown items
          placeholder={`Type to filter ${props.name[0].toUpperCase()}${props.name.slice(
            1
          )}`}
        />

        {showDropdown && (
          <div
            className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-top-center gap-1 max-h-60 overflow-y-auto w-full`}
          >
            {filteredData.length > 0 ? (
              filteredData.map((entryName, index) => (
                <Fragment key={index}>
                  {index > 0 && (
                    <div className="dropdown-divider" role="separator"></div>
                  )}
                  <div
                    key={index}
                    className="dropdown-item text-sm"
                    onMouseDown={() => handleSelect(entryName)}
                  >
                    {entryName}
                  </div>
                </Fragment>
              ))
            ) : (
              <div className="dropdown-item text-sm">No schools found</div>
            )}
          </div>
        )}

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </div>

      <label className="form-label">
        <span className="form-label-alt first-letter:capitalize"></span>
      </label>
    </div>
  );
});

export default ListInput;
