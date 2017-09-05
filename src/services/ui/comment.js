import request from '../../utils/request';
import { COMMENT_URL } from '../../constants/Config';

/**
 * 评价页面
 * @param member_id
 * @returns {Object}
 */
export function fetchComment(member_id) {
  return request(`${COMMENT_URL}/${member_id}`, {
    needAuth: true
  });
}

export function create(values) {
  return request(`${COMMENT_URL}`, {
    method: 'POST',
    needAuth: true,
    body: JSON.stringify(values),
  });
}

export function patch(id, values) {
  return request(`${COMMENT_URL}/${id}`, {
    method: 'PUT',
    needAuth: true,
    body: JSON.stringify(values)
  });
}

export function remove(id) {
  return request(`${COMMENT_URL}/${id}`, {
    method: 'DELETE',
    needAuth: true,
  });
}
