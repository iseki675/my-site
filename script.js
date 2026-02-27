/* ===========================
   ProGram — script.js
   =========================== */

// ===========================
// データ定義
// ===========================
const CHAPTERS = [
  {
    id: "chapter-0",
    tag: "CHAPTER 00",
    title: "プログラミングの原理",
    intro: "言語が変わっても通用する「考え方の核心」を学びます。コンピュータがどう動くか、プログラムとは何かを理解すれば、どの言語も同じ地図で読めるようになります。",
    code: `<span class="cm"># これは「擬似コード」— 言語に依存しない処理の書き方</span>
<span class="cm">#</span>
<span class="cm"># ① 逐次処理：上から順番に実行される</span>
<span class="cm">#    命令1 → 命令2 → 命令3 ... と流れる</span>
<span class="cm">#</span>
<span class="cm"># ② 変数：データを名前付きの箱に保存する</span>
<span class="cm">#    箱の名前 ← 値</span>
<span class="cm">#</span>
<span class="cm"># ③ 条件分岐：Yes/No で処理を分ける</span>
<span class="cm">#    もし（条件）ならば</span>
<span class="cm">#        処理A</span>
<span class="cm">#    そうでなければ</span>
<span class="cm">#        処理B</span>
<span class="cm">#</span>
<span class="cm"># ④ 繰り返し：同じ処理を何度も実行する</span>
<span class="cm">#    ～の間くり返す</span>
<span class="cm">#        処理</span>
<span class="cm">#</span>
<span class="cm"># ⑤ 関数：処理に名前をつけて部品化する</span>
<span class="cm">#    関数名（入力） → 処理 → 出力</span>
<span class="cm">#</span>
<span class="cm"># これら5つの概念はどの言語にも存在する！</span>`,
    visual: `
<div class="principle-visual">
  <div class="pv-title">プログラムの5大原理</div>

  <div class="pv-grid">

    <div class="pv-card" data-color="accent">
      <div class="pv-num">01</div>
      <div class="pv-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="6" width="28" height="6" rx="2" fill="currentColor" opacity=".9"/>
          <rect x="4" y="15" width="28" height="6" rx="2" fill="currentColor" opacity=".6"/>
          <rect x="4" y="24" width="28" height="6" rx="2" fill="currentColor" opacity=".3"/>
          <path d="M36 9 L32 9" stroke="currentColor" stroke-width="1.5" marker-end="url(#arr)"/>
        </svg>
      </div>
      <div class="pv-name">逐次処理</div>
      <div class="pv-desc">命令を上から順番に1行ずつ実行する。プログラムの基本的な流れ。</div>
      <div class="pv-langs">
        <span>Python</span><span>C</span><span>Java</span><span>JS</span>
      </div>
    </div>

    <div class="pv-card" data-color="accent2">
      <div class="pv-num">02</div>
      <div class="pv-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="6" y="8" width="24" height="20" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
          <text x="18" y="21" text-anchor="middle" fill="currentColor" font-size="10" font-family="monospace">x=42</text>
        </svg>
      </div>
      <div class="pv-name">変数・データ型</div>
      <div class="pv-desc">データを名前付きの箱に入れる。型（数値・文字列・真偽値）で種類を区別する。</div>
      <div class="pv-langs">
        <span>int</span><span>str</span><span>bool</span><span>float</span>
      </div>
    </div>

    <div class="pv-card" data-color="accent3">
      <div class="pv-num">03</div>
      <div class="pv-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <polygon points="18,4 32,18 18,32 4,18" stroke="currentColor" stroke-width="2" fill="none"/>
          <text x="18" y="22" text-anchor="middle" fill="currentColor" font-size="9" font-family="monospace">条件?</text>
        </svg>
      </div>
      <div class="pv-name">条件分岐</div>
      <div class="pv-desc">条件がTrue/Falseかによって処理を分ける。if/else はどの言語にもある。</div>
      <div class="pv-langs">
        <span>if</span><span>else</span><span>elif</span><span>switch</span>
      </div>
    </div>

    <div class="pv-card" data-color="yellow">
      <div class="pv-num">04</div>
      <div class="pv-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="13" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M18 5 A13 13 0 0 1 31 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          <polyline points="31,13 31,18 26,18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="pv-name">繰り返し</div>
      <div class="pv-desc">同じ処理を何度も実行する。forは回数固定、whileは条件次第で繰り返す。</div>
      <div class="pv-langs">
        <span>for</span><span>while</span><span>do-while</span>
      </div>
    </div>

    <div class="pv-card" data-color="purple">
      <div class="pv-num">05</div>
      <div class="pv-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="3" y="12" width="30" height="12" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
          <text x="18" y="21" text-anchor="middle" fill="currentColor" font-size="9" font-family="monospace">func()</text>
          <line x1="18" y1="4" x2="18" y2="12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2"/>
          <line x1="18" y1="24" x2="18" y2="32" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polyline points="15,8 18,4 21,8" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <polyline points="15,28 18,32 21,28" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
      <div class="pv-name">関数・部品化</div>
      <div class="pv-desc">処理に名前をつけて再利用できる部品にする。入力を受け取り、出力を返す。</div>
      <div class="pv-langs">
        <span>def</span><span>function</span><span>void</span><span>return</span>
      </div>
    </div>

  </div>

  <div class="pv-flow">
    <div class="pv-flow-title">▶ プログラムが動く仕組み（フロー）</div>
    <div class="pv-flow-diagram">
      <div class="pf-node pf-start">開始</div>
      <div class="pf-arrow">↓</div>
      <div class="pf-node pf-seq">命令を実行<br><small>逐次処理</small></div>
      <div class="pf-arrow">↓</div>
      <div class="pf-node pf-branch">条件を判定<br><small>True / False</small></div>
      <div class="pf-branch-row">
        <div class="pf-branch-col">
          <div class="pf-label">True</div>
          <div class="pf-node pf-yes">処理A</div>
        </div>
        <div class="pf-branch-col">
          <div class="pf-label">False</div>
          <div class="pf-node pf-no">処理B</div>
        </div>
      </div>
      <div class="pf-arrow">↓</div>
      <div class="pf-node pf-loop">繰り返し?<br><small>条件次第でループ</small></div>
      <div class="pf-arrow">↓</div>
      <div class="pf-node pf-end">終了</div>
    </div>
  </div>

</div>`,
    terms: [
      {
        word: "逐次処理 (Sequential)",
        desc: "プログラムの命令が上から下へ、1行ずつ順番に実行されること。コンピュータは基本的にこの順序で動きます。分岐やループはこの流れを変える仕組みです。",
        example: "print('1番目')  # まず実行\nprint('2番目')  # 次に実行\nprint('3番目')  # 最後に実行"
      },
      {
        word: "アルゴリズム",
        desc: "問題を解くための手順・手続きのこと。料理のレシピに例えられます。同じ問題でも複数のアルゴリズムがあり、速さやメモリ効率が異なります。",
        example: "【例】1〜100の合計を求めるアルゴリズム\n方法A: 1+2+3+...と順に足す（100ステップ）\n方法B: n×(n+1)÷2 の公式を使う（1ステップ）"
      },
      {
        word: "擬似コード (Pseudocode)",
        desc: "特定のプログラミング言語に依存しない、人間が読みやすい形でアルゴリズムを記述する方法。設計段階やアイデアの整理に使います。",
        example: "もし 点数 >= 60 ならば\n    「合格」と表示する\nそうでなければ\n    「不合格」と表示する"
      },
      {
        word: "フローチャート",
        desc: "処理の流れを図形と矢印で視覚化したもの。長方形＝処理、ひし形＝条件分岐、楕円＝開始/終了を表します。プログラムの設計・説明に使われます。",
        example: null
      },
      {
        word: "コンパイルとインタープリタ",
        desc: "コンパイル型（C/C++など）はソースコードを実行前に機械語に変換します。インタープリタ型（Pythonなど）は1行ずつ読みながら実行します。どちらも同じ原理で動作します。",
        example: "【コンパイル型】 C, C++, Go, Rust\n  コード → 変換 → 実行ファイル → 実行\n\n【インタープリタ型】 Python, Ruby, JS\n  コード → 直接実行（変換しながら）"
      }
    ]
  },
  {
    id: "chapter-python-intro",
    tag: null,
    title: null,
    isBanner: true,
    bannerHTML: `
<div class="python-banner">
  <div class="pb-left">
    <div class="pb-logo">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8 4C16.2 4 12.6 6.6 12.6 10.4V14h9.4v1.4H8.6C4.8 15.4 2 18.4 2 22.2s2.8 6.8 6.6 7H12v-4.4c0-4.2 3.6-7 9.8-7h9.4c3.4 0 6-2.6 6-6V10.4C37.2 6.6 33.4 4 21.8 4zm-5.2 4.6c1.2 0 2.2 1 2.2 2.2S17.8 13 16.6 13s-2.2-1-2.2-2.2 1-2.2 2.2-2.2z" fill="#4B8BBE"/>
        <path d="M22.2 40c5.6 0 9.2-2.6 9.2-6.4V30H22v-1.4h13.4c3.8 0 6.6-3 6.6-6.8s-2.8-6.8-6.6-7H32v4.4c0 4.2-3.6 7-9.8 7h-9.4c-3.4 0-6 2.6-6 6v3.4C6.8 39.4 10.6 40 22.2 40zm5.2-4.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z" fill="#FFD43B"/>
      </svg>
    </div>
    <div class="pb-text">
      <div class="pb-label">ここから実装へ</div>
      <div class="pb-title">Python で書いてみよう</div>
      <div class="pb-desc">
        CHAPTER 00 で学んだ「5大原理」をベースに、ここからは <strong>Python</strong> を使って実際のコードで体験していきます。
        Python は文法がシンプルで読みやすく、世界中の入門者に選ばれている言語です。
        原理さえ理解していれば、あとで他の言語（C・Java・JavaScriptなど）に移っても
        <em>同じ考え方がそのまま使えます。</em>
      </div>
    </div>
  </div>
  <div class="pb-reasons">
    <div class="pb-reason">
      <span class="pb-icon">✦</span>
      <span>文法がシンプル — セミコロン不要、型宣言不要</span>
    </div>
    <div class="pb-reason">
      <span class="pb-icon">✦</span>
      <span>エラーメッセージが読みやすく、初心者が試行錯誤しやすい</span>
    </div>
    <div class="pb-reason">
      <span class="pb-icon">✦</span>
      <span>Web・AI・データ分析など幅広い分野で即戦力になる</span>
    </div>
    <div class="pb-reason">
      <span class="pb-icon">✦</span>
      <span>原理を覚えれば他言語への応用も簡単</span>
    </div>
  </div>
  <a href="setup.html" class="pb-setup-link">⚙ まだ環境が整っていない方はこちら → 開発環境セットアップガイド</a>
</div>`
  },
  {
    id: "chapter-1",
    tag: "CHAPTER 01",
    title: "文字列を表示する",
    intro: "プログラミングの第一歩は「画面に文字を出力すること」。print 関数を使って、様々な文字列を表示してみましょう。",
    code: `<span class="cm"># 基本的な文字列の表示</span>
<span class="kw">print</span>(<span class="str">"Hello, World!"</span>)

<span class="cm"># 複数の値を並べて表示</span>
<span class="kw">print</span>(<span class="str">"名前:"</span>, <span class="str">"田中太郎"</span>)

<span class="cm"># 改行なしで表示（end引数）</span>
<span class="kw">print</span>(<span class="str">"Loading"</span>, end<span class="op">=</span><span class="str">"..."</span>)
<span class="kw">print</span>(<span class="str">"完了"</span>)

<span class="cm"># 出力結果</span>
<span class="cm"># Hello, World!</span>
<span class="cm"># 名前: 田中太郎</span>
<span class="cm"># Loading...完了</span>`,
    terms: [
      {
        word: "print関数",
        desc: "画面（標準出力）に文字や値を表示するための組み込み関数。引数に渡した値を文字列として出力します。複数の値をカンマ区切りで渡すとスペース区切りで表示されます。",
        example: 'print("Hello")     # → Hello\nprint(1, 2, 3)    # → 1 2 3'
      },
      {
        word: "文字列 (String)",
        desc: "テキストデータを表すデータ型。ダブルクォート \"\" またはシングルクォート '' で囲んで記述します。数字を引用符で囲むと文字列として扱われます。",
        example: '"Hello"  ← 文字列\n\'World\'  ← 文字列\n42       ← 数値（文字列ではない）'
      },
      {
        word: "引数 (Argument)",
        desc: "関数に渡すデータのこと。print(\"Hello\") の場合、\"Hello\" が引数です。関数はこの引数を受け取って処理を行います。",
        example: "print(\"Hello\")  # \"Hello\" が引数\nprint(1 + 2)    # 式も引数になる"
      },
      {
        word: "標準出力",
        desc: "プログラムの実行結果を表示するデフォルトの出力先。通常はターミナル（コマンドプロンプト）の画面を指します。print() はデフォルトでこちらに出力します。",
        example: null
      }
    ]
  },
  {
    id: "chapter-2",
    tag: "CHAPTER 02",
    title: "変数に保存する",
    intro: "変数はデータを一時的に記憶しておく「名前付きの箱」です。値を変数に代入し、あとから参照・変更できます。",
    code: `<span class="cm"># 変数への代入</span>
<span class="var">name</span> <span class="op">=</span> <span class="str">"田中太郎"</span>
<span class="var">age</span>  <span class="op">=</span> <span class="num">25</span>
<span class="var">height</span> <span class="op">=</span> <span class="num">170.5</span>

<span class="cm"># 変数を使って表示</span>
<span class="kw">print</span>(<span class="var">name</span>, <span class="str">"さん、年齢:"</span>, <span class="var">age</span>)

<span class="cm"># f文字列（フォーマット文字列）</span>
<span class="var">greeting</span> <span class="op">=</span> <span class="str">f"こんにちは！{<span class="var">name</span>}さん。身長は{<span class="var">height</span>}cmです。"</span>
<span class="kw">print</span>(<span class="var">greeting</span>)

<span class="cm"># 変数の値を更新</span>
<span class="var">age</span> <span class="op">=</span> <span class="var">age</span> <span class="op">+</span> <span class="num">1</span>  <span class="cm"># または age += 1</span>
<span class="kw">print</span>(<span class="str">"来年の年齢:"</span>, <span class="var">age</span>)`,
    terms: [
      {
        word: "変数 (Variable)",
        desc: "データを保存するための名前付きの記憶領域。= 演算子で値を代入します。変数名は英字で始まり、英数字とアンダースコアが使えます。",
        example: "x = 10      # 整数を保存\npi = 3.14   # 小数を保存\nname = \"山田\" # 文字列を保存"
      },
      {
        word: "代入 (Assignment)",
        desc: "変数に値を格納する操作。Pythonでは = を使います。右辺の値を評価してから左辺の変数に保存します。数学の「等しい」とは意味が異なります。",
        example: "x = 5     # 5 を x に代入\nx = x + 1 # x の値(5)に1を足して再代入 → 6"
      },
      {
        word: "f文字列",
        desc: "文字列の中に変数や式を埋め込む構文。文字列の前に f をつけ、埋め込みたい変数を {} で囲みます。Python 3.6以降で使用可能。",
        example: 'name = "花子"\nage = 20\nprint(f"{name}は{age}歳です")\n# → 花子は20歳です'
      },
      {
        word: "データ型 (Data Type)",
        desc: "変数に格納できるデータの種類。主な型：int（整数）、float（小数）、str（文字列）、bool（真偽値）。Pythonは自動的に型を判断します（動的型付け）。",
        example: 'type(42)      # → <class "int">\ntype(3.14)    # → <class "float">\ntype("hi")    # → <class "str">'
      }
    ]
  },
  {
    id: "chapter-3",
    tag: "CHAPTER 03",
    title: "数値の計算",
    intro: "プログラムは電卓としても機能します。四則演算から余り、べき乗まで、様々な数値計算の演算子と使い方を学びます。",
    code: `<span class="cm"># 基本的な演算子</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">+</span> <span class="num">3</span>)   <span class="cm"># 加算  → 13</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">-</span> <span class="num">3</span>)   <span class="cm"># 減算  → 7</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">*</span> <span class="num">3</span>)   <span class="cm"># 乗算  → 30</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">/</span> <span class="num">3</span>)   <span class="cm"># 除算  → 3.333...</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">//</span> <span class="num">3</span>)  <span class="cm"># 整数除算 → 3</span>
<span class="kw">print</span>(<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>)   <span class="cm"># 剰余  → 1</span>
<span class="kw">print</span>(<span class="num">2</span> <span class="op">**</span> <span class="num">8</span>)   <span class="cm"># べき乗 → 256</span>

<span class="cm"># 複合代入演算子</span>
<span class="var">x</span> <span class="op">=</span> <span class="num">100</span>
<span class="var">x</span> <span class="op">+=</span> <span class="num">50</span>   <span class="cm"># x = x + 50 → 150</span>
<span class="var">x</span> <span class="op">*=</span> <span class="num">2</span>    <span class="cm"># x = x * 2  → 300</span>

<span class="cm"># 演算の優先順位（括弧で制御）</span>
<span class="var">result</span> <span class="op">=</span> (<span class="num">3</span> <span class="op">+</span> <span class="num">4</span>) <span class="op">*</span> <span class="num">2</span> <span class="op">-</span> <span class="num">1</span>  <span class="cm"># → 13</span>
<span class="kw">print</span>(<span class="var">result</span>)`,
    terms: [
      {
        word: "演算子 (Operator)",
        desc: "計算や比較などの操作を表す記号。算術演算子（+, -, *, /）、比較演算子（==, !=, <, >）、論理演算子（and, or, not）などがあります。",
        example: "5 + 3   # 算術演算子\n5 == 3  # 比較演算子 → False\n5 > 3   # 比較演算子 → True"
      },
      {
        word: "剰余 (Modulo)",
        desc: "割り算の余りを求める演算子 %。偶数・奇数の判定や、一定周期の処理に頻繁に使われます。",
        example: "10 % 3  → 1  (10÷3の余り)\n6 % 2   → 0  (偶数の判定)\n7 % 2   → 1  (奇数の判定)"
      },
      {
        word: "整数 / 浮動小数点数",
        desc: "整数(int)は小数点のない数値（0, 1, -5など）。浮動小数点数(float)は小数点を含む数値（3.14, 0.5など）。/ 演算は常にfloatを返します。",
        example: "type(5)    → int\ntype(5.0)  → float\n5 / 2      → 2.5 (float)\n5 // 2     → 2   (int)"
      },
      {
        word: "複合代入演算子",
        desc: "変数への演算と代入を一度に行う演算子。x += 1 は x = x + 1 と同じ意味。+=, -=, *=, /=, //=, %= などがあります。",
        example: "x = 10\nx += 5   # x は 15 になる\nx *= 2   # x は 30 になる"
      }
    ]
  },
  {
    id: "chapter-4",
    tag: "CHAPTER 04",
    title: "データの入出力",
    intro: "ユーザーから入力を受け取り、プログラムがそれに応答する仕組みを学びます。input関数でキーボード入力を取得し、型変換して活用します。",
    code: `<span class="cm"># キーボードから入力を受け取る</span>
<span class="var">name</span> <span class="op">=</span> <span class="bi">input</span>(<span class="str">"名前を入力してください: "</span>)
<span class="kw">print</span>(<span class="str">f"こんにちは、{<span class="var">name</span>}さん！"</span>)

<span class="cm"># 数値として受け取る（型変換が必要）</span>
<span class="var">age_str</span> <span class="op">=</span> <span class="bi">input</span>(<span class="str">"年齢を入力: "</span>)
<span class="var">age</span> <span class="op">=</span> <span class="bi">int</span>(<span class="var">age_str</span>)  <span class="cm"># 文字列 → 整数</span>
<span class="kw">print</span>(<span class="str">f"10年後は {<span class="var">age</span> <span class="op">+</span> <span class="num">10</span>} 歳です"</span>)

<span class="cm"># 一行でまとめた書き方</span>
<span class="var">price</span> <span class="op">=</span> <span class="bi">float</span>(<span class="bi">input</span>(<span class="str">"価格: "</span>))  <span class="cm"># → 小数でも受け取れる</span>
<span class="var">tax</span> <span class="op">=</span> <span class="var">price</span> <span class="op">*</span> <span class="num">1.1</span>
<span class="kw">print</span>(<span class="str">f"税込: {<span class="var">tax</span>:.2f} 円"</span>)  <span class="cm"># :.2f → 小数2桁</span>`,
    terms: [
      {
        word: "input関数",
        desc: "ユーザーからキーボード入力を受け取る組み込み関数。引数にプロンプト文字列を渡せます。受け取った値は常に文字列(str)型として返されます。",
        example: 'x = input("入力: ")  # キーボードを待つ\ntype(x)  → str  # 常に文字列'
      },
      {
        word: "型変換 (Type Casting)",
        desc: "あるデータ型を別のデータ型に変換する操作。int(), float(), str(), bool() などの関数を使います。input() はstr型を返すので、数値計算には変換が必要です。",
        example: 'int("42")    → 42\nfloat("3.14") → 3.14\nstr(100)    → "100"'
      },
      {
        word: "フォーマット指定子",
        desc: "f文字列の {} 内で、数値の表示形式を指定できます。:.2f は小数点以下2桁で浮動小数点表示、:d は整数、:, は3桁区切りなどがあります。",
        example: "x = 12345.6789\nf'{x:.2f}'  → '12345.68'\nf'{x:,.0f}' → '12,346'"
      },
      {
        word: "標準入力",
        desc: "プログラムがデータを受け取るデフォルトの入力元。通常はキーボードを指します。input() はここからデータを読み取ります。",
        example: null
      }
    ]
  },
  {
    id: "chapter-5",
    tag: "CHAPTER 05",
    title: "選択処理",
    intro: "条件によって処理を分岐させるのが if 文です。プログラムに「判断」をさせることで、状況に応じた動作が実現できます。",
    code: `<span class="cm"># 基本的な if 文</span>
<span class="var">score</span> <span class="op">=</span> <span class="num">75</span>

<span class="kw">if</span> <span class="var">score</span> <span class="op">>=</span> <span class="num">90</span>:
    <span class="kw">print</span>(<span class="str">"優秀"</span>)
<span class="kw">elif</span> <span class="var">score</span> <span class="op">>=</span> <span class="num">70</span>:
    <span class="kw">print</span>(<span class="str">"良好"</span>)   <span class="cm"># ← このブロックが実行される</span>
<span class="kw">elif</span> <span class="var">score</span> <span class="op">>=</span> <span class="num">50</span>:
    <span class="kw">print</span>(<span class="str">"普通"</span>)
<span class="kw">else</span>:
    <span class="kw">print</span>(<span class="str">"要努力"</span>)

<span class="cm"># 複数条件（and / or）</span>
<span class="var">age</span> <span class="op">=</span> <span class="num">20</span>
<span class="var">has_id</span> <span class="op">=</span> <span class="kw">True</span>

<span class="kw">if</span> <span class="var">age</span> <span class="op">>=</span> <span class="num">18</span> <span class="kw">and</span> <span class="var">has_id</span>:
    <span class="kw">print</span>(<span class="str">"入場できます"</span>)

<span class="cm"># 三項演算子（1行で分岐）</span>
<span class="var">label</span> <span class="op">=</span> <span class="str">"合格"</span> <span class="kw">if</span> <span class="var">score</span> <span class="op">>=</span> <span class="num">60</span> <span class="kw">else</span> <span class="str">"不合格"</span>
<span class="kw">print</span>(<span class="var">label</span>)`,
    terms: [
      {
        word: "if文 (条件分岐)",
        desc: "条件が True のときだけ特定の処理を実行する制御構文。elif で追加条件、else で「それ以外」を記述します。Pythonはインデント（字下げ）でブロックを表します。",
        example: "if x > 0:\n    print('正')\nelif x < 0:\n    print('負')\nelse:\n    print('ゼロ')"
      },
      {
        word: "比較演算子",
        desc: "2つの値を比較して True か False を返す演算子。== (等しい)、!= (等しくない)、> (より大きい)、< (より小さい)、>= (以上)、<= (以下) があります。",
        example: "5 == 5   → True\n5 != 3   → True\n5 > 3    → True\n5 <= 4   → False"
      },
      {
        word: "論理演算子",
        desc: "複数の条件を組み合わせる演算子。and（両方がTrue）、or（どちらかがTrue）、not（真偽を反転）があります。",
        example: "True and False  → False\nTrue or False   → True\nnot True        → False"
      },
      {
        word: "真偽値 (Boolean)",
        desc: "True（真）または False（偽）の2値しか取らないデータ型。条件式の評価結果として使われます。0, 空文字列, None などは Falsy として扱われます。",
        example: "bool(1)    → True\nbool(0)    → False\nbool(\"\")   → False\nbool(\"hi\") → True"
      }
    ]
  },
  {
    id: "chapter-6",
    tag: "CHAPTER 06",
    title: "繰り返し処理",
    intro: "同じ処理を何度も実行する「ループ」はプログラムの根幹機能です。for ループと while ループを使いこなしましょう。",
    code: `<span class="cm"># for ループ（リストの要素を順番に処理）</span>
<span class="var">fruits</span> <span class="op">=</span> [<span class="str">"りんご"</span>, <span class="str">"みかん"</span>, <span class="str">"ぶどう"</span>]
<span class="kw">for</span> <span class="var">fruit</span> <span class="kw">in</span> <span class="var">fruits</span>:
    <span class="kw">print</span>(<span class="var">fruit</span>)

<span class="cm"># range() で数値を繰り返す</span>
<span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="bi">range</span>(<span class="num">1</span>, <span class="num">6</span>):     <span class="cm"># 1〜5</span>
    <span class="kw">print</span>(<span class="var">i</span>, <span class="str">"の2乗は"</span>, <span class="var">i</span> <span class="op">**</span> <span class="num">2</span>)

<span class="cm"># while ループ（条件が真の間繰り返す）</span>
<span class="var">count</span> <span class="op">=</span> <span class="num">0</span>
<span class="kw">while</span> <span class="var">count</span> <span class="op"><</span> <span class="num">5</span>:
    <span class="kw">print</span>(<span class="str">f"カウント: {<span class="var">count</span>}"</span>)
    <span class="var">count</span> <span class="op">+=</span> <span class="num">1</span>

<span class="cm"># break / continue</span>
<span class="kw">for</span> <span class="var">n</span> <span class="kw">in</span> <span class="bi">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> <span class="var">n</span> <span class="op">%</span> <span class="num">2</span> <span class="op">==</span> <span class="num">0</span>: <span class="kw">continue</span>  <span class="cm"># 偶数はスキップ</span>
    <span class="kw">if</span> <span class="var">n</span> <span class="op">==</span> <span class="num">7</span>: <span class="kw">break</span>          <span class="cm"># 7で終了</span>
    <span class="kw">print</span>(<span class="var">n</span>)  <span class="cm"># → 1, 3, 5</span>`,
    terms: [
      {
        word: "forループ",
        desc: "リスト・文字列などの要素を先頭から順番に取り出しながら処理を繰り返す構文。要素の数だけ自動的に繰り返します。",
        example: "for x in [1, 2, 3]:\n    print(x)\n# 出力: 1, 2, 3"
      },
      {
        word: "whileループ",
        desc: "条件式が True である間、処理を繰り返す構文。繰り返し回数が事前にわからない場合や、ユーザー入力を待つ場合に使います。無限ループに注意が必要です。",
        example: "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1\n# 出力: 1, 2, 3"
      },
      {
        word: "range関数",
        desc: "連続した整数列を生成する組み込み関数。range(stop)、range(start, stop)、range(start, stop, step) の形式で使います。",
        example: "list(range(5))       → [0,1,2,3,4]\nlist(range(1,6))     → [1,2,3,4,5]\nlist(range(0,10,2))  → [0,2,4,6,8]"
      },
      {
        word: "break / continue",
        desc: "ループを制御するキーワード。break はループ全体を即時終了します。continue は現在の繰り返しをスキップして次へ進みます。",
        example: "for i in range(5):\n    if i == 3: break   # 3でループ終了\n    print(i)  # 0, 1, 2"
      }
    ]
  },
  {
    id: "chapter-7",
    tag: "CHAPTER 07",
    title: "関数の定義",
    intro: "処理をまとめて名前をつけ、何度でも再利用できるようにしたものが「関数」です。コードの重複を減らし、読みやすく保守しやすいプログラムを書けます。",
    code: `<span class="cm"># 基本的な関数定義</span>
<span class="kw">def</span> <span class="fn">greet</span>(<span class="var">name</span>):
    <span class="var">message</span> <span class="op">=</span> <span class="str">f"こんにちは、{<span class="var">name</span>}さん！"</span>
    <span class="kw">return</span> <span class="var">message</span>

<span class="kw">print</span>(<span class="fn">greet</span>(<span class="str">"花子"</span>))  <span class="cm"># → こんにちは、花子さん！</span>

<span class="cm"># デフォルト引数</span>
<span class="kw">def</span> <span class="fn">power</span>(<span class="var">base</span>, <span class="var">exp</span><span class="op">=</span><span class="num">2</span>):
    <span class="kw">return</span> <span class="var">base</span> <span class="op">**</span> <span class="var">exp</span>

<span class="kw">print</span>(<span class="fn">power</span>(<span class="num">3</span>))      <span class="cm"># → 9  (3の2乗)</span>
<span class="kw">print</span>(<span class="fn">power</span>(<span class="num">2</span>, <span class="num">10</span>))  <span class="cm"># → 1024</span>

<span class="cm"># 複数の値を返す</span>
<span class="kw">def</span> <span class="fn">min_max</span>(<span class="var">numbers</span>):
    <span class="kw">return</span> <span class="bi">min</span>(<span class="var">numbers</span>), <span class="bi">max</span>(<span class="var">numbers</span>)

<span class="var">lo</span>, <span class="var">hi</span> <span class="op">=</span> <span class="fn">min_max</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>])
<span class="kw">print</span>(<span class="str">f"最小: {<span class="var">lo</span>}, 最大: {<span class="var">hi</span>}"</span>)  <span class="cm"># → 最小: 1, 最大: 9</span>`,
    terms: [
      {
        word: "関数 (Function)",
        desc: "特定の処理をまとめて名前をつけたもの。def キーワードで定義します。処理を分割・再利用することで、コードの可読性と保守性が上がります。",
        example: "def add(a, b):\n    return a + b\n\nresult = add(3, 5)  # → 8"
      },
      {
        word: "引数と戻り値",
        desc: "引数（パラメータ）は関数に渡す入力値。戻り値は return で返す出力値。関数は入力を受け取り処理して出力を返す「変換器」のようなものです。",
        example: "def square(x):  # x が引数\n    return x * x  # x*x が戻り値\n\ny = square(4)   # y = 16"
      },
      {
        word: "スコープ (Scope)",
        desc: "変数が参照できる有効範囲。関数内で定義した変数はローカルスコープを持ち、外部からアクセスできません。関数外の変数はグローバルスコープです。",
        example: "x = 10  # グローバル変数\ndef f():\n    y = 20  # ローカル変数\n    print(x)  # 参照できる\nprint(y)  # エラー！"
      },
      {
        word: "デフォルト引数",
        desc: "関数定義時に引数のデフォルト値を指定できます。呼び出し時にその引数を省略すると、デフォルト値が使われます。",
        example: "def hello(name='世界'):\n    print(f'Hello, {name}!')\n\nhello()        # Hello, 世界!\nhello('太郎')  # Hello, 太郎!"
      }
    ]
  },
  {
    id: "chapter-8",
    tag: "CHAPTER 08",
    title: "標準ライブラリを使う",
    intro: "Pythonには最初から使える便利な「標準ライブラリ」が豊富に揃っています。import するだけで数学・日付・乱数・正規表現などの機能を利用できます。",
    code: `<span class="kw">import</span> <span class="bi">math</span>
<span class="kw">import</span> <span class="bi">random</span>
<span class="kw">import</span> <span class="bi">datetime</span>

<span class="cm"># math — 数学関数</span>
<span class="kw">print</span>(<span class="bi">math</span>.sqrt(<span class="num">144</span>))      <span class="cm"># → 12.0</span>
<span class="kw">print</span>(<span class="bi">math</span>.pi)              <span class="cm"># → 3.141592...</span>
<span class="kw">print</span>(<span class="bi">math</span>.ceil(<span class="num">4.2</span>))      <span class="cm"># → 5 (切り上げ)</span>

<span class="cm"># random — 乱数</span>
<span class="kw">print</span>(<span class="bi">random</span>.randint(<span class="num">1</span>, <span class="num">6</span>))  <span class="cm"># サイコロ (1〜6)</span>
<span class="var">cards</span> <span class="op">=</span> [<span class="str">"♠A"</span>, <span class="str">"♥K"</span>, <span class="str">"♦Q"</span>, <span class="str">"♣J"</span>]
<span class="bi">random</span>.shuffle(<span class="var">cards</span>)       <span class="cm"># シャッフル</span>
<span class="kw">print</span>(<span class="var">cards</span>[<span class="num">0</span>])             <span class="cm"># ランダムな1枚</span>

<span class="cm"># datetime — 日付・時刻</span>
<span class="var">now</span> <span class="op">=</span> <span class="bi">datetime</span>.datetime.now()
<span class="kw">print</span>(<span class="var">now</span>.strftime(<span class="str">"%Y年%m月%d日"</span>))`,
    terms: [
      {
        word: "import文",
        desc: "外部モジュール（ライブラリ）をプログラムに読み込む構文。import math, from math import sqrt のように書きます。一度定義された機能を再利用できます。",
        example: "import math          # math全体\nfrom math import sqrt # sqrt だけ\nimport random as rnd  # 別名で"
      },
      {
        word: "標準ライブラリ",
        desc: "Pythonに最初から付属する公式ライブラリ群。インストール不要で使えます。math（数学）, random（乱数）, datetime（日付）, os（OS操作）, json（JSON）など多数あります。",
        example: null
      },
      {
        word: "モジュール / パッケージ",
        desc: "モジュールは .py ファイル1つ。パッケージは複数のモジュールをまとめたフォルダ。import で読み込んで使います。pip でサードパーティ製パッケージも追加できます。",
        example: "import os\nprint(os.getcwd())  # 現在のディレクトリ\nprint(os.listdir()) # ファイル一覧"
      },
      {
        word: "名前空間 (Namespace)",
        desc: "変数・関数・クラスなどの名前が定義されているスコープ。import math とすると math という名前空間が作られ、math.sqrt() のようにアクセスします。",
        example: "import math\nmath.pi    # math 名前空間の pi\n\nfrom math import pi\npi         # 直接 pi にアクセス"
      }
    ]
  },
  {
    id: "chapter-9",
    tag: "CHAPTER 09",
    title: "ファイル処理",
    intro: "プログラムの実行結果を保存したり、外部データを読み込んだりする「ファイル入出力」を学びます。with 文を使った安全なファイル操作が基本です。",
    code: `<span class="cm"># ファイルへの書き込み（上書き）</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"memo.txt"</span>, <span class="str">"w"</span>, encoding<span class="op">=</span><span class="str">"utf-8"</span>) <span class="kw">as</span> <span class="var">f</span>:
    <span class="var">f</span>.write(<span class="str">"1行目のテキスト\n"</span>)
    <span class="var">f</span>.write(<span class="str">"2行目のテキスト\n"</span>)

<span class="cm"># ファイルの読み込み（全体）</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"memo.txt"</span>, <span class="str">"r"</span>, encoding<span class="op">=</span><span class="str">"utf-8"</span>) <span class="kw">as</span> <span class="var">f</span>:
    <span class="var">content</span> <span class="op">=</span> <span class="var">f</span>.read()
    <span class="kw">print</span>(<span class="var">content</span>)

<span class="cm"># 1行ずつ読み込む</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"memo.txt"</span>, <span class="str">"r"</span>, encoding<span class="op">=</span><span class="str">"utf-8"</span>) <span class="kw">as</span> <span class="var">f</span>:
    <span class="kw">for</span> <span class="var">line</span> <span class="kw">in</span> <span class="var">f</span>:
        <span class="kw">print</span>(<span class="var">line</span>.strip())  <span class="cm"># 改行を除去</span>

<span class="cm"># ファイルへの追記（既存を保持）</span>
<span class="kw">with</span> <span class="bi">open</span>(<span class="str">"memo.txt"</span>, <span class="str">"a"</span>, encoding<span class="op">=</span><span class="str">"utf-8"</span>) <span class="kw">as</span> <span class="var">f</span>:
    <span class="var">f</span>.write(<span class="str">"追記された3行目\n"</span>)`,
    terms: [
      {
        word: "open関数",
        desc: "ファイルを開いてファイルオブジェクトを返す組み込み関数。第1引数にファイルパス、第2引数にモード(r=読込, w=書込, a=追記, b=バイナリ)を指定します。",
        example: "open('data.txt', 'r')  # 読み込み\nopen('out.txt', 'w')   # 書き込み\nopen('log.txt', 'a')   # 追記"
      },
      {
        word: "with文",
        desc: "ファイルやリソースを安全に扱うための構文。ブロックを抜けると自動的にファイルが閉じられます（close() 不要）。例外が発生しても必ずクリーンアップされます。",
        example: "with open('f.txt') as f:\n    data = f.read()\n# ここで自動的に close()"
      },
      {
        word: "エンコーディング",
        desc: "文字をバイト列に変換する方式。日本語ファイルには utf-8 が推奨です。encoding を指定しないと環境によって文字化けが起きることがあります。",
        example: "# utf-8 を明示的に指定\nopen('japanese.txt', encoding='utf-8')\n\n# 省略すると環境依存になる"
      },
      {
        word: "ファイルオブジェクト",
        desc: "open() が返すオブジェクト。read()（全体読込）、readline()（1行読込）、readlines()（全行リスト）、write()（書き込み）などのメソッドを持ちます。",
        example: "f.read()       # ファイル全体を文字列で返す\nf.readline()   # 1行分を返す\nf.readlines()  # 全行のリストを返す"
      }
    ]
  }
];

// ===========================
// DOM生成
// ===========================
function buildNav() {
  const navList = document.getElementById("nav-list");
  const drawerList = document.getElementById("drawer-nav-list");

  CHAPTERS.forEach(ch => {
    if (ch.isBanner) return; // バナーはナビに表示しない
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${ch.id}`;
    // ナビリンク：番号＋タイトルを2行で
    const num = ch.tag.replace("CHAPTER ", "");
    a.innerHTML = `<span class="nav-num">Ch.${num}</span><span class="nav-name">${ch.title}</span>`;
    a.title = ch.title;

    const dLi = li.cloneNode();
    const dA = a.cloneNode(true);

    li.appendChild(a);
    dLi.appendChild(dA);
    navList.appendChild(li);
    drawerList.appendChild(dLi);
  });
}

function buildChapters() {
  const container = document.getElementById("chapters-container");

  CHAPTERS.forEach((ch, idx) => {
    // バナーチャプターは専用レンダリング
    if (ch.isBanner) {
      const div = document.createElement("div");
      div.classList.add("chapter-banner-wrap");
      div.innerHTML = ch.bannerHTML;
      container.appendChild(div);
      return;
    }

    const section = document.createElement("section");
    section.classList.add("chapter");
    section.id = ch.id;

    // 用語ピル HTML
    const termPills = (ch.terms || []).map(t =>
      `<button class="term-pill" data-term="${encodeURIComponent(JSON.stringify(t))}">${t.word}</button>`
    ).join("");

    const badgeNum = ch.id === "chapter-0" ? "00" : String(idx - 1).padStart(2, "0");
    const codeLabel = ch.id === "chapter-0" ? "擬似コード" : "Python";
    section.innerHTML = `
      <div class="chapter-badge">${badgeNum}</div>
      <div class="chapter-meta">
        <span class="chapter-tag">${ch.tag}</span>
      </div>
      <h2 class="chapter-title">${ch.title}</h2>
      <p class="chapter-intro">${ch.intro}</p>
      ${ch.visual ? ch.visual : ""}
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">${codeLabel}</span>
          <button class="copy-btn">コピー</button>
        </div>
        <pre><code>${ch.code}</code></pre>
      </div>
      <div class="terms-section">
        <div class="terms-title">📖 用語解説</div>
        <div class="terms-grid">${termPills}</div>
      </div>
    `;

    container.appendChild(section);
  });
}

// ===========================
// コピーボタン
// ===========================
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.closest(".code-block").querySelector("pre code");
      // テキストコンテンツを取得（HTMLタグを除去）
      const text = code.textContent;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "✓ コピー済み";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "コピー";
          btn.classList.remove("copied");
        }, 2000);
      }).catch(() => {
        btn.textContent = "failed";
      });
    });
  });
}

// ===========================
// 用語モーダル
// ===========================
function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const termEl  = document.getElementById("modal-term");
  const descEl  = document.getElementById("modal-desc");
  const exEl    = document.getElementById("modal-example");
  const closeBtn = document.getElementById("modal-close");

  document.addEventListener("click", e => {
    const pill = e.target.closest(".term-pill");
    if (!pill) return;

    const termData = JSON.parse(decodeURIComponent(pill.dataset.term));
    termEl.textContent = termData.word;
    descEl.textContent = termData.desc;

    if (termData.example) {
      exEl.textContent = termData.example;
      exEl.classList.add("visible");
    } else {
      exEl.textContent = "";
      exEl.classList.remove("visible");
    }

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  const closeModal = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

// ===========================
// スクロール進捗バー
// ===========================
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

// ===========================
// スクロールアニメーション（IntersectionObserver）
// ===========================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".chapter").forEach(el => observer.observe(el));
}

// ===========================
// アクティブナビ
// ===========================
function initActiveNav() {
  const sections = document.querySelectorAll(".chapter");
  const navLinks = document.querySelectorAll(".main-nav a, .drawer a");
  const navUl = document.querySelector(".main-nav ul");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isActive);

          // アクティブなリンクをナビ内で見える位置にスクロール
          if (isActive && link.closest(".main-nav") && navUl) {
            const linkLeft = link.offsetLeft;
            const linkWidth = link.offsetWidth;
            const navWidth = navUl.offsetWidth;
            navUl.scrollTo({
              left: linkLeft - navWidth / 2 + linkWidth / 2,
              behavior: "smooth"
            });
          }
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
}

// ===========================
// ハンバーガーメニュー
// ===========================
function initHamburger() {
  const btn     = document.getElementById("hamburger");
  const drawer  = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");

  const toggle = () => {
    const open = drawer.classList.toggle("open");
    overlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  btn.addEventListener("click", toggle);
  overlay.addEventListener("click", toggle);

  // ドロワーリンクをクリックしたら閉じる
  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// ===========================
// 初期化
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildChapters();
  initCopyButtons();
  initModal();
  initProgressBar();
  initScrollReveal();
  initActiveNav();
  initHamburger();
});