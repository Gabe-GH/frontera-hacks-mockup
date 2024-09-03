import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { processCountriesToArray } from "./processCountries";
import { processCsvToArray } from "./processCsvToArray";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const schoolCsvFilePath: string = path.join(__dirname, "../data/schools.csv");

/**
 * Converts an array of data into JSON format and writes it to a file.
 *
 * This function takes an array of strings, converts it into a JSON-formatted string,
 * and writes the result to a specified file. The JSON file is created in the
 * ../data directory, and the function ensures that the directory exists.
 *
 * @async
 * @function writeDataToJSON
 * @param {string[]} data - An array of strings representing data entries.
 * @param {string} jsonFileTargetName - The desired name for the output JSON file (without extension).
 * @returns {Promise<void>} - A promise that resolves when the JSON data has been successfully written to the file.
 *
 * @throws {Error} Will throw an error if there is an issue creating the directory or writing the file.
 *
 * @example
 * // Example usage
 * writeDataToJSON(['School1', 'School2'], 'schools')
 *   .then(() => console.log('Data successfully converted to JSON'))
 *   .catch(err => console.error('Error:', err));
 *
 * // Expected output:
 * // JSON data successfully written to ../data/schools.json
 */
const writeDataToJSON = async (
  data: string[],
  jsonFileTargetName: string
): Promise<void> => {
  // Convert the array of school names to a JSON string
  const jsonConvertedData = JSON.stringify(data, null, 2);

  // Define the path to the output file
  const outputDirPath = path.join(__dirname, "../data");
  const outputFilePath = path.join(outputDirPath, `${jsonFileTargetName}.json`);

  // Create the output directory if it doesn't exist
  await fs.promises.mkdir(outputDirPath, { recursive: true });

  // Write JSON data to the file
  await fs.promises.writeFile(outputFilePath, jsonConvertedData, "utf8");

  console.log(`JSON data successfully written to ${outputFilePath}`);
};

console.log("Starting script...");

// NOTE: This is the main function that runs the script and writes the JSON file
(async () => {
  await writeDataToJSON(await processCsvToArray(schoolCsvFilePath), "schools");

  await writeDataToJSON(processCountriesToArray(), "countries");
})();
