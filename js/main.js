/**
 * main.js — 全站共用 JavaScript
 *
 * 這個檔案負責：
 *  1. 漢堡選單（手機版 navbar 開關）
 *  2. 滾動時 navbar 背景變化效果
 *  3. 滾動動畫（Intersection Observer）
 *
 * 學習重點：
 *  - DOM 查詢與操作（querySelector、classList）
 *  - 事件監聽（addEventListener）
 *  - Intersection Observer API（現代滾動偵測）
 */

// ─── 1. 等 DOM 載入完成後再執行 ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  highlightActiveNavLink();
});

// ─── 2. Navbar 漢堡選單 ──────────────────────────────────────────────────────
function initNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // TODO [beginner] 試著在 style.css 裡修改 .hamburger 的顏色
  // TODO [intermediate] 新增一個「點擊選單外部就關閉」的功能
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    // 點選任一連結後關閉選單（手機版體驗）
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }

  // 滾動時讓 navbar 加上背景
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      // TODO [beginner] 試著修改下面的數字 50，觀察 navbar 何時會變色
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });
}

// ─── 3. 滾動進入視野時的淡入動畫 ────────────────────────────────────────────
function initScrollAnimations() {
  // 所有帶有 .reveal 的元素，都會在進入畫面時加上 .visible
  const elements = document.querySelectorAll(".reveal");

  // TODO [challenge] 試著了解 IntersectionObserver 的運作原理：
  //   它會在元素進入/離開視窗時觸發 callback，不需要持續監聽 scroll 事件，效能更好！
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 動畫只播一次
        }
      });
    },
    { threshold: 0.15 } // 元素露出 15% 時觸發
  );

  elements.forEach((el) => observer.observe(el));
}

// ─── 4. 根據目前頁面，將對應的 navbar 連結標記為 active ─────────────────────
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}
