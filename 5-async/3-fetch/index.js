function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // eslint-disable-next-line consistent-return
  return fetch(url).then(response => {
    // 返回的请求只有在断电的情况下才会有error,因此要做好status code判断
    if (response.status === 200) {
      return response.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('error');
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
