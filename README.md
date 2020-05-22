## 실험시 웹사이트

### 사용전 필요한 툴

- node.js



### Install

```bash
git clone http://https://github.com/jbj616/laboratory-website.git
npm install 
npm start
```



### 파일 구성

- Include : 중복 요소
  - footer : 메뉴반 하단 footer
  - head : meta 정보
  - header : 상단 제목
  - script : js 스크립트파일 
  - sidebar : 메뉴바
- Page
  - Member
    - Prefessor / Member
  - Research
    - Field / Method / Projects
  - Home
  - Introduce
  - Lecture
  - PatentsPage
  - Publications

모든 페이지관련 소스코드는 HTML 문법으로 작성하였습니다.



### 페이지 렌더링 및 배포 방법

```javascript
//Lecture
app.get("/lecture", (req, res) => {
  res.render("page/LecturePage");
});
```



### nodejs 설정

> App.js 파일에 Node.js 에 관련 모든 설정 및 소스코드가 있습니다.

사용한 모듈

```javascript
const express = require("express"); // 라우터
const http = require("http"); // http
const expressErrorHandler = require("express-error-handler"); // error 처리를 윈한 라이브러리
const static = require("serve-static"); // 정적 파일 접근을 위한 라이브러리
const fs = require("fs"); //  파일 읽고 쓰기 라이브러리
const path = require("path"); // 경로 관련 라이브러리
const logger = require("morgan"); // log 
```



