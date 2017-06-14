import request from '../utils/request';
import { PAGE_SIZE, CONTACT_URL } from '../constants/Config';

export function fetch(type_id, param, page) {
  return request(
    `${CONTACT_URL}?type_id=${type_id}&param=${param}&page=${page}&limit=${PAGE_SIZE}`
  );
}

export function fetchOne(id) {
  return request(
    `${CONTACT_URL}/${id}`
  );
}

export function getCity() {
  return request(`${CONTACT_URL}`);
}
