const api = 'https://tmx-shoplist.netlify.app/.netlify/functions/api/lista';

// Model fetch API..
const fetchAPI = (url, opt) => new Promise((resolve) => {
  fetch(url, opt)
    .then(data => data.ok ? data.json() : console.warn(data))
    .then((res) => resolve(res))
    .catch(e => console.error(e));
});

export {
    api, 
    fetchAPI
}
