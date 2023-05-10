// 필요한 모듈을 import합니다.
const express = require('express');
const app = express();
const port = 3000;

// '/' 경로에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버가 port에서 수신 대기하도록 설정합니다.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
