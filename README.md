# 本專案教學網站 — Graduation Exhibition

> 一個以「畢業製作展示」為主題的網頁入門教學專案，適合完全新手學習 HTML、CSS 與 JavaScript 的基礎知識。
> 透過這個專案，你將學會建立有真實感的靜態網站，並透過 GitHub Pages 讓全世界都能看到你的作品！

線上預覽：[https://justinshih0918.github.io](https://justinshih0918.github.io)

---

## 目錄

1. [專案簡介](#專案簡介)
2. [使用技術](#使用技術)
3. [資料夾結構](#資料夾結構)
4. [如何在本機開啟](#如何在本機開啟)
5. [GitHub Pages 部署教學](#github-pages-部署教學)
6. [學習路線圖](#學習路線圖)
7. [TODO 任務清單（教師帶練版）](#todo-任務清單)

---

## 專案簡介

這是一個包含 5 個頁面的靜態網站：

| 頁面 | 檔案 | 說明 |
|------|------|------|
| 首頁 | `index.html` | 全版 Hero、作品輪播、展覽資訊 |
| 作品展示 | `gallery.html` | 作品 Grid、分類篩選、Lightbox 大圖 |
| 作品詳細 | `artwork.html` | 根據 URL 參數動態顯示作品內容 |
| 關於展覽 | `about.html` | 策展理念、藝術家介紹、時間軸 |
| 聯絡我們 | `contact.html` | 聯絡資訊、JS 表單驗證 |

---

## 使用技術

本專案全部透過 CDN 引入，不需要安裝 Node.js 或任何套件，打開 HTML 檔案就能直接使用。

| 工具 | 用途 | 官方文件 |
|------|------|----------|
| **HTML5** | 網頁結構，使用語意化標籤 | [MDN HTML 指南](https://developer.mozilla.org/zh-TW/docs/Web/HTML) |
| **CSS3** | 樣式：Flexbox、Grid、動畫、RWD | [MDN CSS 指南](https://developer.mozilla.org/zh-TW/docs/Web/CSS) |
| **Vanilla JavaScript (ES6+)** | DOM 操作、事件、URL 參數 | [MDN JavaScript 指南](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript) |
| **[Google Fonts](https://fonts.google.com/)** | 免費雲端字型（Playfair Display、Inter） | [fonts.google.com](https://fonts.google.com/) |
| **[Font Awesome 6](https://fontawesome.com/)** | 圖示庫，使用 `<i class="fa-solid fa-...">` 插入 icon | [fontawesome.com/icons](https://fontawesome.com/icons) |
| **[Swiper.js 11](https://swiperjs.com/)** | 現代感輪播 Slider，應用於首頁精選作品 | [swiperjs.com](https://swiperjs.com/) |

> 為什麼選這些工具？
> Google Fonts 讓你的網頁字型立刻升級，Font Awesome 讓你免費使用數千種 icon，Swiper.js 則是業界最多人用的輪播套件之一。這些都是真實職場中常見的工具。

---

## 資料夾結構

```
JustinShih0918.github.io/
│
├── index.html          ← 首頁
├── gallery.html        ← 作品展示頁
├── artwork.html        ← 作品詳細頁（動態讀取 URL 參數）
├── about.html          ← 關於展覽頁
├── contact.html        ← 聯絡我們頁
│
├── css/
│   ├── style.css       ← 全站共用樣式（CSS 變數、Navbar、Footer、動畫）
│   ├── gallery.css     ← 作品展示頁專屬樣式（Grid、卡片、Lightbox）
│   └── artwork.css     ← 作品詳細頁專屬樣式（兩欄排版）
│
├── js/
│   ├── artworks.js     ← 作品資料庫（所有作品資料都在這裡）
│   ├── main.js         ← 全站共用邏輯（Navbar、Intersection Observer）
│   └── gallery.js      ← 作品展示頁邏輯（動態渲染、篩選、Lightbox）
│
└── assets/
    └── images/         ← 放置自己的圖片（目前使用 picsum.photos 線上佔位圖）
```

---

## 如何在本機開啟

### 方法一：VS Code + Live Server（推薦）

1. 安裝 [Visual Studio Code](https://code.visualstudio.com/)
2. 在 VS Code 擴充功能（Extensions）搜尋 Live Server，安裝後重啟
3. 用 VS Code 開啟本專案資料夾
4. 對 `index.html` 點右鍵 → Open with Live Server
5. 瀏覽器會自動開啟 `http://127.0.0.1:5500`，儲存檔案時會自動重新整理

### 方法二：直接用瀏覽器開啟

1. 找到 `index.html` 檔案
2. 用瀏覽器（Chrome 或 Firefox）直接開啟

> 注意：部分功能（例如從其他頁面讀取資料）在直接開啟 `file://` 時可能受瀏覽器安全限制，建議使用方法一。

---

## GitHub Pages 部署教學

只需要幾個步驟，就能讓你的網站上線，讓全世界都能看到！

### 步驟 1：建立 GitHub 帳號與 Repository

1. 前往 [github.com](https://github.com) 註冊帳號（已有帳號請直接登入）
2. 點擊右上角的 + → New repository
3. Repository name 填入：`你的帳號名稱.github.io`（例如：`justinshih0918.github.io`）
4. 選擇 Public
5. 點擊 Create repository

### 步驟 2：將檔案上傳到 GitHub

**方法 A：透過網頁介面上傳（最簡單）**

1. 進入你的 Repository 頁面
2. 點擊 Add file → Upload files
3. 把所有檔案拖曳進去（注意要保持資料夾結構）
4. 在 Commit 訊息欄位輸入：`Initial commit`
5. 點擊 Commit changes

**方法 B：透過 Git 指令（推薦學起來）**

```bash
# 在專案資料夾執行以下指令

# 1. 初始化 Git
git init

# 2. 新增所有檔案
git add .

# 3. 儲存版本
git commit -m "Initial commit: 網站上線"

# 4. 連結你的 GitHub Repo（把下面網址換成你的）
git remote add origin https://github.com/你的帳號/你的帳號.github.io.git

# 5. 推送到 GitHub
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 進入你的 Repository → 點擊上方的 Settings
2. 左側選單找到 Pages
3. 在 Branch 選 `main`，資料夾選 `/(root)`
4. 點擊 Save
5. 等待約 1–3 分鐘，重新整理頁面後就會看到你的網址！

網站網址格式：`https://你的帳號.github.io`

### 更新網站內容

之後每次修改完程式碼，只要再次執行：

```bash
git add .
git commit -m "修改說明（例如：更新首頁文字）"
git push
```

GitHub Pages 就會自動更新！

---

## 學習路線圖

建議按照以下順序學習，由淺入深：

```
第一週：HTML 基礎
  └─ 打開 index.html 和 about.html 修改文字內容
  └─ 學習 HTML 語意化標籤（header、main、section、footer）

第二週：CSS 基礎
  └─ 修改 css/style.css 中的顏色變數
  └─ 理解 Flexbox 排版（navbar、footer-grid）
  └─ 理解 CSS Grid 排版（gallery-grid、artists-grid）

第三週：響應式設計 (RWD)
  └─ 縮小瀏覽器視窗，觀察漢堡選單出現
  └─ 理解 @media query 的寫法
  └─ 嘗試修改斷點（目前為 768px）

第四週：JavaScript 基礎
  └─ 閱讀 js/artworks.js，理解陣列和物件
  └─ 閱讀 js/main.js，理解事件監聽（addEventListener）
  └─ 閱讀 js/gallery.js，理解 filter / map / forEach

第五週：綜合練習
  └─ 完成下方的 TODO 任務，挑戰自己！

第六週：部署上線
  └─ 完成 GitHub Pages 部署
  └─ 分享你的作品連結！
```

---

## TODO 任務清單

程式碼中標記了三個難度等級的 TODO 任務，找到它們完成練習！

### 入門任務（`// TODO [beginner]`）

- **修改展覽名稱**：在所有 HTML 檔案的 Navbar 和 Footer 把佔位標題換成你自己的展覽名稱
- **修改展覽資訊**：在 `index.html` 的展覽資訊卡片修改日期、地點、票價
- **修改配色**：在 `css/style.css` 最上方的 `:root` 變數區修改 `--color-primary`，觀察整個網站的顏色變化
- **換 Hero 背景圖**：在 `index.html` 找到 `picsum.photos/seed/hero2024` 換成不同的 seed 數字
- **修改創作者介紹**：在 `about.html` 把七位創作者的名字和介紹改成你的親友（或真實資訊）
- **修改聯絡資訊**：在 `contact.html` 更新展館地址和 Email

### 進階任務（`// TODO [intermediate]`）

- **新增作品**：在 `js/artworks.js` 新增第 8、9、10 件作品（複製現有物件並修改）
- **新增篩選分類**：在 `gallery.html` 新增一個篩選按鈕，並在 `artworks.js` 加對應 category 的作品
- **調整 Grid 欄數**：在 `css/gallery.css` 修改 `minmax(280px, 1fr)` 的數字，觀察排版變化
- **新增作品欄位**：在 `artwork.html` 的 `meta-row` 區塊新增「作品尺寸」欄位，並在 `artworks.js` 補上對應資料
- **讀懂 Swiper 設定**：在 `index.html` 的 Swiper 初始化程式碼修改 `delay` 和 `slidesPerView` 的值
- **漢堡選單動畫**：在 `css/style.css` 的 `.hamburger.active` 為三條線加上變成「X」形狀的 CSS 動畫

### 挑戰任務（`// TODO [challenge]`）

- **表單驗證**：在 `contact.html` 的 JS 程式碼讀懂表單驗證邏輯，並新增「字數計數器」，顯示 textarea 已輸入幾個字
- **自動消失訊息**：在聯絡表單送出成功後，讓成功訊息在 5 秒後自動消失（Hint：`setTimeout`）
- **作品切換按鈕**：在 `artwork.html` 新增「上一件」、「下一件」按鈕，讓使用者可以在作品間切換
- **搜尋功能**：在 `gallery.html` 新增一個搜尋框，讓使用者可以用作品名稱或作者名字搜尋
- **深色/淺色模式切換**：新增一個切換按鈕，讓使用者切換深色和淺色主題（Hint：修改 `:root` 變數）
- **了解 Intersection Observer**：在 `js/main.js` 的 `initScrollAnimations` 函式加上 `console.log`，用開發者工具觀察元素進入視窗的時間點

---

## 學習資源

- [MDN Web Docs（中文）](https://developer.mozilla.org/zh-TW/) — 最完整的 HTML、CSS、JS 參考文件
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Flexbox 視覺化說明
- [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) — CSS Grid 完整指南
- [JavaScript.info](https://javascript.info/) — 深入淺出的 JS 教學
- [Swiper.js Demos](https://swiperjs.com/demos) — Swiper 各種效果展示
- [Font Awesome Icons](https://fontawesome.com/icons) — 搜尋你想用的 icon

---

*由 Justin Shih 製作，作為網頁入門教學示範專案*
