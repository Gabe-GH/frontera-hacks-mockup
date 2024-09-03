import { memo, Fragment, useState, useEffect } from "react";

import { GeneralFormType } from "@/app/types/FormTypes";
import { getListFromJsonFile } from "@/app/util/getSchoolData";

import styles from "@/app/views/FormField/FormField.module.css";

const SchoolInput = memo(function SchoolInputDisplayName(
  props: GeneralFormType
) {
  const [school, setSchool] = useState("");
  const [schoolData, setSchoolData] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");

  const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSchool(value);
    setError("");
    if (value === "") {
      setFilteredData(schoolData);
    } else {
      const filtered = schoolData.filter((schoolName) =>
        schoolName.toLowerCase().includes(value.toLowerCase().trim())
      );
      setFilteredData(filtered);
    }
  };

  const handleSelect = (schoolName: string) => {
    setSchool(schoolName);
    setShowDropdown(false);
    setError("");

    props.onChange({
      target: {
        value: schoolName, // Ensure value is a string
        name: props.name,
      } as HTMLInputElement, // Typecast target to match HTMLInputElement
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleBlur = () => {
    setShowDropdown(false);
    if (school && !schoolData.includes(school)) {
      setError("Please select a valid school from the list.");
    } else {
      setError(""); // Clear error if input matches a valid school
    }

    props.onChange({
      target: {
        value: school === "" ? "n/a" : school, // Ensure value is a string
        name: props.name,
      } as HTMLInputElement, // Typecast target to match HTMLInputElement
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    const fetchSchoolData = async () => {
      const { data, msgErr } = await getListFromJsonFile("schoolNames");
      setSchoolData(data);
      setFilteredData(data);
    };

    fetchSchoolData();
  }, []);

  return (
    <div className="form-field">
      <label className="form-label capitalize" htmlFor="schoolInput">
        School
      </label>

      <div className={`${styles.dropdownContainer} dropdown`}>
        <input
          type="text"
          className="input input-block"
          id="schoolInput"
          value={school}
          onChange={handleSchoolChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={handleBlur} // Delay to allow click event on dropdown items
          placeholder="Type to filter schools"
        />

        {showDropdown && (
          <div
            className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-top-center gap-1 max-h-60 overflow-y-auto w-full`}
          >
            {filteredData.length > 0 ? (
              filteredData.map((schoolName, index) => (
                <Fragment key={index}>
                  {index > 0 && (
                    <div className="dropdown-divider" role="separator"></div>
                  )}
                  <div
                    key={index}
                    className="dropdown-item text-sm"
                    onMouseDown={() => handleSelect(schoolName)}
                  >
                    {schoolName}
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

export default SchoolInput;
