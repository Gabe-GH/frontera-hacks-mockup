import { parse } from "csv-parse";
import fs from "node:fs";

/**
 * Asynchronously processes a CSV file and extracts data.
 *
 * This function reads a CSV file from the provided file path, parses it, and extracts
 * the first column of each row into an array of strings. It handles the file reading
 * and parsing asynchronously, making it efficient for large datasets.
 *
 * @async
 * @function processCsvtoArray
 * @param {string} filePathToCSV - The file path to the CSV file to be processed.
 * @returns {Promise<string[]>} - A promise that resolves to an array of strings, where each string represents a data entry from the CSV file.
 *
 * @throws {Error} Will throw an error if the file cannot be read or parsed.
 *
 * @example
 * // Example usage
 * processCsvtoArray(csvFilePath).then(data => console.log(data));
 *
 * // Expected output (if CSV contains school names):
 * // ['School1', 'School2', 'School3', ...]
 */
export const processCsvToArray = async (
  filePathToCSV: string
): Promise<string[]> => {
  const data: string[] = [];
  const parser = fs.createReadStream(filePathToCSV).pipe(parse());

  for await (const entry of parser) {
    data.push(entry[0]);
  }

  return data;
};
