import request from '../../utils/request';
import { DEFAULT_URL, CERTIFY_URL } from '../../constants/Config';

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

export function fetchOne() {
  return request(`${CERTIFY_URL}`, {
    needAuth: true,
  });
}

export function certify(values) {
  return request(`${CERTIFY_URL}`, {
    method: 'POST',
    needAuth: true,
    body: JSON.stringify(values),
  });
}

export function patch(id, values) {
  return request(`${CERTIFY_URL}/${id}`, {
    method: 'PUT',
    needAuth: true,
    body: JSON.stringify(values)
  });
}
