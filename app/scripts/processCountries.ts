import countryJSON from "@/app/data/countries.json";

/**
 * Extracts and processes country names from a JSON file.
 *
 * This function reads an imported JSON file containing an array of country objects,
 * extracts the name of each country, and returns them in an array. If a country has
 * an "alpha-3" code of "USA," its name is moved to the front of the array.
 *
 * @function processCountriesToArray
 * @returns {string[]} - An array of country names with "USA" at the front if applicable.
 *
 * @example
 * // Example usage
 * const countryNames = processCountriesToArray();
 * console.log(countryNames);
 *
 * // Expected output:
 * // ['United States of America', 'Canada', 'Mexico', ...]
 */
export const processCountriesToArray = (): string[] => {
  let countryNames: string[] = [];

  for (let country of countryJSON) {
    if (country["alpha-3"] === "USA") {
      countryNames = Array(country.name).concat(countryNames);
    } else {
      countryNames.push(country.name);
    }
  }

  return countryNames;
};
