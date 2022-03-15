const api = 'http://localhost:3000/lista';

// Model fetch API..
const fetchAPI = (url, opt) => new Promise((resolve) => {
  fetch(url, opt)
    .then((json) => json.json())
    .then((res) => resolve(res));
});

export {
    api, 
    fetchAPI
}
