async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await fetch(url); // 表示在这一步先处理fetch(url),返回promise的结果，处理完后再执行下一步 -> then
    const data = await result.json(); // 表示在这一步先处理出来把result转为json的过程，处理完后再执行下一步 -> then
    document.writeln(data.name);
  } catch (error) {
    console.log(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
