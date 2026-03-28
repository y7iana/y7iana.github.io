# 進階任務（Intermediate）完全指引與解答

這份指引是專為完成專案內 `// TODO [intermediate]` 標籤的任務所設計。你可以依照步驟，一步步完成這些進階功能的開發，加深對 HTML、CSS 與 JavaScript 的理解！

---

## 1. 新增作品資料

**目標**：在 `js/artworks.js` 新增第 8、9、10 件作品（複製現有物件並修改）

**步驟指引**：
1. 打開 `js/artworks.js`。
2. 找到 `const artworks = [ ... ]` 陣列。
3. 滑動到最後一件作品（`id: 7`）的結尾大括號 `}`。
4. 在該大括號後加上逗號 `,`，接著貼上一組新的資料結構。
5. **重要**：必須將 `id` 改為獨一無二的數字（例如 `8`, `9`, `10`），同時也要給予不同圖片。
6. 修改 `title`、`artist`、`image` 等欄位，換成不同的內容。

**參考寫法**：
```javascript
  {
    id: 8,
    title: '攝影的瞬間',
    artist: '王小明',
    year: '2024',
    medium: '數位攝影',
    category: 'photography', // 這是我們準備新增的分類
    image: 'https://picsum.photos/seed/art8/800/800',
    description: '捕捉城市夜晚光影變化的攝影作品。'
  }
```

---

## 2. 新增篩選分類

**目標**：在 `gallery.html` 新增一個篩選按鈕，並在 `artworks.js` 加對應 `category` 的作品

**步驟指引**：
1. **加入按鈕**：打開 `gallery.html`，尋找 `<div class="filter-group">`（約在第 47~49 行左右）。
2. 在現有按鈕最下方新增一個按鈕，並標記 `data-filter="photography"`：
   ```html
   <button class="filter-btn" data-filter="photography">攝影</button>
   ```
3. **對應資料**：打開 `js/artworks.js`，確認你新增的作品中有至少一件的 `category` 是設定為 `'photography'`。
4. **測試**：回到瀏覽器打開 `gallery.html`（或透過 Live Server），點擊「攝影」標籤，系統就會自動篩選出這項分類的作品囉！

---

## 3. 調整 Grid 欄數

**目標**：在 `css/gallery.css` 修改 `minmax(280px, 1fr)` 的數字，觀察排版變化。

**步驟指引**：
1. 打開 `css/gallery.css`。
2. 尋找 `.gallery-grid` 的排版設定（約在第 50 行左右）。
3. 找到我們用於產生網格的一行語法：`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));`。
4. **實驗看看**：
   - 把它改成 `minmax(150px, 1fr)`：你會發現每張卡片的最小寬度變窄了，因此同一列可以「塞得下」更多卡片！
   - 把它改成 `minmax(400px, 1fr)`：卡片變得很寬，一列可能只剩下 1 到 2 張卡片。
5. 觀察過後，將其調整回 `280px` 或你自己覺得最好看的數值。

> [!NOTE]
> 這個 `repeat(auto-fill, minmax(...))` 是 CSS Grid 實作**不依賴 Media Query（@media）也能做到自動換行響應式排版**的超級黑魔法！

---

## 4. 新增作品欄位（如：作品尺寸）

**目標**：在 `artwork.html` 的 `meta-row` 區塊新增欄位，並在 `artworks.js` 補上對應資料。

**步驟指引**：
1. **補上資料**：打開 `js/artworks.js`，在你想要測試的作品的物件內，補上：
   `size: '120 x 80 cm',`
2. **在視圖模板加上欄位**：打開 `artwork.html`。
3. 向下捲動到檔案的 `<script>` 標籤，找到 `container.innerHTML = ...` 後用來渲染畫面的字串結構（大約在 117 行之後的程式碼區塊）。
4. 尋找裡面 `<div class="artwork-meta">` 區塊。
5. 仿造現有的 `<div class="meta-row">`，新增一組 HTML（並透過 JavaScript 的 `${}` 將變數嵌入）：
   ```html
   <div class="meta-row">
     <span class="meta-label">尺寸</span>
     <!-- 如果沒填寫尺寸，就顯示 '尺寸未提供' -->
     <span class="meta-value">${artwork.size || '尺寸未提供'}</span>
   </div>
   ```

---

## 5. 讀懂 Swiper 設定

**目標**：在 `index.html` 的 Swiper 初始化程式碼修改 `delay` 和 `slidesPerView` 的值。

**步驟指引**：
1. 打開 `index.html`。
2. 滑動到最下方的 `<script>` 區塊，找到 `new Swiper('.swiper', { ... })` 這段設定（約在第 290 行）。
3. **改速度**：找到設定參數 `autoplay: { delay: 3000, ... }`。
   - `3000` 代表 3000 毫秒（也就是 3 秒）切換一次。
   - 試著把它改成 `1000`（1 秒）看看輪播會不會變快！
4. **改顯示數量**：找到 `breakpoints` 裡面的 `slidesPerView` 屬性。
   - 它是用來設定「在不同螢幕寬度下，一次同時顯示幾張投影片」。
   - 試著把 `1024:` 也就是桌機版的解析度底下，把 `slidesPerView: 3` 調整成 `4`。你會發現畫面上變成一次擠入 4 張作品。

---

## 6. 漢堡選單動畫 (變形為 X 形狀)

**目標**：在 `css/style.css` 的 `.hamburger.active` 為三條線加上變成「X」形狀的 CSS 動畫。

**步驟指引**：
1. 打開 `css/style.css`。
2. 尋找 `/* TODO [intermediate] 試著為 .hamburger.active 加上「X」形狀的動畫 */`（約在第 278 行）。
3. 在上方，漢堡選單的按鈕有三個 `<span>` 被畫成三條橫線。當它觸發 `active` 樣式時，我們會利用 CSS `transform` 讓中間的線消失，並將上下兩條線旋轉 `45` 度交疊在一起。
4. 在 `.hamburger.active span` 區域貼上以下這三段 CSS：
   ```css
   /* 第 1 條線：往下移動並順時針旋轉 45 度 */
   .hamburger.active span:nth-child(1) {
     transform: translateY(8px) rotate(45deg);
   }

   /* 第 2 條線：讓他透明度變成 0 (隱藏) */
   .hamburger.active span:nth-child(2) {
     opacity: 0;
   }

   /* 第 3 條線：往上移動並逆時針旋轉 45 度 */
   .hamburger.active span:nth-child(3) {
     transform: translateY(-8px) rotate(-45deg);
   }
   ```
   *(注意：因為各瀏覽器間距可能有些不同，如果你的兩條線的中心沒有疊到底，可以微調 `translateY` 裡面的數值，嘗試改成 `8px` 到 `10px` 或 `6px` 之間尋找最佳體驗)*
5. **測試**：縮小瀏覽器寬度觸發手機版或透過開發者工具切換，點擊出現的漢堡選單，完美！
