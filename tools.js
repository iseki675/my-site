/* ===========================
   ProGram — tools.js
   開発ツール入門ページ用スクリプト
   =========================== */

// ===========================
// スクロール進捗バー
// ===========================
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

// ===========================
// ページ切り替え
// ===========================
const PAGE_ORDER = ['vscode', 'terminal', 'cmd', 'powershell', 'comparison'];

function showPage(pageId) {
  // すべてのページを非表示
  document.querySelectorAll('.page').forEach(p => {
    p.dataset.active = 'false';
    p.style.display = 'none';
  });

  // 対象ページを表示
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.style.display = 'block';
    // アニメーションのため少し遅延
    requestAnimationFrame(() => {
      target.dataset.active = 'true';
    });
    // ページトップへスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // サイドバーのアクティブ状態を更新
  document.querySelectorAll('.sidebar-item').forEach(item => {
    const isActive = item.dataset.page === pageId;
    item.classList.toggle('active', isActive);
  });

  // モバイル：サイドバーを閉じる
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('drawer-overlay');
  if (sidebar && window.innerWidth <= 860) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // URLハッシュを更新（ブラウザ履歴に残す）
  history.pushState({ page: pageId }, '', '#' + pageId);
}

function initSidebarNav() {
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      showPage(item.dataset.page);
    });
  });
}

// ===========================
// ページ内ナビゲーションボタン（前へ・次へ）
// ===========================
function initPageNavButtons() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.page-nav-btn[data-goto]');
    if (!btn) return;
    showPage(btn.dataset.goto);
  });
}

// ===========================
// ハンバーガーメニュー（モバイル）
// ===========================
function initHamburger() {
  const btn     = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('drawer-overlay');
  if (!btn || !sidebar || !overlay) return;

  const toggle = () => {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
}

// ===========================
// URLハッシュから初期ページを判定
// ===========================
function initFromHash() {
  const hash = location.hash.replace('#', '');
  const validPage = PAGE_ORDER.includes(hash) ? hash : PAGE_ORDER[0];

  // まず全ページ非表示
  document.querySelectorAll('.page').forEach(p => {
    p.dataset.active = 'false';
    p.style.display = 'none';
  });

  // 初期ページだけ表示
  const initialPage = document.getElementById('page-' + validPage);
  if (initialPage) {
    initialPage.style.display = 'block';
    initialPage.dataset.active = 'true';
  }

  // サイドバーのアクティブ状態
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === validPage);
  });
}

// ===========================
// ブラウザの「戻る・進む」ボタン対応
// ===========================
function initPopState() {
  window.addEventListener('popstate', e => {
    const pageId = e.state?.page || PAGE_ORDER[0];
    if (PAGE_ORDER.includes(pageId)) {
      // showPageのhistory.pushState を呼ばずに表示だけ切り替え
      document.querySelectorAll('.page').forEach(p => {
        p.dataset.active = 'false';
        p.style.display = 'none';
      });

      const target = document.getElementById('page-' + pageId);
      if (target) {
        target.style.display = 'block';
        requestAnimationFrame(() => { target.dataset.active = 'true'; });
      }

      document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ===========================
// キーボードナビゲーション（← → キー）
// ===========================
function initKeyboardNav() {
  document.addEventListener('keydown', e => {
    // 入力フィールドにフォーカスがある場合は無視
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const activePage = document.querySelector('.page[data-active="true"]');
    if (!activePage) return;

    const currentId  = activePage.id.replace('page-', '');
    const currentIdx = PAGE_ORDER.indexOf(currentId);

    if (e.key === 'ArrowRight' && currentIdx < PAGE_ORDER.length - 1) {
      showPage(PAGE_ORDER[currentIdx + 1]);
    } else if (e.key === 'ArrowLeft' && currentIdx > 0) {
      showPage(PAGE_ORDER[currentIdx - 1]);
    }
  });
}

// ===========================
// サイドバー：現在のページ番号インジケーター
// ===========================
function updateProgress() {
  const activePage = document.querySelector('.page[data-active="true"]');
  if (!activePage) return;

  const currentId  = activePage.id.replace('page-', '');
  const currentIdx = PAGE_ORDER.indexOf(currentId);
  const total      = PAGE_ORDER.length;
  const pct        = ((currentIdx + 1) / total) * 100;

  // サイドバーブランドエリアに進捗ドットを追加（初回のみ）
  let dots = document.querySelector('.sidebar-progress-dots');
  if (!dots) {
    dots = document.createElement('div');
    dots.className = 'sidebar-progress-dots';
    dots.style.cssText = `
      display: flex; gap: 5px; padding: 0 0 .3rem;
    `;
    const brand = document.querySelector('.sidebar-brand');
    if (brand && brand.parentNode) {
      brand.parentNode.insertBefore(dots, brand.nextSibling);
    }
  }

  // ドットを更新
  dots.innerHTML = PAGE_ORDER.map((id, i) => {
    const active = i === currentIdx;
    const done   = i < currentIdx;
    const color  = active ? '#e8ff5a' : done ? 'rgba(232,255,90,.4)' : '#2a2f42';
    const size   = active ? '8px' : '6px';
    return `<span title="${id}" style="
      width: ${size}; height: ${size};
      border-radius: 50%;
      background: ${color};
      transition: all .2s;
      cursor: pointer;
      flex-shrink: 0;
    " data-dot-page="${id}"></span>`;
  }).join('');

  // ドットクリックでページ移動
  dots.querySelectorAll('[data-dot-page]').forEach(dot => {
    dot.addEventListener('click', () => showPage(dot.dataset.dotPage));
  });
}

// showPage をラップして進捗も更新
const originalShowPage = showPage;
function showPageWithProgress(pageId) {
  originalShowPage(pageId);
  setTimeout(updateProgress, 50);
}

// ===========================
// 初期化
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initFromHash();
  initSidebarNav();
  initPageNavButtons();
  initHamburger();
  initPopState();
  initKeyboardNav();
  updateProgress();

  // サイドバーアイテムのクリックを progress 更新対応に上書き
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(updateProgress, 50);
    });
  });
});