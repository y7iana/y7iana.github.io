# 全部任務完全指引（Beginner → Intermediate → Challenge）

這份指引涵蓋專案中 **所有三個難度** 的 TODO 任務，每個任務都有詳細的步驟說明與參考範例。

---

# 入門任務（Beginner）

---

## B-1. 修改展覽名稱（所有 HTML 的 Navbar 與 Footer）

**目標檔案**：`index.html`、`gallery.html`、`artwork.html`、`about.html`、`contact.html`

**步驟**：
1. 在每個 HTML 檔案中，用編輯器的「取代全部」功能（Ctrl+H 或 Cmd+H）。
2. 搜尋：`畢業展標題`，替換成你自己的展覽名稱（例如 `星光設計展`）。
3. 搜尋：`© 2024 畢業展標題`，替換成你的展覽名稱及年份。
4. 儲存所有檔案，用瀏覽器打開確認每頁 Navbar Logo 與 Footer 都更新了。

> **小提示**：VS Code 可以用「在資料夾中取代」（Ctrl+Shift+H）一次替換所有檔案！

---

## B-2. 修改展覽資訊卡片（日期、地點、票價）

**目標檔案**：`index.html`（第 258–280 行）

**步驟**：
1. 打開 `index.html`，找到 `<!-- TODO [beginner] 修改展覽的日期、地點、票價 -->` 這行注記。
2. 往下找到 `.info-cards` 內的四個 `<div class="info-card">` 區塊。
3. 修改各卡片內的 `<p>` 文字：

```html
<!-- 展出期間 -->
<p>2024.06.01 – 06.30</p>

<!-- 展出地點 -->
<p>台北市設計中心 1F 大廳</p>

<!-- 入場票價 -->
<p>一般票 $150</p>

<!-- 開放時間 -->
<p>週三～週日 11:00–19:00</p>
```

---

## B-3. 修改網站主色調（CSS 變數）

**目標檔案**：`css/style.css`（最上方 `:root` 區塊）

**步驟**：
1. 打開 `css/style.css`，找到最上方的 `:root { ... }` 區塊。
2. 找到 `--color-primary` 這個變數，把它的值改成你喜歡的顏色：

```css
:root {
  --color-primary: #e07b39;   /* 換成橘紅色 */
}
```

3. 儲存後重新整理瀏覽器，你會發現 Navbar Logo 顏色、按鈕、icon 顏色都同步改變了！

> **可以試試的顏色**：
> - 藍色：`#3b82f6`
> - 紫色：`#8b5cf6`
> - 玫瑰色：`#f43f5e`

---

## B-4. 換 Hero 背景圖

**目標檔案**：`index.html`（第 44–46 行）

**步驟**：
1. 打開 `index.html`，找到 `.hero-bg` 的 CSS 區塊（約在第 40 行）。
2. 找到這一行：
   ```
   url('https://picsum.photos/seed/hero2024/1600/900')
   ```
3. 把 `hero2024` 換成任意其他字串，例如：
   ```
   url('https://picsum.photos/seed/myexhibition/1600/900')
   ```
4. 不同的 seed 字串會產生不同的隨機圖片。多試幾個，找到你最喜歡的！

---

## B-5. 修改創作者介紹

**目標檔案**：`about.html`

**步驟**：
1. 打開 `about.html`，找到作者列表區塊（搜尋 `artist-card` 或 `artists-grid`）。
2. 每個作品的 `<div class="artist-card">` 區塊包含：
   - 圖片 `<img>`
   - 名字 `<h3>`
   - 介紹文字 `<p>`
3. 把現有的「作者A」、「作者B」等佔位文字，更換成你或你朋友的真實名字與介紹。
4. 圖片一樣可以換 picsum.photos 的 seed，例如：
   ```html
   <img src="https://picsum.photos/seed/artist-alice/400/400" alt="Alice" />
   ```

---

## B-6. 修改聯絡資訊

**目標檔案**：`contact.html`（第 197–234 行）

**步驟**：
1. 打開 `contact.html`，找到 `<!-- TODO [beginner] 修改以下的聯絡資訊 -->` 這行。
2. 修改各 `<div class="contact-detail">` 裡的文字：

```html
<!-- 展館地址 -->
<p>台北市大安區設計路 100 號 3 樓</p>

<!-- Email -->
<p><a href="mailto:myshow@example.com">myshow@example.com</a></p>

<!-- Instagram -->
<p><a href="#">@myshow2024</a></p>
```

3. 同樣記得更新 `index.html` 和其他頁面 Footer 裡的 Email 與 Instagram 連結。

---

## B-7. 修改 label 字型大小與顏色（contact.html CSS）

**目標檔案**：`contact.html`（第 82–88 行的 `<style>` 區塊）

**步驟**：
1. 打開 `contact.html`，在頁面頂部的 `<style>` 區塊找到：
   ```css
   /* TODO [beginner] 修改 label 的字型大小和顏色 */
   .form-group label {
     font-size: 0.85rem;
     color: var(--color-text-muted);
   }
   ```
2. 試著修改這兩個數值，例如：
   ```css
   .form-group label {
     font-size: 1rem;          /* 變大一點 */
     color: var(--color-primary); /* 改成主色 */
     font-weight: 600;         /* 加粗 */
   }
   ```

---

## B-8. 修改輸入框 focus 效果

**目標檔案**：`contact.html`（第 105–110 行的 `<style>` 區塊）

**步驟**：
1. 找到以下 CSS：
   ```css
   /* TODO [beginner] 當使用者點選輸入框時，border 顏色改變（:focus 效果） */
   .form-group input:focus,
   .form-group select:focus,
   .form-group textarea:focus {
     border-color: var(--color-primary);
   }
   ```
2. 試著加上更多效果，例如外發光：
   ```css
   .form-group input:focus {
     border-color: var(--color-primary);
     box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.2); /* 外發光 */
   }
   ```

---

## B-9. 修改作品資料（標題、作者、介紹）

**目標檔案**：`js/artworks.js`（第 13 行 TODO）

**步驟**：
1. 打開 `js/artworks.js`。
2. 在 `const ARTWORKS = [ ... ]` 陣列中，找到任意一件作品，例如：
   ```javascript
   {
     id: 1,
     title: "作品一",       // ← 改成你的作品名稱
     artist: "作者A",       // ← 改成你的名字
     year: 2023,
     description: "這是第一件作品的詳細介紹文字…"  // ← 換成你的創作說明
   }
   ```
3. 把 `title`、`artist`、`description` 換成你自己的內容。
4. 存檔後重新整理 `gallery.html` 確認卡片內容已更新。

---

## B-10. 修改 Navbar 漢堡選單顏色

**目標檔案**：`css/style.css`（搜尋 `.hamburger`）

**步驟**：
1. 打開 `css/style.css`，搜尋 `.hamburger`，找到它的樣式（約在 270 行附近）。
2. 找到裡面 `span` 的背景色設定，例如：
   ```css
   .hamburger span {
     background: var(--color-text); /* ← 改這裡 */
   }
   ```
3. 試著改成主色或其他顏色：
   ```css
   .hamburger span {
     background: var(--color-primary);
   }
   ```

---

## B-11. 觀察 Navbar 捲動變色的觸發點

**目標檔案**：`js/main.js`（第 48–50 行）

**步驟**：
1. 打開 `js/main.js`，找到：
   ```javascript
   // TODO [beginner] 試著修改下面的數字 50，觀察 navbar 何時會變色
   navbar.classList.toggle("scrolled", window.scrollY > 50);
   ```
2. 把 `50` 改成其他數字，例如 `200`，觀察需要捲動更多才會讓 navbar 變色。
3. 改成 `0` 的話，navbar 一開始就是深色狀態。

---

## B-12. Lightbox 背景顏色

**目標檔案**：`css/gallery.css`（搜尋 `#lightbox`）

**步驟**：
1. 打開 `css/gallery.css`，搜尋 `#lightbox`。
2. 找到它的 CSS 樣式，通常會有：
   ```css
   #lightbox {
     background: rgba(0, 0, 0, 0.9);  /* ← 修改這裡的透明度或顏色 */
   }
   ```
3. 試著改成半透明藍色：
   ```css
   background: rgba(10, 10, 40, 0.95);
   ```

---

## B-13. Lightbox 分類中文對應

**目標檔案**：`js/gallery.js`（第 141–148 行）

**步驟**：
1. 打開 `js/gallery.js`，找到 `categoryLabel` 函式：
   ```javascript
   // TODO [beginner] 新增更多分類的中文對應
   const labels = {
     painting: "平面",
     sculpture: "立體",
     digital: "數位",
     photography: "攝影",
   };
   ```
2. 如果你新增了新的分類，照同樣格式加在這裡，例如：
   ```javascript
   const labels = {
     painting: "平面",
     sculpture: "立體",
     digital: "數位",
     photography: "攝影",
     video: "影像",        // 新增
     installation: "裝置", // 新增
   };
   ```

---

# 進階任務（Intermediate）

---

## I-1. 新增作品資料（第 8、9、10 件）

**目標檔案**：`js/artworks.js`

**步驟**：
1. 打開 `js/artworks.js`，滾動到 `const ARTWORKS = [...]` 陣列的最後一件作品 `id: 7` 結尾的 `}` 後面。
2. 在那個 `}` 後面加上逗號 `,`，接著貼上新的作品物件：

```javascript
  {
    id: 8,
    title: "攝影的瞬間",
    artist: "王小明",
    year: 2024,
    category: "photography",
    medium: "數位攝影",
    description: "捕捉城市夜晚光影變化的攝影作品，紀錄了都市人在忙碌生活縫隙中的片刻靜謐。",
    image: "https://picsum.photos/seed/art8/800/600",
    thumbnail: "https://picsum.photos/seed/art8/400/300",
    featured: false,
  },
  {
    id: 9,
    title: "流動的邊界",
    artist: "林雨柔",
    year: 2024,
    category: "digital",
    medium: "生成式數位藝術",
    description: "探索數位與現實邊界的互動裝置作品，觀眾的移動會即時影響畫面的生成。",
    image: "https://picsum.photos/seed/art9/800/600",
    thumbnail: "https://picsum.photos/seed/art9/400/300",
    featured: true,
  },
  {
    id: 10,
    title: "根",
    artist: "陳柏宏",
    year: 2023,
    category: "sculpture",
    medium: "木材、樹脂",
    description: "以樹根形態為靈感，探討生命力與土地連結的複合媒材立體創作。",
    image: "https://picsum.photos/seed/art10/800/600",
    thumbnail: "https://picsum.photos/seed/art10/400/300",
    featured: false,
  }
```

3. **注意**：確認 `id` 不重複，且整個陣列的括號 `[]` 和大括號 `{}` 數量對應正確。
4. 存檔後打開 `gallery.html`，你應該會看到作品卡片從 7 張增加到 10 張。

---

## I-2. 新增篩選分類按鈕

**分兩個地方修改**：

### 步驟 A：在 `gallery.html` 加入新的篩選按鈕

1. 打開 `gallery.html`，搜尋 `<div class="filter-group">` 或 `filter-btn`。
2. 找到現有的按鈕群組，例如：
   ```html
   <div class="filter-group">
     <button class="filter-btn active" data-category="all">全部</button>
     <button class="filter-btn" data-category="painting">平面</button>
     <button class="filter-btn" data-category="sculpture">立體</button>
     <button class="filter-btn" data-category="digital">數位</button>
     <button class="filter-btn" data-category="photography">攝影</button>
   </div>
   ```
3. 在最後加上你的新按鈕（注意：`data-category` 的值要和 `artworks.js` 裡的 `category` 字串**完全一致**）：
   ```html
   <button class="filter-btn" data-category="video">影像</button>
   ```

### 步驟 B：在 `artworks.js` 確保有對應分類的作品

1. 打開 `js/artworks.js`，確認你的作品中有 `category: "video"` 的項目。
2. 如果沒有，參考 I-1 的格式新增一件作品並設定對應 category。

### 步驟 C：在 `gallery.js` 加上中文對應

1. 打開 `js/gallery.js`，找到 `categoryLabel` 函式，加上新分類的對應：
   ```javascript
   const labels = {
     painting: "平面",
     sculpture: "立體",
     digital: "數位",
     photography: "攝影",
     video: "影像",  // ← 新增這行
   };
   ```

---

## I-3. 調整 Grid 欄數

**目標檔案**：`css/gallery.css`

**步驟**：
1. 打開 `css/gallery.css`，搜尋 `.gallery-grid`。
2. 找到這一行：
   ```css
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   ```
3. 修改 `280px` 這個最小寬度：
   - `minmax(150px, 1fr)` → 最小更窄，一列可放更多卡片
   - `minmax(400px, 1fr)` → 最小更寬，一列只剩 1–2 張
4. 觀察完效果後，調整成你覺得最好看的數值。

> **原理說明**：`auto-fill` 讓瀏覽器自動計算「這一列能放幾個最小寬度的格子」，不需要手動寫 @media query，就能做到響應式排版！

---

## I-4. 新增作品欄位（作品尺寸）

**分兩個地方修改**：

### 步驟 A：在 `artworks.js` 補上資料

1. 打開 `js/artworks.js`，在你想顯示尺寸的作品物件內加上 `size` 欄位：
   ```javascript
   {
     id: 1,
     title: "作品一",
     artist: "作者A",
     year: 2023,
     size: "120 x 80 cm",   // ← 新增這行
     ...
   }
   ```

### 步驟 B：在 `artwork.html` 的模板中加上欄位

1. 打開 `artwork.html`，搜尋 `<div class="artwork-meta">`（約在第 141 行）。
2. 找到現有的 `meta-row` 區塊，仿造格式新增一組（在 `<!-- TODO -->` 行的位置）：
   ```html
   <div class="meta-row">
     <span class="meta-label">尺寸</span>
     <!-- 若沒有 size 欄位，顯示「尺寸未提供」 -->
     <span class="meta-value">${artwork.size || '尺寸未提供'}</span>
   </div>
   ```
3. **注意**：這段 HTML 在 `container.innerHTML = \`...\`` 的模板字串內，要用反引號包住，`${}` 語法才有效。

---

## I-5. 讀懂並修改 Swiper 設定

**目標檔案**：`index.html`（第 390–401 行）

**步驟**：
1. 打開 `index.html`，找到 `new Swiper(".mySwiper", { ... })` 這段程式碼。
2. **修改自動播放速度**：找到 `autoplay: { delay: 4000, ... }` 的數字，試著改成 `1500`（1.5 秒換一張）：
   ```javascript
   autoplay: { delay: 1500, disableOnInteraction: false },
   ```
3. **修改同時顯示張數**：找到 `breakpoints` 區塊，改變桌機版（`1024` 的設定）：
   ```javascript
   breakpoints: {
     640: { slidesPerView: 2 },
     1024: { slidesPerView: 4 }, // 改成 4 張
   },
   ```
4. **試著加上 effect**（選用）：在設定物件最外層加上：
   ```javascript
   effect: "coverflow",
   coverflowEffect: {
     rotate: 30,
     slideShadows: false,
   },
   ```

---

## I-6. 漢堡選單變形為 X 動畫

**目標檔案**：`css/style.css`

**步驟**：
1. 打開 `css/style.css`，搜尋 `TODO [intermediate]` 或搜尋 `.hamburger.active`，找到約 278 行附近的位置。
2. 在那個位置**新增**以下三段 CSS（可以直接貼在 TODO 注記下方）：

```css
/* 第 1 條線：往下平移並順時針旋轉 45 度 */
.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

/* 第 2 條線：淡出消失 */
.hamburger.active span:nth-child(2) {
  opacity: 0;
}

/* 第 3 條線：往上平移並逆時針旋轉 45 度 */
.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
```

3. **確認有 transition**：找到 `.hamburger span` 的樣式，確認它有：
   ```css
   .hamburger span {
     transition: transform 0.3s ease, opacity 0.3s ease;
   }
   ```
   如果沒有，自己加上這行，動畫才會平滑。
4. **測試**：縮小瀏覽器到手機寬度，點擊漢堡選單，三條線應該會平滑變成 X。

---

## I-7. 點擊選單外部就關閉（Navbar）

**目標檔案**：`js/main.js`（第 28–42 行）

**步驟**：
在 `initNavbar()` 函式的 `if (hamburger && navLinks) { ... }` 區塊**裡面**，加上以下程式碼（緊接在現有的 `hamburger.addEventListener` 之後）：

```javascript
// 點擊選單外部時關閉
document.addEventListener("click", (e) => {
  // 如果點擊的目標不是 hamburger 也不是 navLinks 裡面的元素
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
  }
});
```

> **原理**：`contains()` 方法可以判斷一個 DOM 元素是否「包含」另一個元素。如果點擊的地方既不在漢堡按鈕內，也不在選單內，就觸發關閉。

---

## I-8. 讀懂 Email Regex 驗證

**目標檔案**：`contact.html`（第 356–357 行）

**步驟**：
1. 找到這段程式碼：
   ```javascript
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   ```
2. **逐段拆解**這個正規表達式：
   - `^` → 字串的開頭
   - `[^\s@]+` → 一個以上的字元，且這些字元不能是空白或 `@`
   - `@` → 中間一定要有一個 `@`
   - `[^\s@]+` → `@` 後面也要有非空白、非 `@` 的字元（domain 名稱）
   - `\.` → 一個真實的 `.` 點（要加反斜線，因為 `.` 在 regex 有特殊意義）
   - `[^\s@]+` → 最後是副域名（例如 `com`、`tw`）
   - `$` → 字串的結尾
3. 在瀏覽器開發者工具的 Console（F12）輸入以下測試：
   ```javascript
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   console.log(emailRegex.test("test@example.com")); // true
   console.log(emailRegex.test("not-an-email"));     // false
   ```

---

## I-9. 用 console.log 觀察 URLSearchParams

**目標檔案**：`artwork.html`（第 82–84 行）

**步驟**：
1. 打開 `artwork.html`，找到以下程式碼：
   ```javascript
   // TODO [intermediate] 試著用 console.log(params) 看看 URLSearchParams 的輸出
   const params = new URLSearchParams(window.location.search);
   const id = parseInt(params.get('id'));
   ```
2. 在 `const id = ...` 之前加上一行：
   ```javascript
   console.log("URL 參數物件:", params);
   console.log("取得的 id 字串:", params.get('id'));
   console.log("轉成數字:", id);
   ```
3. 打開瀏覽器的開發者工具（F12），切換到 Console 分頁，再打開 `artwork.html?id=1`，你會看到這些輸出值。

---

## I-10. 讀懂 Array.filter() 篩選邏輯

**目標檔案**：`js/artworks.js`（第 129–133 行）

**步驟**：
1. 找到以下函式：
   ```javascript
   function filterArtworksByCategory(category) {
     if (category === "all") return ARTWORKS;
     // TODO [intermediate] 用 Array.filter() 實作篩選邏輯（目前已完成，試著讀懂它！）
     return ARTWORKS.filter((artwork) => artwork.category === category);
   }
   ```
2. **理解運作方式**：
   - `ARTWORKS.filter(...)` 會走過陣列的每一件作品
   - `(artwork) => artwork.category === category` 是箭頭函式，對每件作品回傳 `true` 或 `false`
   - 只有回傳 `true` 的作品，才會被保留在新陣列中
3. 在 `return ARTWORKS.filter(...)` 前面加上：
   ```javascript
   console.log("篩選分類：", category);
   const result = ARTWORKS.filter((artwork) => artwork.category === category);
   console.log("篩選結果：", result);
   return result;
   ```
4. 打開 `gallery.html` 點擊不同分類，在 Console 觀察每次篩選的輸出。

---

## I-11. 新增作品 tags 陣列並動態渲染

**目標檔案**：`js/artworks.js` + `artwork.html`（第 165 行）

**步驟 A：在作品物件加上 tags**
```javascript
{
  id: 1,
  title: "作品一",
  ...
  tags: ["溫暖", "色彩", "油畫"],  // ← 新增這行
}
```

**步驟 B：在 artwork.html 動態渲染 tags**

找到第 165 行的 `<!-- TODO [intermediate] -->` 這行，在上方已有的 `<span class="tag">` 之後加入：
```html
${(artwork.tags || []).map(tag => `<span class="tag">#${tag}</span>`).join('')}
```

---

# 挑戰任務（Challenge）

---

## C-1. 表單字數計數器

**目標**：在 `contact.html` 的 textarea 下方顯示「已輸入 X 字 / 最少 10 字」。

**目標檔案**：`contact.html`

**步驟**：

### 步驟 A：在 HTML 加上計數器顯示元素

找到 `<textarea id="message" ...>` 的下方（第 276 行的 `.error-msg` 之前），加上：
```html
<p id="char-counter" style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.3rem;">
  已輸入 0 字（最少需要 10 字）
</p>
```

### 步驟 B：在 `<script>` 中加上監聽邏輯

在 `document.getElementById('contact-form').addEventListener(...)` 之前加上：
```javascript
// 字數計數器
const messageArea = document.getElementById('message');
const charCounter = document.getElementById('char-counter');

messageArea.addEventListener('input', () => {
  const count = messageArea.value.trim().length;
  charCounter.textContent = `已輸入 ${count} 字（最少需要 10 字）`;

  // 字數不足時變紅色提示
  if (count < 10) {
    charCounter.style.color = '#e55';
  } else {
    charCounter.style.color = 'var(--color-primary)';
  }
});
```

---

## C-2. 送出成功訊息自動消失（setTimeout）

**目標檔案**：`contact.html`（第 382 行）

**步驟**：

找到以下程式碼：
```javascript
if (isValid) {
  document.getElementById('success-msg').classList.add('show');
  this.reset();
  // TODO [challenge] 試著用 setTimeout 讓成功訊息在 5 秒後自動消失
}
```

在 `this.reset();` 之後加上：
```javascript
// 5 秒後自動隱藏成功訊息
setTimeout(() => {
  document.getElementById('success-msg').classList.remove('show');
}, 5000); // 5000 毫秒 = 5 秒
```

> **原理**：`setTimeout(函式, 毫秒數)` 會在指定時間後執行一次函式。把 5000 改成 2000 就是 2 秒。

---

## C-3. 上一件 / 下一件作品按鈕

**目標檔案**：`artwork.html`

**步驟**：

### 步驟 A：找出目前 id 的位置並計算上一件 / 下一件

在 `artwork.html` 的 `<script>` 裡，在 `const artwork = getArtworkById(id);` 之後加上：
```javascript
// 找出目前作品在陣列中的索引
const currentIndex = ARTWORKS.findIndex(a => a.id === id);
const prevArtwork = ARTWORKS[currentIndex - 1] || null;
const nextArtwork = ARTWORKS[currentIndex + 1] || null;
```

### 步驟 B：在 HTML 模板的「導覽按鈕」區塊加上連結

找到 `<div class="artwork-nav-links">` 區塊（約第 169 行），把裡面的內容替換成：
```html
<div class="artwork-nav-links" style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
  ${prevArtwork
    ? `<a href="artwork.html?id=${prevArtwork.id}" class="btn btn-outline">← ${prevArtwork.title}</a>`
    : `<span style="color: var(--color-text-muted);">← 已是第一件</span>`
  }
  <a href="gallery.html" class="btn btn-outline">回到列表</a>
  ${nextArtwork
    ? `<a href="artwork.html?id=${nextArtwork.id}" class="btn btn-primary">${nextArtwork.title} →</a>`
    : `<span style="color: var(--color-text-muted);">已是最後一件 →</span>`
  }
</div>
```

---

## C-4. 作品搜尋功能

**目標檔案**：`gallery.html` + `js/gallery.js`

### 步驟 A：在 `gallery.html` 加入搜尋框

在 `<div class="filter-group">` 篩選按鈕的上方或下方，加入：
```html
<div style="margin-bottom: 1rem;">
  <input
    type="text"
    id="search-input"
    placeholder="搜尋作品名稱或作者…"
    style="padding: 0.6rem 1rem; border: 1px solid var(--color-border);
           border-radius: var(--radius-sm); background: var(--color-bg);
           color: var(--color-text); font-size: 0.95rem; width: 100%; max-width: 400px;"
  />
</div>
```

### 步驟 B：在 `gallery.js` 加上搜尋監聽

在 `document.addEventListener("DOMContentLoaded", () => { ... })` 裡，`initFilterButtons()` 之後加上：
```javascript
// 搜尋功能
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const grid = document.getElementById('gallery-grid');

    // 篩選出符合關鍵字的作品
    const results = ARTWORKS.filter(artwork =>
      artwork.title.toLowerCase().includes(keyword) ||
      artwork.artist.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
      grid.innerHTML = `<p class="no-results">找不到符合「${searchInput.value}」的作品。</p>`;
      return;
    }

    // 渲染結果（借用 renderGallery 的邏輯）
    grid.innerHTML = results.map(artwork => `
      <article class="artwork-card reveal" data-id="${artwork.id}">
        <div class="card-image-wrapper">
          <img src="${artwork.thumbnail}" alt="${artwork.title}"
               class="card-image lightbox-trigger"
               data-full="${artwork.image}" data-title="${artwork.title}" loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="card-title">${artwork.title}</h3>
          <p class="card-artist">${artwork.artist}，${artwork.year}</p>
          <a href="artwork.html?id=${artwork.id}" class="card-btn">查看作品 →</a>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    initLightboxTriggers();
  });
}
```

---

## C-5. 深色 / 淺色模式切換

**目標**：讓使用者點擊按鈕切換整站主題。

### 步驟 A：在 Navbar 加上切換按鈕

在 `index.html`（以及其他頁面）的 Navbar `<div class="navbar-inner">` 最後，加入按鈕：
```html
<button id="theme-toggle" title="切換主題" style="background: none; border: none;
  color: var(--color-text); font-size: 1.2rem; cursor: pointer; padding: 0.4rem;">
  <i class="fa-solid fa-moon"></i>
</button>
```

### 步驟 B：在 `css/style.css` 加上淺色主題變數

在 `:root` 區塊之後加上：
```css
body.light-mode {
  --color-bg: #f5f5f0;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #666666;
  --color-border: #e0e0e0;
}
```

### 步驟 C：在 `js/main.js` 加上切換邏輯

在 `initNavbar()` 函式之後加上：
```javascript
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // 讀取上次的設定
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    btn.innerHTML = isLight
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    // 記住使用者的選擇
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
```

並在 `DOMContentLoaded` 的呼叫區塊中加上 `initThemeToggle();`。

---

## C-6. 了解 IntersectionObserver 運作原理

**目標檔案**：`js/main.js`（第 55–73 行）

**步驟**：
1. 打開 `js/main.js`，找到 `function initScrollAnimations()` 函式。
2. 在 `entries.forEach((entry) => {` 裡面加入 `console.log`：
   ```javascript
   entries.forEach((entry) => {
     // 新增這行：觀察每次觸發時的詳細資訊
     console.log("元素進入畫面：", entry.target, "IsIntersecting:", entry.isIntersecting);

     if (entry.isIntersecting) {
       entry.target.classList.add("visible");
       observer.unobserve(entry.target);
     }
   });
   ```
3. 打開 `index.html`，打開開發者工具 Console（F12）。
4. 慢慢往下捲動，觀察 Console 的輸出：
   - `IsIntersecting: true` 代表元素進入了視窗
   - 可以看到每個 `.reveal` 元素依序觸發

---

## C-7. 作品卡片過場動畫

**目標檔案**：`css/gallery.css` + `js/gallery.js`（第 32 行）

### 步驟 A：在 CSS 加上淡入動畫

在 `css/gallery.css` 加上：
```css
.artwork-card {
  opacity: 1;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.artwork-card.fade-out {
  opacity: 0;
  transform: translateY(10px);
}
```

### 步驟 B：在 gallery.js 的 renderGallery 加上動畫邏輯

找到 `function renderGallery(category)` 函式，在 `grid.innerHTML = ...` 之前加上：
```javascript
// 先讓現有卡片淡出
const existingCards = grid.querySelectorAll('.artwork-card');
existingCards.forEach(card => card.classList.add('fade-out'));

// 等待動畫結束後才重新渲染
setTimeout(() => {
  // 原本的 grid.innerHTML = artworks.map(...).join(''); 放在這裡
}, 400); // 與 CSS transition 時間一致
```

---

## C-8. 了解 getArtworkById 並加入找不到的錯誤提示

**目標檔案**：`js/artworks.js`（第 119–122 行）

**步驟**：

目前的程式碼：
```javascript
function getArtworkById(id) {
  // TODO [challenge] 試試看：如果 id 不存在，顯示一個「找不到作品」的錯誤提示
  return ARTWORKS.find((artwork) => artwork.id === id);
}
```

`artwork.html` 已經在取得的值為 `undefined` 時顯示錯誤訊息，所以這個 TODO 的重點是**在函式內加上 console 警告**：
```javascript
function getArtworkById(id) {
  const found = ARTWORKS.find((artwork) => artwork.id === id);
  if (!found) {
    console.warn(`找不到 id 為 ${id} 的作品！請確認 artworks.js 中是否有對應資料。`);
  }
  return found;
}
```

---

## C-9. 閱讀 Swiper 官方文件，加上更多效果

**目標檔案**：`index.html`（第 390 行）

**步驟**：
1. 前往 [swiperjs.com/demos](https://swiperjs.com/demos)，瀏覽各種效果的展示。
2. 試著在 Swiper 設定中加上以下效果：

**效果一：滑鼠拖曳功能**
```javascript
grabCursor: true, // 滑鼠移到上面會變成手型游標
```

**效果二：鍵盤方向鍵切換**
```javascript
keyboard: { enabled: true },
```

**效果三：轉盤式 coverflow 效果**
```javascript
effect: "coverflow",
coverflowEffect: {
  rotate: 30,
  stretch: 0,
  depth: 100,
  slideShadows: true,
},
```

> **注意**：`effect: "coverflow"` 和 `slidesPerView` 超過 1 搭配時效果可能需要調整。

---

*文件由 Antigravity 整理，涵蓋 Beginner、Intermediate、Challenge 三個難度共 26 個任務的完整步驟。*
