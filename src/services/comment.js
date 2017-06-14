import request from '../utils/request';
import { COMMENT_URL } from '../constants/Config';

/**
 * 评价页面
 * @param member_id
 * @param tokenInfo
 * @returns {Promise}
 */
export function fetchComment(member_id, tokenInfo) {
  return request(`${COMMENT_URL}/${member_id}`, {
    credentials: 'include',
    headers: tokenInfo,
  });
}

export function create(values, tokenInfo) {
  return request(`${COMMENT_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values),
  });
}

export function patch(id, values, tokenInfo) {
  return request(`${COMMENT_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: tokenInfo,
    body: JSON.stringify(values)
  });
}

export function remove(id, tokenInfo) {
  return request(`${COMMENT_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: tokenInfo,
  });
}
