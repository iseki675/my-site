// ===========================
// 問題データ定義
// ===========================
const PROBLEMS = [
  // ===== 入門レベル =====
  {
    id: "p001",
    title: "Hello Worldを表示",
    category: "出力",
    difficulty: "easy",
    description: "画面に「Hello, World!」と表示するプログラムを書いてください。",
    hint: "print関数を使います",
    answer: `print("Hello, World!")`,
    explanation: "print関数は標準出力に文字列を表示する基本的な関数です"
  },
  {
    id: "p002",
    title: "複数行の出力",
    category: "出力",
    difficulty: "easy",
    description: "以下の3行を順番に表示するプログラムを書いてください：\n1. おはよう\n2. こんにちは\n3. こんばんは",
    hint: "print関数を3回使うか、改行文字\\nを使います",
    answer: `print("おはよう\\nこんにちは\\nこんばんわ")　もしくは
             print("おはよう")
             print("こんにちは")
             print("こんばんわ")`,
    explanation: "\\nはプログラムで改行を表す特殊文字です。また、print関数は複数回呼び出すことができます。"
  },
  {
    id: "p003",
    title: "変数の使用",
    category: "変数",
    difficulty: "easy",
    description: "変数nameに「山田太郎」を代入し、「こんにちは、山田太郎さん」と表示してください。",
    hint: "変数への代入は = を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p004",
    title: "数値の計算",
    category: "計算",
    difficulty: "easy",
    description: "変数a=10、b=3を定義し、以下を計算して表示してください：\n・a + b（和）\n・a - b（差）\n・a * b（積）\n・a / b（商）",
    hint: "四則演算の演算子を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },

  // ===== 基礎レベル =====
  {
    id: "p005",
    title: "入力と出力",
    category: "入出力",
    difficulty: "normal",
    description: "ユーザーから名前を入力してもらい、「こんにちは、〇〇さん！今日もがんばりましょう！」と表示してください。",
    hint: "input関数で入力を受け取ります",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p006",
    title: "年齢計算",
    category: "計算・入出力",
    difficulty: "normal",
    description: "生まれた年を入力してもらい、2024年時点での年齢を計算して表示してください。",
    hint: "input()で受け取った値は文字列なので、int()で数値に変換が必要です",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p007",
    title: "偶数・奇数判定",
    category: "条件分岐",
    difficulty: "normal",
    description: "数値を入力してもらい、それが偶数なら「偶数です」、奇数なら「奇数です」と表示してください。",
    hint: "剰余演算子 % を使って2で割った余りを調べます",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p008",
    title: "成績判定",
    category: "条件分岐",
    difficulty: "normal",
    description: "点数（0-100）を入力してもらい、以下の基準で成績を判定してください：\n・90点以上：S\n・80点以上：A\n・70点以上：B\n・60点以上：C\n・60点未満：D",
    hint: "if-elif-else文を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p009",
    title: "1から10まで表示",
    category: "ループ",
    difficulty: "normal",
    description: "1から10までの数字を順番に表示してください。",
    hint: "for文とrange関数を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p010",
    title: "合計値の計算",
    category: "ループ",
    difficulty: "normal",
    description: "1から100までの全ての整数の合計を計算して表示してください。",
    hint: "for文で繰り返しながら変数に加算していきます",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },

  // ===== 応用レベル =====
  {
    id: "p011",
    title: "九九の表",
    category: "ループ",
    difficulty: "hard",
    description: "九九の表（1×1から9×9まで）を整形して表示してください。",
    hint: "二重ループ（for文の入れ子）を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p012",
    title: "素数判定",
    category: "ループ・条件分岐",
    difficulty: "hard",
    description: "入力された数値が素数かどうか判定するプログラムを書いてください。",
    hint: "2からその数の平方根までで割り切れるか確認します",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p013",
    title: "最大値・最小値を求める関数",
    category: "関数",
    difficulty: "hard",
    description: "リストを受け取り、最大値と最小値をタプルで返す関数 find_min_max() を作成してください。\n例：find_min_max([3, 1, 4, 1, 5]) → (1, 5)",
    hint: "def文で関数を定義し、min()とmax()を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p014",
    title: "文字列の反転",
    category: "文字列処理",
    difficulty: "hard",
    description: "入力された文字列を逆順にして表示する関数 reverse_string() を作成してください。\n例：reverse_string(\"Hello\") → \"olleH\"",
    hint: "スライス[::-1]を使うか、reversed()関数を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p015",
    title: "フィボナッチ数列",
    category: "ループ・アルゴリズム",
    difficulty: "hard",
    description: "n番目までのフィボナッチ数列を表示するプログラムを書いてください。\n例：n=10の場合 → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
    hint: "前の2つの数を足して次の数を作ります",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p016",
    title: "リスト内包表記",
    category: "リスト",
    difficulty: "hard",
    description: "1から20までの数値のうち、3の倍数だけを含むリストをリスト内包表記で作成してください。",
    hint: "[式 for 変数 in イテラブル if 条件]の形式を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p017",
    title: "辞書の操作",
    category: "データ構造",
    difficulty: "hard",
    description: "学生の成績を管理する辞書を作成し、平均点を計算する関数を書いてください。\n例：{\"田中\": 85, \"佐藤\": 92, \"鈴木\": 78}",
    hint: "values()メソッドとsum()、len()関数を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  }
];

// ===========================
// DOM操作・初期化
// ===========================
function initProblems() {
  const container = document.getElementById('problems-container');
  const totalCount = document.getElementById('total-count');
  
  totalCount.textContent = PROBLEMS.length;

  PROBLEMS.forEach((problem, index) => {
    const problemCard = createProblemCard(problem, index + 1);
    container.appendChild(problemCard);
  });

  // 統計を更新
  updateSolvedCount();
}

// ===========================
// 問題カード作成
// ===========================
function createProblemCard(problem, number) {
  const card = document.createElement('div');
  card.className = `problem-card ${problem.difficulty}`;
  card.dataset.problemId = problem.id;
  card.dataset.difficulty = problem.difficulty;

  const difficultyLabel = {
    'easy': '入門',
    'normal': '基礎',
    'hard': '応用'
  }[problem.difficulty];

  card.innerHTML = `
    <div class="problem-header">
      <div class="problem-meta">
        <span class="problem-number">#${String(number).padStart(3, '0')}</span>
        <span class="problem-category">${problem.category}</span>
        <span class="problem-difficulty ${problem.difficulty}">${difficultyLabel}</span>
      </div>
      <div class="problem-status">
        <button class="check-btn" title="完了をマーク">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
            <path class="check-mark" d="M6 10L9 13L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <h3 class="problem-title">${problem.title}</h3>
    <div class="problem-description">${problem.description.replace(/\n/g, '<br>')}</div>
    
    ${problem.hint ? `
      <button class="hint-btn">
        <span class="hint-icon">💡</span>
        ヒントを見る
      </button>
      <div class="hint-content">${problem.hint}</div>
    ` : ''}

    <div class="problem-actions">
      <button class="toggle-answer-btn">
        <span class="btn-text">答えと解説を見る</span>
        <span class="btn-arrow">▼</span>
      </button>
    </div>

    <div class="answer-section">
      <div class="answer-header">
        <span class="answer-label">解答コード</span>
        <button class="copy-btn">コピー</button>
      </div>
      <div class="answer-code">
        <pre><code>${escapeHtml(problem.answer)}</code></pre>
      </div>
      
      <div class="explanation-header">
        <span class="explanation-label">解説</span>
      </div>
      <div class="explanation-content">
        ${problem.explanation}
      </div>
    </div>
  `;

  // イベントリスナーを追加
  setupCardEventListeners(card);

  return card;
}

// ===========================
// イベントリスナー設定
// ===========================
function setupCardEventListeners(card) {
  // 答えの表示切り替え
  const toggleBtn = card.querySelector('.toggle-answer-btn');
  const answerSection = card.querySelector('.answer-section');
  const btnText = toggleBtn.querySelector('.btn-text');
  const btnArrow = toggleBtn.querySelector('.btn-arrow');

  toggleBtn.addEventListener('click', () => {
    const isOpen = answerSection.classList.contains('show');
    
    if (isOpen) {
      answerSection.classList.remove('show');
      btnText.textContent = '答えと解説を見る';
      btnArrow.style.transform = 'rotate(0deg)';
    } else {
      answerSection.classList.add('show');
      btnText.textContent = '答えと解説を隠す';
      btnArrow.style.transform = 'rotate(180deg)';
    }
  });

  // ヒント表示
  const hintBtn = card.querySelector('.hint-btn');
  if (hintBtn) {
    const hintContent = card.querySelector('.hint-content');
    hintBtn.addEventListener('click', () => {
      hintContent.classList.toggle('show');
      hintBtn.classList.toggle('active');
    });
  }

  // 完了チェック
  const checkBtn = card.querySelector('.check-btn');
  checkBtn.addEventListener('click', () => {
    card.classList.toggle('solved');
    checkBtn.classList.toggle('checked');
    
    // ローカルストレージに保存
    const problemId = card.dataset.problemId;
    const solved = card.classList.contains('solved');
    saveSolvedStatus(problemId, solved);
    updateSolvedCount();
  });

  // コピーボタン
  const copyBtn = card.querySelector('.copy-btn');
  copyBtn.addEventListener('click', () => {
    const code = card.querySelector('.answer-code code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.textContent = '✓ コピー済み';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'コピー';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });
}

// ===========================
// フィルター機能
// ===========================
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.problem-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // アクティブ状態を更新
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      // カードの表示/非表示
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.difficulty === filter) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('visible'), 10);
        } else {
          card.classList.remove('visible');
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });
}

// ===========================
// 進捗管理
// ===========================
function saveSolvedStatus(problemId, solved) {
  const solvedProblems = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
  solvedProblems[problemId] = solved;
  localStorage.setItem('solvedProblems', JSON.stringify(solvedProblems));
}

function loadSolvedStatus() {
  const solvedProblems = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
  
  Object.keys(solvedProblems).forEach(problemId => {
    if (solvedProblems[problemId]) {
      const card = document.querySelector(`[data-problem-id="${problemId}"]`);
      if (card) {
        card.classList.add('solved');
        card.querySelector('.check-btn').classList.add('checked');
      }
    }
  });
}

function updateSolvedCount() {
  const solvedCards = document.querySelectorAll('.problem-card.solved');
  const solvedCount = document.getElementById('solved-count');
  solvedCount.textContent = solvedCards.length;
}

// ===========================
// ユーティリティ関数
// ===========================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===========================
// ハンバーガーメニュー
// ===========================
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');

  const drawerList = document.getElementById('drawer-nav-list');
  drawerList.innerHTML = `
    <li><a href="index.html">📚 学習ガイド</a></li>
    <li><a href="setup.html">⚙ 開発環境セットアップ</a></li>
    <li><a href="tools.html">🛠 開発ツール入門</a></li>
  `;

  const toggle = () => {
    const open = drawer.classList.toggle('open');
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
}

// ===========================
// プログレスバー
// ===========================
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

// ===========================
// 初期化
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initProblems();
  loadSolvedStatus();
  setupFilters();
  initHamburger();
  initProgressBar();

  // カードのフェードインアニメーション
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.problem-card').forEach(card => {
    observer.observe(card);
  });
});
