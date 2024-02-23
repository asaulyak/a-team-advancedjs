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
    ...paginatedResponse.data,
    page: +page,
    perPage: +perPage,
    totalPages: totalPages ?? 0,
  };
}

export function getExercises(options) {
  const searchParams = Object.keys(options)
    .filter(key => !!options[key])
    .map(key => `${key}=${options[key]}`)
    .join('&');

  return axios
    .get(`${API_BASE_URL}/exercises?${searchParams}`)
    .then(response => preparePaginatedResponse(response));
}
export function getExercisesById(_id) {
  return axios
    .get(`${API_BASE_URL}/exercises/${_id}`)
    .then(response => response.data);
}

export function getQuote() {
  return axios.get(`${API_BASE_URL}/quote`).then(response => response.data);
}

export function sendSubscribe(body) {
  return axios
    .post(`${API_BASE_URL}/subscription`, body)
    .then(response => response.data);
}

export function getSubCategoriesByCategory({ category, page = 1, limit = 12 }) {
  return axios
    .get(
      `${API_BASE_URL}/filters?filter=${category}&page=${page}&limit=${limit}`
    )
    .then(response => preparePaginatedResponse(response));
}

export function getExercisesByCategory({
  category,
  subCategory,
  keyword = 'pull',
  page = 1,
  limit = 10,
}) {
  return axios
    .get(
      `${API_BASE_URL}/exercises?${[category]}=${subCategory}&keyword=${keyword}&page=${page}&limit=${limit}`
     )
    .then(response => preparePaginatedResponse(response));
}

export function getFilters(filter = 'Muscles', page = 1, limit = 12) {
  return axios
    .get(
      `${API_BASE_URL}/filters?filter=${encodeURIComponent(filter)}&page=${page}&limit=${limit}`
    )
    .then(response => preparePaginatedResponse(response));
}
