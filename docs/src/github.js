import Cookies from 'js-cookie';

function PopupCenter(url, title, w, h) {
  var userAgent = navigator.userAgent,
    mobile = function () {
      return (
        /\b(iPhone|iP[ao]d)/.test(userAgent) ||
        /\b(iP[ao]d)/.test(userAgent) ||
        /Android/i.test(userAgent) ||
        /Mobile/i.test(userAgent)
      );
    },
    screenX =
      typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
    screenY =
      typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
    outerWidth =
      typeof window.outerWidth != 'undefined'
        ? window.outerWidth
        : document.documentElement.clientWidth,
    outerHeight =
      typeof window.outerHeight != 'undefined'
        ? window.outerHeight
        : document.documentElement.clientHeight - 22,
    targetWidth = mobile() ? null : w,
    targetHeight = mobile() ? null : h,
    V = screenX < 0 ? window.screen.width + screenX : screenX,
    left = parseInt(V + (outerWidth - targetWidth) / 2, 10),
    right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
    features = [];
  if (targetWidth !== null) {
    features.push('width=' + targetWidth);
  }
  if (targetHeight !== null) {
    features.push('height=' + targetHeight);
  }
  features.push('left=' + left);
  features.push('top=' + right);
  features.push('scrollbars=1');

  var newWindow = window.open(url, title, features.join(','));

  if (window.focus) {
    newWindow.focus();
  }

  return newWindow;
}

const authorize = () =>
  new Promise((resolve, reject) => {
    const accessToken = Cookies.get('access_token');
    if (accessToken !== undefined) {
      resolve(accessToken);
      return;
    }
    const handle = PopupCenter(
      'https://github.com/login/oauth/authorize?client_id=9adadcb2a0c067e95302&redirect_uri=https://bernhardfritz.github.io/p8g/login&scope=gist',
      '_blank',
      480,
      720,
    );
    const intervalID = setInterval(() => {
      const accessToken = Cookies.get('access_token');
      if (accessToken !== undefined) {
        clearInterval(intervalID);
        resolve(accessToken);
      } else if (handle.closed) {
        clearInterval(intervalID);
        reject(new Error('The window has been closed before authorization.'));
      }
    }, 1000);
  });

/**
 * https://docs.github.com/en/rest/gists/gists#create-a-gist
 * @param {{ description: string, files: { [key: string]: { content: string } }, public: boolean }} requestBody
 * @returns {Promise}
 */
export const createGist = (requestBody) =>
  authorize()
    .then((accessToken) =>
      fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      }),
    )
    .then((res) => res.json());

/**
 * https://docs.github.com/en/rest/gists/gists#fork-a-gist
 * @param {string} gistId
 * @returns {Promise}
 */
export const forkGist = (gistId) =>
  authorize()
    .then((accessToken) =>
      fetch(`https://api.github.com/gists/${gistId}/forks`, {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    )
    .then((res) => res.json());

/**
 * https://docs.github.com/en/rest/gists/gists#get-a-gist
 * @param {string} gistId
 * @returns {Promise}
 */
export const getGist = (gistId) =>
  fetch(`https://api.github.com/gists/${gistId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
    },
  }).then((res) => res.json());

/**
 * https://docs.github.com/en/rest/users/users#get-the-authenticated-user
 * @returns {Promise}
 */
export const getUser = () =>
  authorize()
    .then((accessToken) =>
      fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    )
    .then((res) => res.json());

/**
 * https://docs.github.com/en/rest/gists/gists#update-a-gist
 * @param {string} gistId
 * @param {{ description: string, files: { [key: string]: { content: string } } }} requestBody
 * @returns {Promise}
 */
export const updateGist = (gistId, requestBody) =>
  authorize()
    .then((access_token) =>
      fetch(`https://api.github.com/gists/${gistId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(requestBody),
      }),
    )
    .then((res) => res.json());
