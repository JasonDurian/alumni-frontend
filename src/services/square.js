import request from '../utils/request';
import { SQUARE_PAGE, SQUARE_URL } from '../constants/Config';

export function fetch(page, param, tokenInfo) {
  return request(`${SQUARE_URL}?page=${page}&limit=${SQUARE_PAGE}&param=${param}`, {
    credentials: 'include',
    headers: tokenInfo,
  });
}

export function fetchOne(id, tokenInfo) {
  return request(`${SQUARE_URL}/${id}`, {
    credentials: 'include',
    headers: tokenInfo,
  });
}

export function fetchSelf(tokenInfo) {
  return request(`${SQUARE_URL}/squareuser`, {
    credentials: 'include',
    headers: tokenInfo,
  });
}

export function create(values, tokenInfo) {
  return request(`${SQUARE_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values),
  });
}

export function comment(values, tokenInfo) {
  return request(`${SQUARE_URL}/comment`, {
    method: 'POST',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values),
  });
}
