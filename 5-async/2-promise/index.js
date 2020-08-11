function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('GET', url, true);
    // eslint-disable-next-line func-names
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText); // 返回resolve以后的信息 pending -> resolve
        } else {
          reject(xhr.statusText); // 返回reject以后的信息 pending -> reject
        }
      }
    };
    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name); // then表示对resolve信息的处理，可链式调用对函数进行多层回调 return new Promise.resolve/reject()
  })
  .catch(error => {
    console.error(error); // catch表示对error信息的处理,一般后面会跟final
  });
