const comments = [

  ["比叡山の人", "いや、後ろ燃えてるんですが"],

  ["歴史好き", "火葬の規模どうなってんの？"],

  ["名無し", "ホトトギス1羽に対して延暦寺はやりすぎだろ"],

  ["最澄ファン", "ちょっと待て"],

  ["名無し", "「安らかに眠ってくれ」じゃないんよ"],

  ["比叡山の住民", "こっちは全然安らかじゃない"],

  ["歴史警察", "誰か止める人いなかったの？"],

  ["名無し", "これニュースになるやつでは"],

  ["古都民", "延暦寺を巻き込むな"],

  ["名無し", "コメント欄が追いついてない"],

  ["匿名", "いや何してんの？？？"],

  ["通行人", "朝起きてこれ見たんだけど何事"],

  ["一般人", "普通に引いた"],

  ["受験生", "ホトトギス関係なくなってて草"],

  ["既読つかない民", "やりすぎじゃない？"],

  ["月曜絶対休みたい", "これは笑えないって"],

  ["布団から出ない人", "さすがにこれは擁護できん"],

  ["プリン監視員", "誰かこの人止めて"],

  ["Wi-Fi難民", "規模おかしくない？"],

  ["深夜テンション勢", "コメント欄荒れてて草"],

  ["鳩に餌あげる係", "普通に怖いんだけど"],

  ["冷蔵庫の奥の人", "これが許されると思ってるのすごい"],

  ["既視感の正体", "やったことエグすぎて言葉出ない"],

  ["通知ためがち", "ニュース見て来ました"],

  ["野次馬代表", "炎上してるから見に来た"],

  ["寝落ち常習犯", "いやこれはアンチになるわ"],

  ["お茶漬け研究会", "投稿消した方がいいと思います"],

  ["画面の向こう側", "いいね多すぎてさらに怖い"],

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
