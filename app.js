/** @format */

//module
const express = require("express");
const http = require("http");
const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");

// //변수
const app = express();
const router = express.Router();

//설정
app.set("port", process.env.PORT || 80);
app.use(express.static(__dirname + "/front"));
app.use(logger());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/", static(path.join(__dirname, "views/page")));

app.get("/", (req, res) => {
  res.render("page/HomePage");
});

//members tab
app.get("/alumni", (req, res) => {
  res.render("page/Member/AlumniPage");
});

app.get("/members", (req, res) => {
  res.render("page/Member/MembersPage");
});

app.get("/professor", (req, res) => {
  res.render("page/Member/ProfessorPage");
});

//Research Page
app.get("/field", (req, res) => {
  res.render("page/Research/FieldPage");
});

app.get("/method", (req, res) => {
  res.render("page/Research/MethodPage");
});

app.get("/project", (req, res) => {
  res.render("page/Research/ProjectPage");
});

//Career Tab
app.get("/career", (req, res) => {
  res.render("page/CareerPage");
});

//NewsPage
app.get("/newspaper", (req, res) => {
  res.render("page/NewsPage");
});

//patents
app.get("/patent", (req, res) => {
  res.render("page/PatentsPage");
});

//publication
app.get("/publication", (req, res) => {
  res.render("page/PublicationPage");
});

//에러 처리
var errorHandler = expressErrorHandler({
  static: {
    "404": "./front/erroor.html",
  },
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//서버 생성
http.createServer(app).listen(app.get("port"), () => {
  console.log("익스프레스로 웹 서버를 실행함: " + app.get("port"));
});
