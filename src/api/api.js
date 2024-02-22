import axios from 'axios';

const API_BASE_URL = 'https://your-energy.b.goit.study/api';

/**
 * This is needed to normalize api response with pagination
 * Do NOT use it for other responses
 * example:
 * {
 *   page: "1",
 *   perPage: "12",
 *   totalPages: null,
 *   results: [ ]
 * }
 * should become
 * {
 *   page: 1,
 *   perPage: 12,
 *   totalPages: 0,
 *   results: [ ]
 * }
 */
function preparePaginatedResponse(paginatedResponse) {
  const { page, perPage, totalPages } = paginatedResponse.data;

  return {
    ...paginatedResponse,
    page: +page,
    perPage: +perPage,
    totalPages: totalPages ?? 0,
  };
}

export function getExercises(page = 1, limit = 12) {
  return axios
    .get(`${API_BASE_URL}/exercises?page=${page}&limit=${limit}`)
    .then(response => preparePaginatedResponse(response));
}

export function getQuote() {
  return axios.get(`${API_BASE_URL}/quote`).then(response => response.data);
}

export function sendSubscribe(body) {
  return axios
    .post(`${API_BASE_URL}/subscription`, body)
    .then(response => response.data);
}
