import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage({ code, error }) {
  // const { code, error } = data;
  if (code !== 200) {
    let e = new Error(error);
    e.number = code
    throw e
  }
  return error;
}

const headerHandler = (tokenInfo, values = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}) => (
  {...tokenInfo, ...values}
)

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
/*export default function request(url, options) {
 return fetch(url, options)
 .then(checkStatus)
 .then(parseJSON)
 .then(data => ({ data }))
 .catch(err => ({ err }));
 }*/

export default async function request(url, options = {}) {

  const newHeader = headerHandler(!!options.headers ? options.headers : {})
  const newOption = {...options, headers: newHeader}
  const response = await fetch(url, newOption);

  checkStatus(response);

  const data = await response.json();

  parseErrorMessage(data)

  const ret = {
    data,
    headers: {},
  };

  options.hasOwnProperty('method') ||
  (ret.headers['x-total-count'] = response.headers.get('x-total-count') ? response.headers.get('x-total-count') : data.data.dataCount)

  console.log(ret)

  return ret;
}
