# 口语 P1 练习（kouyulianxi）

雅思口语 Part 1 练习站：按「步骤 + 线索 + 素材」可控发挥，含录音识别与 AI 评分。

## 在线访问

https://raysu672-glitch.github.io/kouyulianxi/

> 静态页可直接练题、看提示、听题目。录音转写 / AI 评分需本地主站 `local_server.py`（`/api/p4`、`/api/config`）。

## 本地打开

```bash
python -m http.server 8080
```

浏览器访问：`http://127.0.0.1:8080/index.html`

## 结构

- `index.html` / `style.css` / `app.js`：页面与练习逻辑
- `p1-data.js`：题库、线索与素材分层提示
- `config.js`：接口配置
