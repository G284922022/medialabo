let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
//hantei();
//hantei();
//hantei();
//hantei();

let ha = document.querySelector('#print');
ha.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  //let yoso = 4;
  let i = document.querySelector('input[name="nyuryoku"]');
  let yoso = i.value;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  //for(let i = 1;i<=4;i++){
    kaisu ++;
    let kais = document.querySelector('span#kaisu');
    kais = kaisu;
    document.getElementById('kaisu').textContent = kais;
    let ans = document.querySelector('span#answer');
    ans = yoso;
    document.getElementById('answer').textContent = ans;

    var re = document.querySelector('span#result');
    if(kaisu>=4){
        if(kotae===yoso&&kaisu===4){
            re = ("正解です。おめでとう!");
        }else{
          re = ("正解は "+kotae+"でした。すでにゲームは終わっています。");
        }
    }else if(yoso===kotae){
      re = ("正解です。おめでとう!");
    }else if(kaisu===3){
        if(kotae===yoso){
            re = ("正解です。おめでとう!");
        }else{
            re = ("まちがい．残念でした答えは "+kotae+" です。");
        }
    }else if(kotae>yoso){
        re = ("まちがい．答えはもっと大きいですよ");
    }else if(kotae<yoso){
        re = ("まちがい．答えはもっと小さいですよ");
    }
      //}
   document.getElementById('result').textContent = re;
  // 課題3-1における出力先はコンソール
  
}