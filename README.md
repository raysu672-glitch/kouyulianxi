# 口语练习（kouyulianxi）

雅思口语练习站：Part 1（步骤 + 线索 + 素材）与 Part 2（先背素材，再套题）。

## 在线访问

https://raysu672-glitch.github.io/kouyulianxi/

> 静态页可直接练题、看提示、听题目。P1 录音转写 / AI 评分需本地主站 `local_server.py`（`/api/p4`、`/api/config`）。

## 本地打开

```bash
python -m http.server 8080
```

浏览器访问：

- P1：`http://127.0.0.1:8080/index.html`
- P2：`http://127.0.0.1:8080/index.html?part=p2`

## 结构

- `index.html` / `style.css` / `app.js`：P1 页面与练习逻辑
- `p1-data.js`：P1 题库、线索与素材分层提示
- `p2-app.js` / `p2-data.js`：P2 背素材 + 套题（物品含小熊女生向 / 篮球男生向）
- `audio/`：P1 预生成英音题目（`manifest.js` + 分类 mp3）
- `config.js`：接口配置
