import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

interface SchoolDataObj {
  data: string[];
  msgErr: string | null;
}

const errorStrings: string[] = [
  "No data found for local school json file",
  "Local school jsonfile not found",
  "Error parsing JSON data from local school json file",
  "Invalid data format for local school json file",
  "An unexpected error occured while loading school data",
];

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Asynchronously fetches local school data from a JSON file.
 *
 * This function attempts to read and parse a local JSON file containing school data.
 * It handles various edge cases, including missing files, syntax errors in the JSON,
 * and invalid data formats. The result is returned as an object containing the data
 * and any relevant error message.
 *
 * @async
 * @function getLocalSchoolData
 * @returns {Promise<SchoolDataObj>} - An object containing the school data and an error message.
 * @returns {Promise<SchoolDataObj.data>} - An array of strings representing school data.
 * @returns {Promise<SchoolDataObj.errorMsg>} - A string describing an error that occurred, or `null` if no error.
 *
 * @throws {Error} Will throw an error if there is a problem reading the file or parsing the JSON.
 *
 * @example
 * // Example usage
 * getLocalSchoolData().then(result => console.log(result));
 *
 * // Expected output (if no error):
 * // { data: ['School1', 'School2'], errorMsg: null }
 *
 * // Expected output (if file is missing):
 * // { data: [], errorMsg: "Local school json file not found" }
 *
 * // Expected output (if JSON is invalid):
 * // { data: [], errorMsg: "Error parsing JSON data from local school json file" }
 */
export const getLocalSchoolData = async (): Promise<SchoolDataObj> => {
  let data: string[] = [];
  let msgErr: string | null = null;

  try {
    const jsonDataFile = path.join(__dirname, "../data/schools.json");
    const fileContent = await fs.readFile(jsonDataFile, "utf-8");
    const schoolData = JSON.parse(fileContent);

    if (!Array.isArray(schoolData))
      throw new Error(`Invalid data format for local school json file`);

    data = schoolData;

    if (schoolData.length === 0) msgErr = errorStrings[0];
  } catch (error: any) {
    if (error.code === "ENOENT") msgErr = errorStrings[1];
    if (error.name === "SyntaxError") msgErr = errorStrings[2];
    if (error.message.includes("Invalid data fromat")) msgErr = errorStrings[3];
    else msgErr = errorStrings[4];

    console.error("Error loading school data:", error.message);
  }

  return { data, msgErr };
};
