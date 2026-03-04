// ===========================
// ProGram — Python 問題集（完全版）
// 問題の表示整形 / 解説の改行 / コピー品質改善 など対応
// ===========================

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
    answer: `print("おはよう\\nこんにちは\\nこんばんは")

もしくは

print("おはよう")
print("こんにちは")
print("こんばんは")`,
    explanation: "\\nはプログラムで改行を表す特殊文字です。また、print関数は複数回呼び出すことができます。"
  },
  {
    id: "p003",
    title: "変数の使用",
    category: "変数",
    difficulty: "easy",
    description: "変数nameに「山田太郎」を代入し、「こんにちは、山田太郎さん」と表示してください。",
    hint: "変数への代入は = を使います",
    answer: `name = '山田太郎'
print(f"こんにちは、{name}さん")`,
    explanation: "変数に値を代入するには=を使います。f文字列を使うと、変数の値の埋め込みが簡単になります。{name}の部分が変数nameの値に置き換わります。"
  },
  {
    id: "p004",
    title: "数値の計算",
    category: "計算",
    difficulty: "easy",
    description:
      "変数a=10、b=3を定義し、以下を計算して表示してください：\n・a + b（和）\n・a - b（差）\n・a * b（積）\n・a / b（商）",
    hint: "四則演算の演算子を使います",
    answer: `a = 10
b = 3
print(a + b)  # 足し算
print(a - b)  # 引き算
print(a * b)  # 掛け算
print(a / b)  # 割り算`,
    explanation:
      "四則演算の演算子は以下の通りです:\n・足し算: +\n・引き算: -\n・掛け算: *\n・割り算: /\nこれらを使って変数aとbの計算を行います"
  },

  // ===== 基礎レベル =====
  {
    id: "p005",
    title: "入力と出力",
    category: "入出力",
    difficulty: "normal",
    description:
      "ユーザーから名前を入力してもらい、「こんにちは、〇〇さん！今日もがんばりましょう！」と表示してください。",
    hint: "input関数で入力を受け取ります",
    answer: `name = input("あなたの名前を入力してください: ")
print(f"こんにちは、{name}さん！ 今日も頑張りましょう！")`,
    explanation:
      "input関数はユーザからの入力を受け取るための関数です。引数に表示したいメッセージを渡すことができます。ユーザーが入力した値は文字列として返されるので、数値に変換したい場合はint()やfloat()を使います。"
  },
  {
    id: "p006",
    title: "年齢計算",
    category: "計算・入出力",
    difficulty: "normal",
    description:
      "生まれた年を入力してもらい、2026年時点での年齢を計算して表示してください。",
    hint: "input()で受け取った値は文字列なので、int()で数値に変換が必要です",
    answer: `year = int(input("生まれた年を入力してください: "))

age = 2026 - year
print(f"あなたは今年で{age}歳になります!")`,
    explanation:
      "input関数で受け取る値は文字列なので、年齢を計算するためにはint()関数を使って数値に変換する必要があります。\n変換後は、2026年から生まれた年を引けば年齢が求められます。\n最後に、f文字列を使って結果を表示させます。"
  },
  {
    id: "p007",
    title: "偶数・奇数判定",
    category: "条件分岐",
    difficulty: "normal",
    description:
      "数値を入力してもらい、それが偶数なら「偶数です」、奇数なら「奇数です」と表示してください。",
    hint: "剰余演算子 % を使って2で割った余りを調べます",
    answer: `number = int(input("数字を入力してください: "))

if number % 2 == 0:
    print(f"{number}は偶数です")
else:
    print(f"{number}は奇数です")`,
    explanation:
      "剰余演算子%は、左の数字を右の数字で割って余りを返します。偶数は2で割ったときに余りが0になるので、number % 2 == 0 の条件で偶数かどうか判定できます。"
  },
  {
    id: "p008",
    title: "成績判定",
    category: "条件分岐",
    difficulty: "normal",
    description:
      "点数（0-100）を入力してもらい、以下の基準で成績を判定してください：\n・90点以上：S\n・80点以上：A\n・70点以上：B\n・60点以上：C\n・60点未満：D",
    hint: "if-elif-else文を使います",
    answer: `score = int(input("成績を入力してください: "))

if score >= 90:
    print("成績はSです")
elif score >= 80:
    print("成績はAです")
elif score >= 70:
    print("成績はBです")
elif score >= 60:
    print("成績はCです")
else:
    print("成績はDです")`,
    explanation:
      "入力された点数で成績を判定するためには、if-elif-else文を使います。高い条件から順に評価すると、上限条件の記述を省けて読みやすくなります。"
  },
  {
    id: "p009",
    title: "1から10まで表示",
    category: "ループ",
    difficulty: "normal",
    description: "1から10までの数字を順番に表示してください。",
    hint: "for文とrange関数を使います",
    answer: `for i in range(1, 11):
    print(i)`,
    explanation:
      "for文とrange関数を使うと、指定した範囲の数字を簡単に処理できます。range(1, 11)は1から10までの数字を生成します。"
  },
  {
    id: "p010",
    title: "合計値の計算",
    category: "ループ",
    difficulty: "normal",
    description: "1から100までの全ての整数の合計を計算して表示してください。",
    hint: "for文で繰り返しながら変数に加算していきます",
    answer: `total = 0
for i in range(1, 101):
    total += i

print(total)`,
    explanation:
      "まず、合計を保存するための変数totalを0で初期化します。そのあと、for文を使って1から100までの数字を順に足していきます。total += i は total = total + i の略記です。ここで注意してほしいのが、インデントの深さです。(インデントとは、コードの行頭にあるスペースのことです)Pythonはインデントによってコードのブロックを識別するため、for文の中にtotal += iの行が入るようにしてください。"
  },

  // ===== 応用レベル =====
  {
    id: "p011",
    title: "九九の表",
    category: "ループ",
    difficulty: "hard",
    description: "九九の表（1×1から9×9まで）を整形して表示してください。",
    hint: "二重ループ（for文の入れ子）を使います",
    answer: `# 見出し行
print("    ", end="")                 # 左上の余白
for j in range(1, 10):
    print(f"{j:3}", end="")           # 1〜9の見出しを上に
print()

# 区切り線
print("   " + "-" * (3 * 9))

# 本体
for i in range(1, 10):
    print(f"{i:2}|", end="")          # 左側に段の見出し（i）
    for j in range(1, 10):
        print(f"{i * j:3}", end="")   # 中身
    print()`,
    explanation: "九九の表を表示するためには、二重ループを使います。iは段を表し、jは掛ける数字を表します。まず、見出し行は左上に少し余白をあけてから1~9までを表示しますが、pythonは自動改行するので、end=''を指定して改行しないようにしましょう。次に、区切り線も先ほどの余白に合わせるためにスペースを入れてから、9列分の線を引きます。最後に、段ごとにiを表示してから|を入れて、jを1～9までをループさせてi*jの結果を表示します。段が変わるごとに改行したいので、jのループの外にprint()を入れます。ちなみになぜf\\\"{i * j:3}\\\"のように書いているかというと、これはフォーマット指定子と呼ばれるもので、i*jの結果を3桁分のスペースを確保しているということを意味しています。これを入れることで、数字の桁数が変わっても表が崩れずにきれいに表示されるようになります。"
  },
  {
    id: "p012",
    title: "素数判定",
    category: "ループ・条件分岐",
    difficulty: "hard",
    description: "入力された数値が素数かどうか判定するプログラムを書いてください。",
    hint: "2からその数の平方根までで割り切れるか確認します",
    answer: `# number = int(input("数値を入力して下さい:")) #int()関数を使用して整数に変換する

# 入力された数値が素数かどうかを判定する関数を定義
def is_prime(num):
    if num <= 1:    #1以下の数は素数ではないため、Falseを返す
        return False
    for i in range(2, int(num**0.5) + 1): #2からnumの平方根までの整数で割り切れるかを確認
        if num % i == 0:
            return False
    return True

if is_prime(number):
    print(f"{number}は素数です。")
else:
    print(f"{number}は素数ではありません。")`,
    explanation: "今回は素数を判定するプログラムです。まず最初に、入力した値は文字列として受け取られるため、int()で整数変換しています。次に、素数判定ですが、そもそも素数は「1と自分自身以外で割り切れない2以上の整数」なので、1以下の場合は即座にFalseを返しています。2以上の場合はrange(2, int(num**0.5) + 1)の範囲でループを回し、(num**でべき乗を表す) num % 1 == 0(割り算の余りが0)が成立する、つまり割り切れる数字が1つでも見つかればFalseを返します。+1しているのはrange()が終端を含まないためで、例えば36の場合+1がないと6が調べられず、素数と誤判定されてしまいます。また、なぜ平方根までで済むかというと、ある数の約数は必ずペアで存在するからです。36であれば「2と18」「3と12」「4と9」の様にペアがあり、どれも掛けると36になります。小さいほうが見つかれば大きい方は36÷小さい数で自動的にわかるため、わざわざ調べる必要がありません。このペアは平方根を境に小さい側と大きい側に分かれるので、小さい側だけ調べれば大きい側も自動的にカバーできます。ループを最後まで回しても割り切れる数字が見つからなかった場合は、約数が存在しないということなのでTrue(素数)を返します。"
  },
  {
    id: "p013",
    title: "最大値・最小値を求める関数",
    category: "関数",
    difficulty: "hard",
    description:
      "リストを受け取り、最大値と最小値をタプルで返す関数 find_min_max() を作成してください。\n例：find_min_max([3, 1, 4, 1, 5]) → (1, 5)",
    hint: "def文で関数を定義し、min()とmax()を使います",
    answer: `def find_min_max(lst):
    return (min(lst), max(lst))

print(find_min_max([3, 1, 4, 1, 5]))  `,
    explanation: "一行目は関数の定義をしています。defは関数を作るキーワード、find_min_maxが関数名、lstは関数に渡すリストを受け取る引数です。二行目にリストの中の最小値と最大値を求めてその値を返しています。3行目は関数を呼び出してその結果を表示させています。"
  },
  {
    id: "p014",
    title: "文字列の反転",
    category: "文字列処理",
    difficulty: "hard",
    description:
      "入力された文字列を逆順にして表示する関数 reverse_string() を作成してください。\n例：reverse_string(\"Hello\") → \"olleH\"",
    hint: "スライス[::-1]を使うか、reversed()関数を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p015",
    title: "フィボナッチ数列",
    category: "ループ・アルゴリズム",
    difficulty: "hard",
    description:
      "n番目までのフィボナッチ数列を表示するプログラムを書いてください。\n例：n=10の場合 → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
    hint: "前の2つの数を足して次の数を作ります",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p016",
    title: "リスト内包表記",
    category: "リスト",
    difficulty: "hard",
    description:
      "1から20までの数値のうち、3の倍数だけを含むリストをリスト内包表記で作成してください。",
    hint: "[式 for 変数 in イテラブル if 条件]の形式を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  },
  {
    id: "p017",
    title: "辞書の操作",
    category: "データ構造",
    difficulty: "hard",
    description:
      "学生の成績を管理する辞書を作成し、平均点を計算する関数を書いてください。\n例：{\"田中\": 85, \"佐藤\": 92, \"鈴木\": 78}",
    hint: "values()メソッドとsum()、len()関数を使います",
    answer: `# 答えをここに書いてください`,
    explanation: "ここに解説を書いてください"
  }
];

// ===========================
// 初期化
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  initProblems();
  loadSolvedStatus();
  setupFilters();
  initHamburger();
  initProgressBar();
  initReveal();
});

// ===========================
// DOM構築
// ===========================
function initProblems() {
  const container = document.getElementById("problems-container");
  const totalCount = document.getElementById("total-count");
  if (!container) return;

  if (totalCount) totalCount.textContent = PROBLEMS.length;

  PROBLEMS.forEach((problem, index) => {
    const problemCard = createProblemCard(problem, index + 1);
    container.appendChild(problemCard);
  });

  updateSolvedCount();
}

function createProblemCard(problem, number) {
  const card = document.createElement("div");
  card.className = `problem-card ${problem.difficulty}`;
  card.dataset.problemId = problem.id;
  card.dataset.difficulty = problem.difficulty;

  const difficultyLabel = {
    easy: "入門",
    normal: "基礎",
    hard: "応用"
  }[problem.difficulty];

  card.innerHTML = `
    <div class="problem-header">
      <div class="problem-meta">
        <span class="problem-number">#${String(number).padStart(3, "0")}</span>
        <span class="problem-category">${escapeHtml(problem.category)}</span>
        <span class="problem-difficulty ${problem.difficulty}">${difficultyLabel}</span>
      </div>
      <div class="problem-status">
        <button class="check-btn" title="完了をマーク">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"></circle>
            <path class="check-mark" d="M6 10L9 13L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>

    <h3 class="problem-title">${escapeHtml(problem.title)}</h3>
    <div class="problem-description">
      ${escapeHtml(problem.description).replace(/\n/g, "<br>")}
    </div>

    ${
      problem.hint
        ? `
      <button class="hint-btn">
        <span class="hint-icon">💡</span>
        ヒントを見る
      </button>
      <div class="hint-content">${escapeHtml(problem.hint)}</div>
    `
        : ""
    }

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
        <pre><code class="language-python">${escapeHtml(formatAnswer(problem.answer))}</code></pre>
      </div>

      <div class="explanation-header">
        <span class="explanation-label">解説</span>
      </div>
      <div class="explanation-content">
        ${nl2br(problem.explanation)}
      </div>
    </div>
  `;

  setupCardEventListeners(card);
  return card;
}

// ===========================
// イベント
// ===========================
function setupCardEventListeners(card) {
  // 解答の開閉
  const toggleBtn = card.querySelector(".toggle-answer-btn");
  const answerSection = card.querySelector(".answer-section");
  const btnText = toggleBtn?.querySelector(".btn-text");
  const btnArrow = toggleBtn?.querySelector(".btn-arrow");

  if (toggleBtn && answerSection && btnText && btnArrow) {
    toggleBtn.addEventListener("click", () => {
      const open = answerSection.classList.toggle("show");
      btnText.textContent = open ? "答えと解説を隠す" : "答えと解説を見る";
      btnArrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
    });
  }

  // ヒント開閉
  const hintBtn = card.querySelector(".hint-btn");
  const hintContent = card.querySelector(".hint-content");
  if (hintBtn && hintContent) {
    hintBtn.addEventListener("click", () => {
      hintContent.classList.toggle("show");
      hintBtn.classList.toggle("active");
    });
  }

  // 完了チェック
  const checkBtn = card.querySelector(".check-btn");
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      card.classList.toggle("solved");
      checkBtn.classList.toggle("checked");
      const problemId = card.dataset.problemId;
      const solved = card.classList.contains("solved");
      saveSolvedStatus(problemId, solved);
      updateSolvedCount();
    });
  }

  // コピーボタン（見た目どおりコピー）
  const copyBtn = card.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const codeNode = card.querySelector(".answer-code code");
      const code = codeNode ? codeNode.innerText : "";
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = "✓ コピー済み";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "コピー";
          copyBtn.classList.remove("copied");
        }, 1600);
      });
    });
  }
}

// ===========================
// フィルター
// ===========================
function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  const applyFilter = (filter) => {
    const cards = document.querySelectorAll(".problem-card");
    cards.forEach((card) => {
      if (filter === "all" || card.dataset.difficulty === filter) {
        card.style.display = "block";
        // 再描画遅延でフェードインを活かす
        setTimeout(() => card.classList.add("visible"), 10);
      } else {
        card.classList.remove("visible");
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
}

// ===========================
// 進捗管理
// ===========================
function saveSolvedStatus(problemId, solved) {
  const solvedProblems = JSON.parse(localStorage.getItem("solvedProblems") || "{}");
  solvedProblems[problemId] = solved;
  localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
}

function loadSolvedStatus() {
  const solvedProblems = JSON.parse(localStorage.getItem("solvedProblems") || "{}");
  Object.keys(solvedProblems).forEach((problemId) => {
    if (solvedProblems[problemId]) {
      const card = document.querySelector(`[data-problem-id="${problemId}"]`);
      if (card) {
        card.classList.add("solved");
        const checkBtn = card.querySelector(".check-btn");
        if (checkBtn) checkBtn.classList.add("checked");
      }
    }
  });
}

function updateSolvedCount() {
  const solvedCountEl = document.getElementById("solved-count");
  const solvedCards = document.querySelectorAll(".problem-card.solved");
  if (solvedCountEl) solvedCountEl.textContent = solvedCards.length;
}

// ===========================
// ユーティリティ
// ===========================
function escapeHtml(text = "") {
  const div = document.createElement("div");
  div.textContent = text == null ? "" : String(text);
  return div.innerHTML;
}

// 解説用：改行(\n)を <br> に変換（最低限のサニタイズ込み）
function nl2br(text = "") {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

// 解答コードの整形
function formatAnswer(raw = "") {
  let s = String(raw);

  // 1) 三連バッククォートやインラインバッククォートを除去
  s = s.replace(/```[\s\S]*?```/g, (m) => m.replace(/```[\w-]*/g, "").trim());
  s = s.replace(/`([^`]+)`/g, "$1");

  // 2) 改行を統一
  s = s.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // 3) 前後の空白をトリム
  s = s.trim();

  // 4) 簡易デデント（共通インデント幅を削る）
  const lines = s.split("\n");
  const indents = lines
    .filter((l) => l.trim().length > 0)
    .map((l) => (l.match(/^ +/) || [""])[0].length);
  const minIndent = indents.length ? Math.min(...indents) : 0;
  if (minIndent > 0) {
    s = lines
      .map((l) => {
        const head = (l.match(/^ +/) || [""])[0];
        if (head.length && head.length <= minIndent && l.trim() === "") return "";
        return l.slice(Math.min(minIndent, head.length));
      })
      .join("\n");
  }

  // 5) 「もしくは」を視覚的に区切る
  s = s.replace(/\s*もしくは\s*/g, "\n\n# ---- もしくは ----\n\n");

  return s;
}

// ===========================
// ハンバーガー / ドロワー
// ===========================
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");
  const drawerList = document.getElementById("drawer-nav-list");

  if (drawerList) {
    drawerList.innerHTML = `
      <li><a href="index.html">📚 学習ガイド</a></li>
      <li><a href="setup.html">⚙ 開発環境セットアップ</a></li>
      <li><a href="tools.html">🛠 開発ツール入門</a></li>
    `;
  }

  const toggle = () => {
    if (!drawer || !overlay) return;
    const open = drawer.classList.toggle("open");
    overlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  if (btn) btn.addEventListener("click", toggle);
  if (overlay) overlay.addEventListener("click", toggle);
}

// ===========================
// プログレスバー
// ===========================
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  const onScroll = () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // 初回反映
}

// ===========================
// 表示のフェードイン（IntersectionObserver）
// ===========================
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".problem-card").forEach((card) => observer.observe(card));
}
