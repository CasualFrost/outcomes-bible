import sendRequest from './send-request';

const BASE_URL = '/api/lists';

export function getLists() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addToList(listId, resourceId) {
  return sendRequest(`${BASE_URL}/${listId}/resources/${resourceId}`, "POST")
}

export function create(formData) {
  return sendRequest(BASE_URL, "POST", {formData});
}