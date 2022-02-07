import sendRequest from './send-request';

const BASE_URL = '/api/resources';

export function getResources() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}