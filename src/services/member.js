import request from '../utils/request';
import { DEFAULT_URL, CERTIFY_URL } from '../constants/Config';

export function login(values) {
  return request(`${DEFAULT_URL}/login`, {
    method: 'POST',
    credentials: 'include',             //需要设置sessionID
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request(`${DEFAULT_URL}`, {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

/**
 *  认证服务
 */

export function fetchOne(tokenInfo) {
  return request(`${CERTIFY_URL}`, {
    credentials: 'include',
    headers: tokenInfo,
  });
}

export function certify(values, tokenInfo) {
  return request(`${CERTIFY_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values),
  });
}

export function patch(id, values, tokenInfo) {
  return request(`${CERTIFY_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values)
  });
}
