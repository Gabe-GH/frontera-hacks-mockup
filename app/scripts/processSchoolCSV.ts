import { parse } from "csv-parse";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const csvFilePath: string = path.join(__dirname, "../data/schools.csv");

/**
 * Asynchronously processes a CSV file and extracts data.
 *
 * This function reads a CSV file from the provided file path, parses it, and extracts
 * the first column of each row into an array of strings. It handles the file reading
 * and parsing asynchronously, making it efficient for large datasets.
 *
 * @async
 * @function processCSV
 * @param {string} filePathToCSV - The file path to the CSV file to be processed.
 * @returns {Promise<string[]>} - A promise that resolves to an array of strings, where each string represents a data entry from the CSV file.
 *
 * @throws {Error} Will throw an error if the file cannot be read or parsed.
 *
 * @example
 * // Example usage
 * processCSV(csvFilePath).then(data => console.log(data));
 *
 * // Expected output (if CSV contains school names):
 * // ['School1', 'School2', 'School3', ...]
 */
const processCSV = async (filePathToCSV: string): Promise<string[]> => {
  const schools: string[] = [];
  const parser = fs.createReadStream(filePathToCSV).pipe(parse());

  for await (const entry of parser) {
    schools.push(entry[0]);
  }

  return schools;
};

/**
 * Converts an array of data into JSON format and writes it to a file.
 *
 * This function takes an array of strings, converts it into a JSON-formatted string,
 * and writes the result to a specified file. The JSON file is created in the
 * ../data directory, and the function ensures that the directory exists.
 *
 * @async
 * @function convertDataToJSON
 * @param {string[]} data - An array of strings representing data entries.
 * @param {string} jsonFileTargetName - The desired name for the output JSON file (without extension).
 * @returns {Promise<void>} - A promise that resolves when the JSON data has been successfully written to the file.
 *
 * @throws {Error} Will throw an error if there is an issue creating the directory or writing the file.
 *
 * @example
 * // Example usage
 * convertDataToJSON(['School1', 'School2'], 'schools')
 *   .then(() => console.log('Data successfully converted to JSON'))
 *   .catch(err => console.error('Error:', err));
 *
 * // Expected output:
 * // JSON data successfully written to ../data/schools.json
 */
const convertDataToJSON = async (
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
  const data = await processCSV(csvFilePath);
  const product = await convertDataToJSON(data, "schools");
})();
