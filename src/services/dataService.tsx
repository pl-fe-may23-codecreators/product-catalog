import { Phone } from '../types/Phone';

const URL_BASE = 'https://codecreators-backend.onrender.com';
const ENDPOINT = '/products';

export async function fetchData(params = {}) {
  try {
    const url = new URL(ENDPOINT, URL_BASE);
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.devices;

  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}
