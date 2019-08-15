export const postData = (url = "", data = {}) => {
  return fetch(url, {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};
