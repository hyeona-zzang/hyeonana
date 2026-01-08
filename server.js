const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 헬스 체크 (서버 살아있는지 확인용)
app.get("/", (req, res) => {
  res.type("text").send("OK");
});

// 로그인 요청 받기 (연습용)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("==== LOGIN REQUEST ====");
  console.log("ip:", req.ip);
  console.log("username:", username);
  console.log("password:", password); // ❌ 실서비스에선 절대 로그 금지
  console.log("time:", new Date().toISOString());
  console.log("=======================");

  res.json({ success: true });
});

// public 폴더를 웹으로 열어줌
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});


