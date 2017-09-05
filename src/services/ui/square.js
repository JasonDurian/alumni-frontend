import request from '../../utils/request';
import { SQUARE_PAGE, SQUARE_URL } from '../../constants/Config';

export function fetch(page, param) {
  return request(`${SQUARE_URL}?page=${page}&limit=${SQUARE_PAGE}&param=${param}`, {
    needAuth: true,
  });
}

export function fetchOne(id) {
  return request(`${SQUARE_URL}/${id}`, {
    needAuth: true,
  });
}

export function fetchSelf() {
  return request(`${SQUARE_URL}/squareuser`, {
    needAuth: true,
  });
}

export function create(values) {
  return request(`${SQUARE_URL}`, {
    method: 'POST',
    needAuth: true,
    body: JSON.stringify(values),
  });
}

export function comment(values) {
  return request(`${SQUARE_URL}/comment`, {
    method: 'POST',
    needAuth: true,
    body: JSON.stringify(values),
  });
}
