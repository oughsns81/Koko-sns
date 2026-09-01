const comments = [
  ["比叡山の人", "いや、後ろ燃えてるんですが"],
  ["歴史好き", "火葬の規模どうなってんの？"],
  ["名無しさん", "ホトトギス1羽に対して延暦寺はやりすぎだろ"],
  ["最澄ファン", "ちょっと待て"],
  ["名無しさん", "「安らかに眠ってくれ」じゃないんよ"],
  ["比叡山の住民", "こっちは全然安らかじゃない"],
  ["歴史警察", "誰か止める人いなかったの？"],
  ["名無しさん", "これニュースになるやつでは"],
  ["古都民", "延暦寺を巻き込むな"],
  ["名無しさん", "コメント欄が追いついてない"],
  ["歴史好き", "今日いちばん燃えてるのここ"],
  ["トレンド監視員", "#延暦寺炎上 がトレンド入りしてます"],
];

const list = document.getElementById("commentList");
const count = document.getElementById("commentCount");
let i = 0;

function addComment() {
  if (i >= comments.length) return;

  const [name, text] = comments[i];
  const el = document.createElement("article");
  el.className = "comment";
  el.innerHTML = `
    <div class="comment-head">
      <div class="mini-avatar">${name.charAt(0)}</div>
      <div class="comment-name">${name} <span>@history_user${i + 1}</span></div>
    </div>
    <div class="comment-text">${text}</div>
  `;
  list.appendChild(el);

  i++;
  count.textContent = i;

  if (i < comments.length) {
    setTimeout(addComment, 1800);
  }
}

setTimeout(addComment, 1800);
