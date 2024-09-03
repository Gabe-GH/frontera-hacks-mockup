"use server";

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

interface DataObj {
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
 * Retrieves data from a local JSON file and handles potential errors.
 *
 * This function reads a JSON file located in the ../data directory, attempts to parse its content,
 * and returns the data along with any errors encountered during the process. It covers scenarios such as:
 * - Missing JSON file.
 * - Syntax errors in the JSON content.
 * - Unexpected data formats (e.g., non-array data).
 *
 * @async
 * @function getListFromJsonFile
 * @param {string} fileName - The name of the JSON file (without the extension) to be read.
 * @returns {Promise<DataObj>} - A promise that resolves to an object containing the parsed data and any error message.
 *
 * @example
 * // Fetch school names from the JSON file
 * const result = await getListFromJsonFile('schoolNames');
 * console.log(result);
 * // Expected output:
 * // { data: ['School1', 'School2'], msgErr: null }
 *
 * // Fetch country names from the JSON file
 * const result = await getListFromJsonFile('countryNames');
 * console.log(result);
 * // Expected output:
 * // { data: ['Country1', 'Country2'], msgErr: null }
 */
export const getListFromJsonFile = async (
  fileName: string
): Promise<DataObj> => {
  let data: string[] = [];
  let msgErr: string | null = null;

  try {
    const jsonDataFile = path.join(__dirname, `../data/${fileName}.json`);
    const fileContent = await fs.readFile(jsonDataFile, "utf-8");
    const listData = JSON.parse(fileContent);

    if (!Array.isArray(listData))
      throw new Error(`Invalid data format for local school json file`);

    data = listData;

    if (listData.length === 0) msgErr = errorStrings[0];
  } catch (error: any) {
    if (error.code === "ENOENT") msgErr = errorStrings[1];
    if (error.name === "SyntaxError") msgErr = errorStrings[2];
    if (error.message.includes("Invalid data fromat")) msgErr = errorStrings[3];
    else msgErr = errorStrings[4];

    console.error("Error loading school data:", error.message);
  }

  return { data, msgErr };
};
