import axios from 'axios';
import { Person } from '../interfaces/person';
import { TGender } from '../types/gender';

interface ResponseData {
  results: Person[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

const API_URL = 'https://randomuser.me/api/';

/**
 * Fetches a list of people from the Random User API.
 *
 * @param {number} [page=1] - The page number of the results to fetch.
 * @param {number} [results=12] - The number of results per page.
 * @param {TGender} [gender=null] - The gender of the people to fetch.
 * @param {string} [country=''] - The country of the people to fetch.
 * @param {number} [age=0] - The age of the people to fetch.
 * @return {Promise<ResponseData>} A promise that resolves to the fetched data.
 * @throws {Error} If the API response is missing required data.
 */
const fetchPeoples = async (
  page: number = 1,
  results: number = 12,
  gender: TGender = null,
  country: string = '',
  age: number = 0
): Promise<ResponseData> => {
  // Build the API URL with the provided parameters
  const url = `${API_URL}?gender=${gender}&nat=${country}`;

  try {
    // Make the API request
    const response = await axios.get(url, {
      params: {
        page,
        results,
      },
    });

    // Check for missing data in the response
    if (!response.data || !response.data.results || !response.data.info) {
      throw new Error('Missing data in API response');
    }

    // Filter the fetched results by age
    // Needs save the response data in state global for use filter for age and others functions
    const filteredResults = response.data.results.filter(
      (person: Person) => person.dob && person.dob.age === age
    );

    // Return the fetched data
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error(error);
    throw new Error('Failed to fetch people from API');
  }
};

export { fetchPeoples };

