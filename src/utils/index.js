import cookie from 'js-cookie';
/**
 * 设置用户信息
 * @param {Object} info
 */
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取用户的信息
 */
export function getCookie() {
  return {
    username: cookie.get('username'),
    appket: cookie.get('appkey'),
    role: cookie.get('role'),
    email: cookie.get('email'),
  };
}

/**
 *  移除cookie
 */

export function removeCookie() {
  cookie.remove('username');
  cookie.remove('appkey');
  cookie.remove('role');
  cookie.remove('email');
  return true;
}
