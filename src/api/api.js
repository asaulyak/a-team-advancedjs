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
  const { page, perPage, totalPages } = paginatedResponse;

  return {
    ...paginatedResponse,
    page: +page,
    perPage: +perPage,
    totalPages: totalPages ?? 0,
  };
}

export function getExercises() {
  return axios
    .get(`${API_BASE_URL}/exercises`)
    .then(response => preparePaginatedResponse(response));
}

export function getQuote() {
  return axios.get(`${API_BASE_URL}/quote`);
}
