import axios from 'axios';

const API_COUNTRIES = 'https://countriesnow.space/api/v0.1/countries/iso';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_COUNTRIES);
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      throw new Error('Failed to fetch countries');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch countries');
  }
};

