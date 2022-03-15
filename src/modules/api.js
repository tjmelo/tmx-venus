const api = 'http://localhost:3000/lista';

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
