/**
 * artworks.js — 作品資料庫
 *
 * 這個檔案是整個展覽的「資料中心」，所有作品的資訊都存在這裡。
 * 我們用一個 JavaScript 陣列 (Array) 存放多個物件 (Object)，
 * 每個物件代表一件作品。
 *
 * 學習重點：
 *  - JavaScript 陣列與物件的結構
 *  - 如何用 JS 管理網頁資料（Data Layer 的概念）
 */

// TODO [beginner] 修改下方作品的標題、作者名稱、介紹文字，換成你自己喜歡的內容！
// TODO [intermediate] 新增第 8、9、10 件作品（複製一個物件，修改所有欄位即可）
// TODO [intermediate] 新增一個新的分類 category，例如 "photography"，並在 gallery.html 加上對應的篩選按鈕

const ARTWORKS = [
  {
    id: 1,
    title: "作品一",
    artist: "作者A",
    year: 2023,
    category: "painting",       // 分類：painting / sculpture / digital / photography
    medium: "油畫，畫布",
    description:
      "這是第一件作品的詳細介紹文字。在這裡可以描述作品的創作背景、使用的手法以及想要傳達給觀眾的理念。請學習試著修改這段文字。",
    // picsum.photos 是免費的線上佔位圖服務，數字是圖片的 seed（編號）
    image: "https://picsum.photos/seed/artwork1/800/600",
    thumbnail: "https://picsum.photos/seed/artwork1/400/300",
    featured: true,
  },
  {
    id: 2,
    title: "作品二",
    artist: "作者B",
    year: 2023,
    category: "digital",
    medium: "數位繪圖",
    description:
      "這是第二件作品的詳細介紹文字。描述數位藝術在現代設計上的應用與視覺衝擊。請學習試著修改這段文字。",
    image: "https://picsum.photos/seed/artwork2/800/600",
    thumbnail: "https://picsum.photos/seed/artwork2/400/300",
    featured: true,
  },
  {
    id: 3,
    title: "作品三",
    artist: "作者C",
    year: 2022,
    category: "sculpture",
    medium: "複合媒材",
    description:
      "這是第三件作品的介紹文字。說明如何利用不同的材質拼湊出具有立體感的物件。這段文字可以依照你的設計進行替換。",
    image: "https://picsum.photos/seed/artwork3/800/600",
    thumbnail: "https://picsum.photos/seed/artwork3/400/300",
    featured: false,
  },
  {
    id: 4,
    title: "作品四",
    artist: "作者D",
    year: 2024,
    category: "photography",
    medium: "攝影，數位輸出",
    description:
      "這是第四件作品的介紹文字。紀錄了創作者在日常中所觀察到的特定光影與場景。請依據你的主題自由更改。",
    image: "https://picsum.photos/seed/artwork4/800/600",
    thumbnail: "https://picsum.photos/seed/artwork4/400/300",
    featured: true,
  },
  {
    id: 5,
    title: "作品五",
    artist: "作者E",
    year: 2023,
    category: "painting",
    medium: "水彩，紙",
    description:
      "這是第五件作品的介紹文字。以水彩為媒介呈現輕快而透明的視覺效果。這段文字是用來示範長句子的排版。",
    image: "https://picsum.photos/seed/artwork5/800/600",
    thumbnail: "https://picsum.photos/seed/artwork5/400/300",
    featured: false,
  },
  {
    id: 6,
    title: "作品六",
    artist: "作者F",
    year: 2022,
    category: "sculpture",
    medium: "金屬焊接，鋼鐵",
    description:
      "這是第六件作品的介紹文字。探討金屬材質的堅硬與造型上的柔和該如何取得平衡。文字內容可自由編輯。",
    image: "https://picsum.photos/seed/artwork6/800/600",
    thumbnail: "https://picsum.photos/seed/artwork6/400/300",
    featured: true,
  },
  {
    id: 7,
    title: "作品七",
    artist: "作者G",
    year: 2024,
    category: "digital",
    medium: "生成式藝術，程式碼",
    description:
      "這是第七件作品的介紹文字。展現了如何透過程式碼自動產生各種紋理與圖形。是科技與藝術結合的示範。",
    image: "https://picsum.photos/seed/artwork7/800/600",
    thumbnail: "https://picsum.photos/seed/artwork7/400/300",
    featured: false,
  },
];

// ─── Helper 工具函式 ────────────────────────────────────────────────────────

/**
 * 用 id 找到單件作品
 * @param {number} id - 作品編號
 * @returns {Object|undefined} 作品物件，找不到則回傳 undefined
 */
function getArtworkById(id) {
  // TODO [challenge] 試試看：如果 id 不存在，顯示一個「找不到作品」的錯誤提示
  return ARTWORKS.find((artwork) => artwork.id === id);
}

/**
 * 依照分類篩選作品
 * @param {string} category - 分類名稱，傳入 "all" 則回傳全部
 * @returns {Array} 篩選後的作品陣列
 */
function filterArtworksByCategory(category) {
  if (category === "all") return ARTWORKS;
  // TODO [intermediate] 用 Array.filter() 實作篩選邏輯（目前已完成，試著讀懂它！）
  return ARTWORKS.filter((artwork) => artwork.category === category);
}

/**
 * 取得精選作品（用於首頁輪播）
 * @returns {Array} featured 為 true 的作品
 */
function getFeaturedArtworks() {
  return ARTWORKS.filter((artwork) => artwork.featured === true);
}
