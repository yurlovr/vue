export const postData = (url = "", data = {}) => {
  return fetch(url, {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data)
  }).then(response => response.json());
};
