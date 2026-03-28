/**
 * gallery.js — 作品展示頁 JavaScript
 *
 * 負責：
 *  1. 把 artworks.js 的資料動態渲染成 HTML 卡片
 *  2. 分類篩選按鈕功能
 *  3. Lightbox 放大圖片（點擊卡片圖片彈出大圖）
 *
 * 學習重點：
 *  - 動態建立 DOM 元素（innerHTML、createElement）
 *  - 陣列的 filter / map / forEach 方法
 *  - URL 參數 (query string) 的應用
 */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery("all");
  initFilterButtons();
  initLightbox();
});

// ─── 1. 渲染作品卡片 ─────────────────────────────────────────────────────────

/**
 * @param {string} category - 篩選分類，"all" 為全部
 */
function renderGallery(category) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  const artworks = filterArtworksByCategory(category); // 來自 artworks.js

  // TODO [intermediate] 目前卡片是全部重新渲染，試著加上過場動畫（hint：先加 class，再移除）
  // TODO [challenge] 實作「排序」功能，讓使用者可以依年份新→舊、舊→新排列

  if (artworks.length === 0) {
    grid.innerHTML = `<p class="no-results">此分類目前沒有作品。</p>`;
    return;
  }

  grid.innerHTML = artworks
    .map(
      (artwork) => `
    <article class="artwork-card reveal" data-id="${artwork.id}">
      <div class="card-image-wrapper">
        <img
          src="${artwork.thumbnail}"
          alt="${artwork.title}"
          class="card-image lightbox-trigger"
          data-full="${artwork.image}"
          data-title="${artwork.title}"
          loading="lazy"
        />
        <span class="card-category">${categoryLabel(artwork.category)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${artwork.title}</h3>
        <p class="card-artist">✦ ${artwork.artist}，${artwork.year}</p>
        <p class="card-medium">${artwork.medium}</p>
        <a href="artwork.html?id=${artwork.id}" class="card-btn">查看作品 →</a>
      </div>
    </article>
  `
    )
    .join("");

  // 重新觀察新渲染的元素
  document
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("visible"));
  initLightboxTriggers();
}

// ─── 2. 分類篩選按鈕 ─────────────────────────────────────────────────────────
function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 移除所有按鈕的 active 狀態
      buttons.forEach((b) => b.classList.remove("active"));
      // 啟用目前按鈕
      btn.classList.add("active");
      // 重新渲染
      const category = btn.dataset.category;
      renderGallery(category);
    });
  });
}

// ─── 3. Lightbox 放大圖片 ─────────────────────────────────────────────────────
function initLightbox() {
  // Lightbox 容器在 gallery.html 裡已寫好，這裡只初始化關閉行為
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  // 點擊背景關閉
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ESC 鍵關閉
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
}

function initLightboxTriggers() {
  // TODO [beginner] 試著修改 lightbox 的背景顏色（在 gallery.css 裡找 #lightbox）
  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", () => {
      const fullSrc = img.dataset.full;
      const title = img.dataset.title;
      openLightbox(fullSrc, title);
    });
  });
}

function openLightbox(src, title) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxTitle.textContent = title;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden"; // 防止背景捲動
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// ─── Helper ──────────────────────────────────────────────────────────────────
function categoryLabel(category) {
  // TODO [beginner] 新增更多分類的中文對應，例如 photography → 攝影
  const labels = {
    painting: "平面",
    sculpture: "立體",
    digital: "數位",
    photography: "攝影",
  };
  return labels[category] || category;
}
